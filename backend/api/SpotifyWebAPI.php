<?php
namespace SpotifyWebAPI;

class SpotifyWebAPI
{
    const RETURN_ASSOC = 'assoc';
    const RETURN_OBJECT = 'object';

    protected $accessToken = '';
    protected $lastResponse = [];
    protected $options = [
        'auto_refresh' => false,
        'auto_retry' => false,
    ];
    protected $request = null;
    protected $session = null;

    /**
     * Constructor
     * Set up Request object.
     *
     * @param Request $request Optional. The Request object to use.
     */
    public function __construct($request = null)
    {
        $this->request = $request ?: new Request();
    }

    /**
     * Add authorization headers.
     *
     * @param $headers array. Optional. Additional headers to merge with the authorization headers.
     *
     * @return array Authorization headers, optionally merged with the passed ones.
     */
    protected function authHeaders($headers = [])
    {
        if ($this->session) {
            $accessToken = $this->session->getAccessToken();
        } else {
            $accessToken = $this->accessToken;
        }

        if ($accessToken) {
            $headers = array_merge($headers, [
                'Authorization' => 'Bearer ' . $accessToken,
            ]);
        }

        return $headers;
    }

    /**
     * Send a request to the Spotify API, automatically refreshing the access token as needed.
     *
     * @param string $method The HTTP method to use.
     * @param string $uri The URI to request.
     * @param array $parameters Optional. Query string parameters or HTTP body, depending on $method.
     * @param array $headers Optional. HTTP headers.
     *
     * @throws SpotifyWebAPIException
     * @throws SpotifyWebAPIAuthException
     *
     * @return array Response data.
     * - array|object body The response body. Type is controlled by `SpotifyWebAPI::setReturnType()`.
     * - array headers Response headers.
     * - int status HTTP status code.
     * - string url The requested URL.
     */
    protected function sendRequest($method, $uri, $parameters = [], $headers = [])
    {
        try {
            return $this->request->api($method, $uri, $parameters, $headers);
        } catch (SpotifyWebAPIException $e) {
            if ($this->options['auto_refresh'] && $e->hasExpiredToken()) {
                $result = $this->session->refreshAccessToken();

                if (!$result) {
                    throw new SpotifyWebAPIException('Could not refresh access token.');
                }

                $headers = $this->authHeaders($headers);

                return $this->sendRequest($method, $uri, $parameters, $headers);
            } elseif ($this->options['auto_retry'] && $e->isRateLimited()) {
                $lastResponse = $this->request->getLastResponse();
                $retryAfter = (int) $lastResponse['headers']['Retry-After'];

                sleep($retryAfter);

                return $this->sendRequest($method, $uri, $parameters, $headers);
            }

            throw $e;
        }
    }

    /**
     * Convert Spotify object IDs to Spotify URIs.
     *
     * @param array|string $ids ID(s) to convert.
     * @param string $type Spotify object type.
     *
     * @return array|string Spotify URI(s).
     */
    protected function idToUri($ids, $type)
    {
        $type = 'spotify:' . $type . ':';

        $ids = array_map(function ($id) use ($type) {
            if (substr($id, 0, strlen($type)) != $type) {
                $id = $type . $id;
            }

            return $id;
        }, (array) $ids);

        return (count($ids) == 1) ? $ids[0] : $ids;
    }

    /**
     * Convert Spotify URIs to Spotify object IDs
     *
     * @param array|string $uriIds URI(s) to convert.
     * @param string $type Spotify object type.
     *
     * @return array|string Spotify ID(s).
     */
    protected function uriToId($uriIds, $type)
    {
        $type = 'spotify:' . $type . ':';

        $uriIds = array_map(function ($id) use ($type) {
            return str_replace($type, '', $id);
        }, (array) $uriIds);

        return (count($uriIds) == 1) ? $uriIds[0] : $uriIds;
    }
  
    
    /**
     * Get a list of possible seed genres.
     * https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/
     *
     * @return array|object All possible seed genres. Type is controlled by `SpotifyWebAPI::setReturnType()`.
     */
    public function getGenreSeeds()
    {
        $headers = $this->authHeaders();

        $uri = '/v1/recommendations/available-genre-seeds';

        $this->lastResponse = $this->sendRequest('GET', $uri, [], $headers);

        return $this->lastResponse['body'];
    }

    /**
     * Get the latest full response from the Spotify API.
     *
     * @return array Response data.
     * - array|object body The response body. Type is controlled by `SpotifyWebAPI::setReturnType()`.
     * - array headers Response headers.
     * - int status HTTP status code.
     * - string url The requested URL.
     */
    public function getLastResponse()
    {
        return $this->lastResponse;
    }

   
    /**
     * Get the current user’s devices.
     * https://developer.spotify.com/documentation/web-api/reference/player/get-a-users-available-devices/
     *
     * @return array|object The user's devices. Type is controlled by `SpotifyWebAPI::setReturnType()`.
     */
    public function getMyDevices()
    {
        $headers = $this->authHeaders();

        $uri = '/v1/me/player/devices';

        $this->lastResponse = $this->sendRequest('GET', $uri, [], $headers);

        return $this->lastResponse['body'];
    }


    /**
      * Get the current user’s recently played tracks.
      * https://developer.spotify.com/documentation/web-api/reference/player/get-recently-played/
      *
      * @param array|object $options Optional. Options for the tracks.
      * - int limit Optional. Number of tracks to return.
      * - string after Optional. Unix timestamp in ms (13 digits). Returns all items after this position.
      * - string before Optional. Unix timestamp in ms (13 digits). Returns all items before this position.
      *
      * @return array|object The most recently played tracks. Type is controlled by `SpotifyWebAPI::setReturnType()`.
      */
    public function getMyRecentTracks($options = [])
    {
        $options = (array) $options;

        $headers = $this->authHeaders();

        $uri = '/v1/me/player/recently-played';

        $this->lastResponse = $this->sendRequest('GET', $uri, $options, $headers);

        return $this->lastResponse['body'];
    }

   

    /**
     * Get the current user's top tracks or artists.
     * https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/
     *
     * @param string $type The type of entity to fetch.
     * @param array $options Optional. Options for the results.
     * - int limit Optional. Limit the number of tracks.
     * - int offset Optional. Number of tracks to skip.
     * - string time_range Optional. Over what time frame the data is calculated. See Spotify API docs for more info.
     *
     * @return array|object A list of the requested top entity. Type is controlled by `SpotifyWebAPI::setReturnType()`.
     */
    public function getMyTop($type, $options = [])
    {
        $headers = $this->authHeaders();

        $uri = '/v1/me/top/' . $type;

        $this->lastResponse = $this->sendRequest('GET', $uri, $options, $headers);

        return $this->lastResponse['body'];
    }

   
    /**
     * Get recommendations based on artists, tracks, or genres.
     * https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/
     *
     * @param array|object $options Optional. Options for the recommendations.
     * - int limit Optional. Limit the number of recommendations.
     * - string market Optional. An ISO 3166-1 alpha-2 country code, provide this if you wish to apply Track Relinking.
     * - mixed max_* Optional. Max value for one of the tunable track attributes.
     * - mixed min_* Optional. Min value for one of the tunable track attributes.
     * - array seed_artists Artist IDs to seed by.
     * - array seed_genres Genres to seed by. Call SpotifyWebAPI::getGenreSeeds() for a complete list.
     * - array seed_tracks Track IDs to seed by.
     * - mixed target_* Optional. Target value for one of the tunable track attributes.
     *
     * @return array|object The requested recommendations. Type is controlled by `SpotifyWebAPI::setReturnType()`.
     */
    public function getRecommendations($options = [])
    {
        $options = (array) $options;

        array_walk($options, function (&$value, $key) {
            if (substr($key, 0, 5) == 'seed_') {
                $value = implode(',', $value);
            }
        });

        $headers = $this->authHeaders();

        $uri = '/v1/recommendations';

        $this->lastResponse = $this->sendRequest('GET', $uri, $options, $headers);

        return $this->lastResponse['body'];
       
    }

    /**
     * Get a value indicating the response body type.
     *
     * @return string A value indicating if the response body is an object or associative array.
     */
    public function getReturnType()
    {
        return $this->request->getReturnType();
    }

    /**
     * Get the Request object in use.
     *
     * @return Request The Request object in use.
     */
    public function getRequest()
    {
        return $this->request;
    }

    /**
     * Get a track.
     * https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/
     *
     * @param string $trackId ID or Spotify URI of the track.
     * @param array|object $options Optional. Options for the track.
     * - string market Optional. An ISO 3166-1 alpha-2 country code, provide this if you wish to apply Track Relinking.
     *
     * @return array|object The requested track. Type is controlled by `SpotifyWebAPI::setReturnType()`.
     */
    public function getTrack($trackId, $options = [])
    {
        $headers = $this->authHeaders();

        $trackId = $this->uriToId($trackId, 'track');
        $uri = '/v1/tracks/' . $trackId;

        $this->lastResponse = $this->sendRequest('GET', $uri, $options, $headers);

        return $this->lastResponse['body'];
    }


    /**
     * Get the currently authenticated user.
     * https://developer.spotify.com/documentation/web-api/reference/users-profile/get-current-users-profile/
     *
     * @return array|object The currently authenticated user. Type is controlled by `SpotifyWebAPI::setReturnType()`.
     */
    public function me()
    {
        $headers = $this->authHeaders();

        $uri = '/v1/me';

        $this->lastResponse = $this->sendRequest('GET', $uri, [], $headers);

        return $this->lastResponse['body'];
    }

    
    /**
     * Search for an item.
     * https://developer.spotify.com/documentation/web-api/reference/search/search/
     *
     * @param string $query The term to search for.
     * @param string|array $type The type of item to search for.
     * @param array|object $options Optional. Options for the search.
     * - string market Optional. Limit the results to items that are playable in this market, for example SE.
     * - int limit Optional. Limit the number of items.
     * - int offset Optional. Number of items to skip.
     *
     * @return array|object The search results. Type is controlled by `SpotifyWebAPI::setReturnType()`.
     */
    public function search($query, $type, $options = [])
    {
        $type = implode(',', (array) $type);
        $options = array_merge((array) $options, [
            'q' => $query,
            'type' => $type,
        ]);

        $headers = $this->authHeaders();

        $uri = '/v1/search';

        $this->lastResponse = $this->sendRequest('GET', $uri, $options, $headers);

        return $this->lastResponse['body'];
    }

    /**
     * Set the access token to use.
     *
     * @param string $accessToken The access token.
     *
     * @return void
     */
    public function setAccessToken($accessToken)
    {
        $this->accessToken = $accessToken;
    }

    /**
     * Set options
     *
     * @param array|object $options Options to set.
     *
     * @return void
     */
    public function setOptions($options)
    {
        $this->options = array_merge($this->options, (array) $options);
    }

    /**
     * Set the return type for the response body.
     *
     * @param string $returnType One of the `SpotifyWebAPI::RETURN_*` constants.
     *
     * @return void
     */
    public function setReturnType($returnType)
    {
        $this->request->setReturnType($returnType);
    }

    /**
     * Set the Session object to use.
     *
     * @param Session $session The Session object.
     *
     * @return void
     */
    public function setSession($session)
    {
        $this->session = $session;
    }

    
}
?>
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// Class Imports
import { Policy } from "@classes/policy";
import { Event } from "@classes/event";
import { QueuedSong } from "@classes/queuedSong";
import { Song } from "@classes/song";
import { Token } from "@classes/token";
import { User } from "@classes/user";
import { Vote } from "@classes/vote";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
  // PHP_API_SERVER = "http://db.cse.nd.edu/cse30246/mmdj/backend/api";
  PHP_API_SERVER = "http://ec2-3-15-21-28.us-east-2.compute.amazonaws.com/backend/api";
// PHP_API_SERVER_DOM = "http://db.cse.nd.edu/cse30246/mmdj/backend/api";
// PHP_API_SERVER_DOM = "http://db.cse.nd.edu/cse30246/tutorial/dom";
// PHP_API_SERVER = "http://db.cse.nd.edu/cse30246/tutorial/dom";
constructor(private httpClient: HttpClient) {}


// Get
    // Spotify API
            get_spotify_login(){
               return this.httpClient.get<User>(`${this.PHP_API_SERVER}/auth.php`).pipe(catchError(this.errorHandler));
            }

    // events Table
        get_event(id: number){
            return this.httpClient.get<Event[]>(`${this.PHP_API_SERVER}/get_event.php/?id=${id}`).pipe(catchError(this.errorHandler));
        }

        get_events_by_user(user_id: number){
            return this.httpClient.get<Event[]>(`${this.PHP_API_SERVER}/get_events_by_user.php/?id=${user_id}`).pipe(catchError(this.errorHandler));
        }

        get_event_current_song(event_id: number){
            return this.httpClient.get<Song>(`${this.PHP_API_SERVER}/get_event_current_song.php/?id=${event_id}`).pipe(catchError(this.errorHandler));
        }

    // queuedSongs Table
        // get all songs in queue for an event, in order
        get_queuedSongs(event_id: number):Observable<Song[]>{
            return this.httpClient.get<Song[]>(`${this.PHP_API_SERVER}/get_queuedSongs.php/?id=${event_id}"`).pipe(catchError(this.errorHandler));
        }

        // get all songs in queue for an event, in order with user votes
        get_queuedSongsVotes(event_id: number, user_id: number):Observable<Song[]>{
            return this.httpClient.get<Song[]>(`${this.PHP_API_SERVER}/get_queuedSongsVotes.php/?event_id=${event_id}&user_id=${user_id}"`).pipe(catchError(this.errorHandler));
        }

    // songs Table
        // for a search by name
        get_songs(query: string) {
          return this.httpClient.get<Song[]>(`${this.PHP_API_SERVER}/get_songs.php/?query=${query}`).pipe(catchError(this.errorHandler));
        }

        get_song(song_id: string, platform: string){
            return this.httpClient.get<Song>(`${this.PHP_API_SERVER}/get_song.php/?song_id=${song_id}&platform=${platform}`).pipe(catchError(this.errorHandler));
        }


    // Search Bar

        gethelper_Searchbar_Artist(search: string){
            throw new Error("Method not implemented.");
        }

        gethelper_Searchbar_Songs(search: string){
            return this.httpClient.get<Song[]>(`${this.PHP_API_SERVER}/gethelper_Searchbar_Songs.php/?search=${search}`).pipe(catchError(this.errorHandler));
        }

        get_Searchbar(search: string){
            this.gethelper_Searchbar_Songs(search);
            //TODO
            //this.gethelper_Searchbar_Artists(search);
            //this.gethelper_Searchbar_Albums(search);
        }

    // Play Song
        get_PlayableSong(){
            throw new Error("Method not implemented.");
        }

    // Play Song
        get_user_votes(user_id: number, event_id: number){
            return this.httpClient.get(`${this.PHP_API_SERVER}/get_votes_single_user.php/?user_id=${user_id}&event_id=${event_id}`).pipe(catchError(this.errorHandler));

        }

        get_recommendations(event_id:number){
            return this.httpClient.get(`${this.PHP_API_SERVER}/get_recommendations_new.php/?id=${event_id}`).pipe(catchError(this.errorHandler));
        }

    //Spotify Token Handling

            get_token(user_id: number): Observable<any>{
                return this.httpClient.get(`${this.PHP_API_SERVER}/get_token.php/?id=${user_id}`).pipe(catchError(this.errorHandler));

        }

            refresh_token(user_id: number): Observable<any> {
                return this.httpClient.get(`${this.PHP_API_SERVER}/refresh_user.php/?id=${user_id}`).pipe(catchError(this.errorHandler));

        }

    // users Table
        get_all_Users(): Observable<User[]>{
            return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/get_all_users.php`);
        }

        get_user(username: string, password: string){
            return this.httpClient.get<User>(`${this.PHP_API_SERVER}/get_single_user.php/?username=${username}&password=${password}&table=users`).pipe(catchError(this.errorHandler));
        }

// Post

    // events Table
        post_Event(event: Event){
            return this.httpClient.post<Event>(`${this.PHP_API_SERVER}/post_event.php/?table=events`, event);
        }

    // queuedSongs Table
        post_QueuedSong(queuedSong: QueuedSong){
            return this.httpClient.post<QueuedSong>(`${this.PHP_API_SERVER}/post_queuedSong.php/?table=queuedSongs`, queuedSong);
        }

    // songs Table
        post_Song(song: Song){
            return this.httpClient.post<Song>(`${this.PHP_API_SERVER}/post_song.php/`, song).pipe(catchError(this.errorHandler));
        }

        post_vote(vote: Vote){
            return this.httpClient.post<Vote>(`${this.PHP_API_SERVER}/post_working.php/?table=vote`, vote).pipe(catchError(this.errorHandler));
        }
    // tokens Table

        post_Token(token: Token){
            return this.httpClient.post<Token>(`${this.PHP_API_SERVER}/post_single_item.php`, token).pipe(catchError(this.errorHandler));
        }

    // users Table

        post_User(user: User){
            return this.httpClient.post<User>(`${this.PHP_API_SERVER}/post_user.php/?table=${"users"}`, user).pipe(catchError(this.errorHandler));
        }

//Put

    // events Table
        put_Event(event: Event){
            return this.httpClient.put<Event>(`${this.PHP_API_SERVER}/put_Event.php`, event).pipe(catchError(this.errorHandler));
        }
        put_current_song(event_id: number, order_num: number){
            return this.httpClient.put(`${this.PHP_API_SERVER}/put_current_song.php`, {"event_id": event_id, "order_num": order_num}).pipe(catchError(this.errorHandler));
        }
    // queuedSongs Table
        put_QueuedSong(queuedSong: QueuedSong){
            return this.httpClient.put<QueuedSong>(`${this.PHP_API_SERVER}/put_queuedSong.php`, queuedSong).pipe(catchError(this.errorHandler));
        }
    // songs Table
        put_Song(song: Song){
            return this.httpClient.put<Song>(`${this.PHP_API_SERVER}/put_song.php`, song).pipe(catchError(this.errorHandler));
        }
    // tokens Table

    // users Table
        put_User(user: User){
            return this.httpClient.put<User>(`${this.PHP_API_SERVER}/put_user.php`, user);
        }
        put_vote(vote: Vote){
            return this.httpClient.put<Vote>(`${this.PHP_API_SERVER}/put_vote.php`,vote).pipe(catchError(this.errorHandler));
        }

// Delete

    // events Table
        delete_Event(event_id: number){
            return this.httpClient.delete<Event>(`${this.PHP_API_SERVER}/delete_event.php/?id=${event_id}&?table="event"`).pipe(catchError(this.errorHandler));
        }
    // queuedSongs Table
        delete_QueuedSong(song_id: number){
            return this.httpClient.delete<QueuedSong>(`${this.PHP_API_SERVER}/delete_single_item.php/?id=${song_id}&?table="queuedSong"`).pipe(catchError(this.errorHandler));
        }
    // songs Table
        delete_Song(song_id: number){
            return this.httpClient.delete<Song>(`${this.PHP_API_SERVER}/delete_single_item.php/?id=${song_id}&?table="song"`).pipe(catchError(this.errorHandler));
        }
    // tokens Table

    // users Table
        delete_User(user_id: number){
            return this.httpClient.delete<User>(`${this.PHP_API_SERVER}/deleteUser.php/?id=${user_id}&?table="users"`).pipe(catchError(this.errorHandler));
        }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error);
  }
}

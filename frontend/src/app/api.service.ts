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

@Injectable({
    providedIn: 'root'
})

export class ApiService {
PHP_API_SERVER = "http://db.cse.nd.edu/cse30246/mmdj/backend";
constructor(private httpClient: HttpClient) {}


// Starter Code
    readPolicies(): Observable<Policy[]>{
        return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/api/read.php`).pipe(catchError(this.errorHandler));
    }

    createPolicy(policy: Policy): Observable<Policy>{
        return this.httpClient.post<Policy>(`${this.PHP_API_SERVER}/api/create.php`, policy).pipe(catchError(this.errorHandler));
    }

    updatePolicy(policy: Policy){
        return this.httpClient.put<Policy>(`${this.PHP_API_SERVER}/api/update.php`, policy).pipe(catchError(this.errorHandler));
    }

    deletePolicy(id: number){
        return this.httpClient.delete<Policy>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`).pipe(catchError(this.errorHandler));
    }

    readUsers(): Observable<User[]>{
        return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/api/readUser.php`).pipe(catchError(this.errorHandler));
    }

    createUser(user: User){
        return this.httpClient.post<User>(`${this.PHP_API_SERVER}/api/createUser.php`, user).pipe(catchError(this.errorHandler));
    }

    updateUser(user: User){
        return this.httpClient.put<User>(`${this.PHP_API_SERVER}/api/updateUser.php`, user).pipe(catchError(this.errorHandler));
    }

    deleteUser(id: number){
        return this.httpClient.delete<User>(`${this.PHP_API_SERVER}/api/deleteUser.php/?id=${id}&?table=`).pipe(catchError(this.errorHandler));
    }

// Get
    // Spotify API
            get_spotify_login(){
                /*  PARAMS: from https://developer.spotify.com/documentation/general/guides/authorization-guide/
                * req: client_id - provided by spotify when we register app
                * req: response_type - "Set to code"
                * req: redirect_uri, state, scope
                * opt: state - for security
                * opt: scope - if no scope specified, we get only normally visible things (not all api data)
                *   https://developer.spotify.com/documentation/general/guides/scopes/
                * opt: show_dialog - keep default of false to avoid relogins
                */
            }

    // events Table

    // queuedSongs Table

    // songs Table

        // Search Bar

            gethelper_Searchbar_Artist(search: string){
                throw new Error("Method not implemented.");
            }
            gethelper_Searchbar_Albums(search: string){
                throw new Error("Method not implemented.");
            }
            gethelper_Searchbar_Songs(search: string){
                return this.httpClient.get<Song[]>(`${this.PHP_API_SERVER}/api/gethelper_Searchbar_Songs.php/?search=${search}`).pipe(catchError(this.errorHandler));
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

    // tokens Table
        
        //Spotify

            get_OriginalToken(){
                throw new Error("Method not implemented.");
            }

            get_UpdatedToken(){
                throw new Error("Method not implemented.");
            }

    // users Table
        
// Post

    // events Table
        post_Event(){
            throw new Error("Method not implemented.");
        }

    // queuedSongs Table

    // songs Table
        post_Song(song: Song){
            return this.httpClient.post<Song>(`${this.PHP_API_SERVER}/api/post_Song.php`, song).pipe(catchError(this.errorHandler));
        }

    // tokens Table
        
        post_Token(token: Token){
            return this.httpClient.post<Token>(`${this.PHP_API_SERVER}/api/post_Token.php`, token).pipe(catchError(this.errorHandler));
        }

    // users Table

        post_User(user: User){
            return this.httpClient.post<User>(`${this.PHP_API_SERVER}/api/post_User.php`, user).pipe(catchError(this.errorHandler));
        }

//Put

    // events Table
        put_Event(event: Event){
            return this.httpClient.put<Event>(`${this.PHP_API_SERVER}/api/put_Event.php`, event).pipe(catchError(this.errorHandler));
        }
    // queuedSongs Table
        put_QueuedSong(queuedSong: QueuedSong){
            return this.httpClient.put<User>(`${this.PHP_API_SERVER}/api/put_queuedSong.php`, queuedSong).pipe(catchError(this.errorHandler));
        }
    // songs Table
        put_Song(song: Song){
            return this.httpClient.put<Song>(`${this.PHP_API_SERVER}/api/put_song.php`, song).pipe(catchError(this.errorHandler));
        }
    // tokens Table

    // users Table
        put_User

// Delete

    // events Table
        delete_Event(event_id: number){
            return this.httpClient.delete<Event>(`${this.PHP_API_SERVER}/api/delete_single_item.php/?id=${event_id}&?table="event"`).pipe(catchError(this.errorHandler));
        }
    // queuedSongs Table
        delete_QueuedSong(song_id: number){
            return this.httpClient.delete<QueuedSong>(`${this.PHP_API_SERVER}/api/delete_single_item.php/?id=${song_id}&?table="queuedSong"`).pipe(catchError(this.errorHandler));
        }
    // songs Table
        delete_Song(song_id: number){
            return this.httpClient.delete<Song>(`${this.PHP_API_SERVER}/api/delete_single_item.php/?id=${song_id}&?table="song"`).pipe(catchError(this.errorHandler));
        }
    // tokens Table

    // users Table
        delete_User(user_id: number){
            return this.httpClient.delete<User>(`${this.PHP_API_SERVER}/api/delete_single_item.php/?id=${user_id}&?table="user"`).pipe(catchError(this.errorHandler));
        }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error);
  }
}

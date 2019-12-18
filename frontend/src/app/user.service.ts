import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError as observableThrowError, BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { User } from '@classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;  numb = 0;
  public tokenRefresh$: Observable<any>;
  public tokenRefreshSubject: BehaviorSubject<string>;
  SPOTIFY_API = `https://api.spotify.com/v1/me`;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.tokenRefresh$ = new Observable<any>();

  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(user) {
      this.tokenRefresh$.subscribe();
      // user.authdata = window.btoa(user.username + ':' + user.password);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
  }


  updateUser(user) {
    user.authdata = window.btoa(user.username + ':' + user.password);
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
 }

 updateTokenUser(user_id: number) {
   this.tokenRefreshSubject.next(String(user_id));
 }

 getToken() {
   return this.tokenRefresh$;
 }

  logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }

  getProfile(token: string) {
    const headers = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    return this.httpClient.get(`${this.SPOTIFY_API}`, headers).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error);
  }
}

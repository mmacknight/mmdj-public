import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subject, timer } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  CLIENT_ID = "c7d322da32444b989421f7cc942c64a3";
  REDIRECT_URI = "http://localhost:4200/callback";

  public tokenSubject: BehaviorSubject<string>;
  public tokenRefresh$: Observable<any>;
  public tokenRefreshSubject: BehaviorSubject<string>;
  public token: Observable<string>;

  constructor() {
    console.log("BUILD THE REFRESH");
    this.tokenRefresh$ = new Observable<any>();
    this.tokenSubject = new BehaviorSubject<string>(localStorage.getItem('token'));
    this.token = this.tokenSubject.asObservable();

  }

  getSpotifyToken(party: string) {

    var LINK = `https://accounts.spotify.com/authorize?client_id=${this.CLIENT_ID}&response_type=token&redirect_uri=${this.REDIRECT_URI}&scope=streaming&state=${party}`;

    window.location.href = LINK;
    // return this.httpClient.get(`https://accounts.spotify.com/authorize?client_id=${this.CLIENT_ID}&response_type=code&redirect_uri=${this.REDIRECT_URI}&scope=user-read-private%20user-read-email&state=34fFs29kd09`,headers).pipe(catchError(this.errorHandler));
  }


  public get tokenValue(): string {
    return this.tokenSubject.value;
  }

  setToken(token: string) {
    console.log(token);
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }

  updateToken(token: string) {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
   }

  removeToken() {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
  }

  updateUser(user_id: number) {
    this.tokenRefreshSubject.next(String(user_id));
  }

  getToken() {
    return this.tokenRefresh$;
  }

}

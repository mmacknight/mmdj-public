import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  CLIENT_ID = "c7d322da32444b989421f7cc942c64a3";
  REDIRECT_URI = "http://localhost:4200/callback";

  private tokenSubject: BehaviorSubject<string>;
  public token: Observable<string>;

  constructor() {
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
      // remove user from local storage to log user out
      localStorage.removeItem('token');
      this.tokenSubject.next(null);
  }


}

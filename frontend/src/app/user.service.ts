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
  public currentUser: Observable<User>;
  private device_id_Subject: BehaviorSubject<String>;
  public device_id: Observable<String>;
  numb = 0;
  SPOTIFY_API = `https://api.spotify.com/v1/me`;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.device_id_Subject = new BehaviorSubject<String>(localStorage.getItem('currentUser'));
    this.device_id = this.device_id_Subject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(user) {
      user.authdata = window.btoa(user.username + ':' + user.password);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
  }

  setDeviceID(my_device_id: string) {
    localStorage.setItem('device_id', my_device_id);
    this.device_id_Subject.next(my_device_id);
}

  updateUser(user) {
    user.authdata = window.btoa(user.username + ':' + user.password);
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
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

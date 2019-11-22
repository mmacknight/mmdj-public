import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { User } from '@classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor() {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(user) {
      user.authdata = window.btoa(user.username + ':' + user.password);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
  }

  updateUser(user) {
      user.authdata = window.btoa(user.username + ':' + user.password);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
   }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;
// private http: HttpClient,
  constructor( private apiService: ApiService) {
      // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      // this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): User {
  //     return this.currentUserSubject.value;
  // }

  login(username: string, password: string) {
      return this.apiService.get_user(username,password)
          .subscribe(
              data => console.log(data)
          )
          // .pipe(map(data => {
          //       console.log(data)
          //       data.user.authdata = window.btoa(username + ':' + password);
          //       localStorage.setItem('currentUser', JSON.stringify(data.user));
          //       this.currentUserSubject.next(data.user);
          //    )};
          //    return data;
          // }));
  }

 //  updateUser(user) {
 //    user.authdata = window.btoa(user.username + ':' + user.password);
 //    localStorage.setItem('currentUser', JSON.stringify(user));
 //    this.currentUserSubject.next(user);
 // }
  //
  // logout() {
  //     // remove user from local storage to log user out
  //     localStorage.removeItem('currentUser');
  //     this.currentUserSubject.next(null);
  // }
}

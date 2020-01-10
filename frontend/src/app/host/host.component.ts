import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { Event } from '@classes/event';
import { Router } from '@angular/router';
import { User } from '@classes/user';
import { Observable, BehaviorSubject, timer } from 'rxjs';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  public partyForm: FormGroup;
  public currentUser: User;
  public event: Event;
  has_token$: Observable<any>;
  redirect_uri: string = '';
  public showLogout: Boolean;

  constructor(fb: FormBuilder, public apiService: ApiService, public userService: UserService, private router: Router) {
    this.showLogout = false;
    this.partyForm = fb.group({
      name: '',
      description: '',
      genre: ''
    });
    this.userService.currentUser.subscribe(
      user => {
        this.currentUser = user;
        this.has_token$ = this.apiService.get_token(user.user_id);
        this.redirect_uri = `http://3.15.21.28/backend/api/auth.php/?id=${user.user_id}`;
      }
    );
  }
  ngOnInit() {
  }
  convertBoolean(x) {
    if (x) {
      return x.length;
    }
    return 0;
  }
  createParty() {
    this.event = new Event();
    this.event.event_name = this.partyForm.controls.name.value;
    this.event.description = this.partyForm.controls.description.value;
    this.event.user_id = this.currentUser.user_id;
    console.log(this.currentUser);
    console.log(this.event);
    this.apiService.post_Event(this.event).subscribe(
      data  => {
        console.log(data);
        this.router.navigate(['party',data.event_id])
      },
      error => {
        if ( error.status > 400) {
          // this.invalid = true,
          console.log(error)
        }
      }
    )
  }


  authenticate() {
    window.location.href = this.redirect_uri;
  }

  showProfileOptions(){
    if (this.showLogout){
      this.showLogout = false;
    }
    else {
      this.showLogout = true;
    }
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);

  }

}

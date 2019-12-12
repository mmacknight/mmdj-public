import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { Event } from '@classes/event';
import { Router } from '@angular/router';
import { User } from '@classes/user';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  public partyForm: FormGroup;
  public currentUser: User;
  public event: Event;
  public showLogout: Boolean;

  constructor(fb: FormBuilder, public apiService: ApiService, public userService: UserService, private router: Router) {
    this.showLogout = false;
    this.partyForm = fb.group({
      name: '',
      description: '',
      genre: ''
    });
    this.userService.currentUser.subscribe(
      user => this.currentUser = user
    )
  }
  ngOnInit() {
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

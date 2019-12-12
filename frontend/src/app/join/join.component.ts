import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

    public joinForm: FormGroup;
    public invalid = false;
    public showProfileInfo = false;
    public user: any;
    public showLogout: Boolean;

    constructor(fb: FormBuilder, public apiService: ApiService, private router: Router, private userService: UserService) {
      console.log(window);
      this.showLogout = false;
      this.joinForm = fb.group({
        eventID: ['', Validators.required]
      });

      this.userService.currentUser.subscribe(
        user => {
          user ? this.user = user : this.router.navigate(['']);
        }
      )
    }

    ngOnInit() {}


    joinParty() {
      this.apiService.get_event(this.joinForm.controls.eventID.value).subscribe(
        data  => {
          this.apiService.get_event(parseInt(this.joinForm.controls.eventID.value)).subscribe(
            data  => {
              if (data.length) {
                console.log(data);
                this.invalid = false;
                this.router.navigate(['party',this.joinForm.controls.eventID.value]);
              } else {
                this.invalid = true;
              }
            },
            error => {
              if ( error.status >= 400) {
                this.invalid = true,
                console.log(error)
              }
            }
          )
        },
        error => {
          if ( error.status > 400) {
            this.invalid = true,
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

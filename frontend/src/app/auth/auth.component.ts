import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { User } from '@classes/user';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public registerForm: FormGroup;
  public loginForm: FormGroup;
  public authButtons = [1,0];
  public registerClicked: Boolean;
  public user: User;
  public invalid: Boolean;
  public nextPage: string;
  DESKTOP: boolean = false;

  constructor(fb: FormBuilder, public apiService: ApiService, public userService: UserService, public router: Router, private deviceService: DeviceDetectorService) {
    this.DESKTOP = deviceService.isDesktop();
    this.nextPage = this.DESKTOP ? 'host': 'join';
    this.userService.currentUser.subscribe(
      user => {
        if (user) {
          this.apiService.get_events_by_user(user.user_id).subscribe(
            data => {
              if (data.length) {
                this.router.navigate(['party',data[0].event_id]);
              } else {
                this.router.navigate([this.nextPage]);
              }
            }
          )
        }
      }
    )
    this.loginForm = fb.group({
      username: '',
      password: ''
    });

    this.registerForm = fb.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {

  }

  onAuthButtonClick(index) {
    this.authButtons = [0,0];
    this.authButtons[index] = 1;
  }

  login() {
    this.apiService.get_user(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe(
      user  => {
        this.userService.login(user),
        this.invalid = false
        this.apiService.get_events_by_user(user.user_id).subscribe(
          data => {
            if (data.length) {
              this.router.navigate(['party',data[0].event_id]);
            } else {
              this.router.navigate([this.nextPage]);
            }
          }
        )
      },
      error => {
        this.invalid = true,
        console.log(error)
      }
    )
  }

  register() {
    this.user = new User();
    this.user.user_id = 0;
    this.user.username = this.registerForm.controls.username.value;
    this.user.password = this.registerForm.controls.password.value;
    this.apiService.post_User(this.user).subscribe(
      user  => {
        console.log("User created, ", user),
        this.userService.login(user);
        this.router.navigate([this.nextPage]);
        this.invalid = false
      },
      error => {
        if ( error.status > 400) {
          this.invalid = true,
          console.log(error)
        }
      }
    )
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.nextPage = this.DESKTOP ? 'host': 'join';
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { User } from '@classes/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  public loginForm: FormGroup;
  public loginClicked: Boolean;
  public registerForm: FormGroup;
  public registerClicked: Boolean;
  public user: User;
  public invalid: Boolean;

  constructor(fb: FormBuilder, public apiService: ApiService) {
    this.loginClicked = false;
    this.registerClicked = false;

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

  onLoginClick() {
    this.registerClicked = false;
    this.loginClicked = !this.loginClicked;
  }

  onRegisterClick() {
    this.loginClicked = false;
    this.registerClicked = !this.registerClicked;
  }

  login() {

  }

  register() {
    this.user = new User();
    this.user.user_id = 0;
    this.user.username = this.registerForm.controls.username.value;
    this.user.password = this.registerForm.controls.password.value;
    this.apiService.post_User(this.user).subscribe(
      user  => {
        console.log("User created, ", user)
        this.invalid = false
      },
      error => {
        this.invalid = true,
        console.log(error)
      }
    )
  }

}

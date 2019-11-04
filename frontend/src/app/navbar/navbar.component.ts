import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '@classes/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public currentUser: User;

  constructor(public userService: UserService) {
    this.userService.currentUser.subscribe(
      user => this.currentUser = user
    )
  }

  ngOnInit() {
  }

  logout() {
    this.currentUser = null;
    this.userService.logout();
  }

}

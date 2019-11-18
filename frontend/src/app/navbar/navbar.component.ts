import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '@classes/user';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public currentUser: User;

  constructor(public userService: UserService, public apiService: ApiService, public router: Router) {
    this.userService.currentUser.subscribe(
      user => this.currentUser = user
    )
  }

  ngOnInit() {
  }

  logout() {
    this.currentUser = null;
    this.userService.logout();

    this.callParent();
  }

  findParty() {
    if (this.currentUser) {
      this.apiService.get_events_by_user(this.currentUser.user_id).subscribe(
        data => {
          if (data.length) {
            console.log(data)
            this.router.navigate(['party',data[0].event_id]);
          } else {
            this.router.navigate(['host']);
          }
          error => {
            console.log(error);
          }
        }
      )
    } else {
      this.router.navigate(['join']);
    }
  }

  @Output() myEvent = new EventEmitter<string>();
  callParent() {
    this.myEvent.emit('eventDesc');
  }

}

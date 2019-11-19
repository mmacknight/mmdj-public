import { Component } from '@angular/core';
import { User } from '@classes/user';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public user: User;
  title = 'frontend';

  constructor(private userService: UserService, private router:Router) {
    this.userService.currentUser.subscribe(
      user => user ? this.user = user : this.router.navigate([''])
    );
  }

  logout(){
    this.user = null;
  }



  
}

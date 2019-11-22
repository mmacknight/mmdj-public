import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(public router: Router, private tokenService: TokenService) {
    // this.route.queryParams.subscribe(
    //   data => console.log(data)
    // )
    var params = this.router.url.split('#')[1].split('&');
    var paramsJSON = {};
    for (let p of params) {
      var k = p.split('=')[0];
      var v = p.split('=')[1];
      paramsJSON[k] = v;
    }
    this.tokenService.setToken(paramsJSON['access_token']);
    this.router.navigate(['party','30']);
  }

  ngOnInit() {
  }

}

import { Component, HostListener } from '@angular/core';
import { User } from '@classes/user';
import { UserService } from './user.service';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public user: User;
  public token: string;
  public no_spotify: boolean = false;
  title = 'frontend';
  public redirect_uri: string = '';

  constructor(private userService: UserService, private router:Router, private apiService: ApiService, private tokenService: TokenService) {

    this.userService.currentUser.subscribe(
      user =>  {
        user ? this.user = user : this.router.navigate(['']),
        this.redirect_uri = `http://db.cse.nd.edu/cse30246/tutorial/dom/auth.php/?id=${user.user_id}`;
        this.apiService.get_token(user.user_id).subscribe(
          token => {
            console.log(token);
            if (token.length) {
              this.tokenService.setToken(token[0]["spotify_access"]);
            } else {
              this.no_spotify = true;
            }
          }
        )
      }
    );
    this.tokenService.token.subscribe(
      token => this.token = token
    )
    window['onSpotifyWebPlaybackSDKReady'] = () => {

      console.log('2');

      const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(this.token); }
      });

      // Error handling
      player.addListener('initialization_error', ({ message }) => { console.error(message); });
      player.addListener('authentication_error', ({ message }) => { console.error(message); });
      player.addListener('account_error', ({ message }) => { console.error(message); });
      player.addListener('playback_error', ({ message }) => { console.error(message); });

      // Playback status updates
      player.addListener('player_state_changed', state => {
        console.log(state)
        if (state.position >= state.duration){

        }
        // if (this.song.duration && (state.duration >= this.song.duration)){
        //   this.callParent();
        // }
      });

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        this.userService.setDeviceID(device_id);

        console.log('here', device_id);

        //player.connect();
       // while (!this.track_id){

        //}

        //this.play(device_id, this.track_id);
        //this.play(device_id, '0jdny0dhgjUwoIp5GkqEaA');
      });

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.connect();


      console.log(window);

    };

    // Play a specified track on the Web Playback SDK's device ID

  }


  logout(){
    this.user = null;
  }


  authenticate() {
    window.location.href = this.redirect_uri;
  }



}

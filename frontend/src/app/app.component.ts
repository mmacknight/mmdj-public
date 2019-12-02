import { Component } from '@angular/core';
import { User } from '@classes/user';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { stat } from 'fs';
//import { CurrentSongComponent } from 'current-song/CurrentSongComponent';

export let my_device_id: string;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export let device_id: string;
// public device_id: string;
export class AppComponent {

  public user: User;
  public token: string;
  //public device_id: string;
  title = 'frontend';


  constructor(private userService: UserService, private router:Router) {
    this.userService.currentUser.subscribe(
      user => user ? this.user = user : this.router.navigate([''])
    );

    this.token ='BQCRYG8Wu9E580lV9o-kA5H69ki7Xg5wQINpBJ1nBIPYJhn3y9iltnNA9qEs7TMGyz9SEJ-63-egwg0aXUka28xAgjLcwWoH3KP9jLCGNAzWWGBkiZOkxembib88MXyfqjCIpW_8XxM6pG5vJmm0p6VD7_UzbqKz';

    console.log('1');
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



  
}

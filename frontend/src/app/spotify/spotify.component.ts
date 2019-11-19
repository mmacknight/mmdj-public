import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})

export class SpotifyComponent implements OnInit {
  public token: string;
  public track_id: string;


  @Input()
  set inp(input) {
     this.track_id = input;
  }

  ngOnInit(){


  }
  constructor() {
    this.token ='BQB8bQygWhAsDbJePwzcUVAAzgYqp8mEmNsymyCC6SWl3zh9axovXfsD1nPNriC4V1y0OQIs6oCL_kBHCvNZPGA9yCG3BkhEaN6uUVCqnlXCvZCWicb-XNJD_I-wvwpP3zORv-yWm_ZYOJMBoPLAGNFBBxTwhbM0';

    window.onSpotifyWebPlaybackSDKReady = () => {

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
      player.addListener('player_state_changed', state => { console.log(state); });

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);


        //player.connect();

        this.play(device_id, this.track_id);
        //this.play(device_id, '0jdny0dhgjUwoIp5GkqEaA');
      });

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.connect();




    };

    // Play a specified track on the Web Playback SDK's device ID



  }

  play(device_id: any, current_track: string) {
    var spotify_uri:string = 'spotify:track:' + current_track;
    //var spotify_uri:string = 'spotify:track:0jdny0dhgjUwoIp5GkqEaA';
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
        method: 'PUT',
         body: JSON.stringify({ uris: [spotify_uri] }),
         headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${this.token}`
         }
        });
  }




}

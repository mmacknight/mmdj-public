import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Song } from '@classes/song';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { SpotifyPlaybackService } from '../spotify-playback.service';
// import { my_device_id } from '../app.component';


@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})

export class SpotifyComponent implements OnInit {
  public token: string;
  public track_id: string;
  public device_id: string = '';
  public song: Song;


  @Input()
  set inp(input) {
     this.track_id = input['song_id'];
     this.song = input;

    if(this.track_id){
      console.log("PLAYYYING", this.track_id);
      this.playSong(this.track_id);

    }
  }

  @Input()
  set nextSong(input) {
    console.log(input);
    if (input[0] != 0 && input[1]) {
      this.spotifyPlaybackService.nextOff();
      this.callParent();
    }
  }

  ngOnInit(){

  }

  constructor(private apiService: ApiService, private userService: UserService, private spotifyPlaybackService: SpotifyPlaybackService) {


    //this.device_id = my_device_id;

    // console.log('1');
    // window['onSpotifyWebPlaybackSDKReady'] = () => {

    //   console.log('2');

    //   const player = new Spotify.Player({
    //     name: 'Web Playback SDK Quick Start Player',
    //     getOAuthToken: cb => { cb(this.token); }
    //   });

    //   // Error handling
    //   player.addListener('initialization_error', ({ message }) => { console.error(message); });
    //   player.addListener('authentication_error', ({ message }) => { console.error(message); });
    //   player.addListener('account_error', ({ message }) => { console.error(message); });
    //   player.addListener('playback_error', ({ message }) => { console.error(message); });

    //   // Playback status updates
    //   player.addListener('player_state_changed', state => {
    //     console.log(state)
    //     if (this.song.duration && ((state.position >= this.song.duration) || (state.position == 0 && state.paused)) ) {
    //     //   this.callParent();
    //     // }
    //   });

    //   // Ready
    //   player.addListener('ready', ({ device_id }) => {
    //     console.log('Ready with Device ID', device_id);
    //     this.device_id = device_id;
    //     console.log('here', this.device_id);

    //     //player.connect();
    //     while (!this.track_id){

    //     }

    //     //this.play(device_id, this.track_id);
    //     //this.play(device_id, '0jdny0dhgjUwoIp5GkqEaA');
    //   });

    //   // Not Ready
    //   player.addListener('not_ready', ({ device_id }) => {
    //     console.log('Device ID has gone offline', device_id);
    //   });

    //   player.connect();


    // };

    // Play a specified track on the Web Playback SDK's device ID



  }

  playSong(track_id: string) {
    this.userService.currentUser.subscribe(
      user => {
        this.apiService.get_token(user.user_id).subscribe(
          token =>  {
            console.log("WE PLAYING", track_id, token[0]['spotify_access']);
            this.spotifyPlaybackService.playSong(track_id, token[0]['spotify_access']);
          }
        )
      }
    )
  }


  // play(device_id: any, current_track: string) {
  //   console.log('here');
  //   var spotify_uri:string = 'spotify:track:' + current_track;
  //   //var spotify_uri:string = 'spotify:track:0jdny0dhgjUwoIp5GkqEaA';
  //   fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
  //       method: 'PUT',
  //        body: JSON.stringify({ uris: [spotify_uri] }),
  //        headers: {
  //          'Content-Type': 'application/json',
  //          'Authorization': `Bearer ${this.token}`
  //        }
  //       });
  // }

  @Output() myEvent = new EventEmitter<string>();
  callParent() {
    this.myEvent.emit('eventDesc');
  }

}

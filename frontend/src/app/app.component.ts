import { Component, HostListener } from '@angular/core';
import { User } from '@classes/user';
import { UserService } from './user.service';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
import { SpotifyPlaybackService } from './spotify-playback.service';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable, BehaviorSubject, timer } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public started = false;
  public user: User = null;
  public token: string;
  public no_spotify: boolean = false;
  title = 'frontend';
  public redirect_uri: string = '';
  tokenRefresh$: Observable<any>;
  tokenRefreshSubject: BehaviorSubject<any>;
  has_token: Observable<any>;
  REFRESH_MINUTES: number = 30;
  REFRESH_SECONDS: number = 0;
  REFRESH_TIME: number = 0;
  public track:any;


  constructor(private deviceDetectorService: DeviceDetectorService, private userService: UserService, private router:Router, private apiService: ApiService, private spotifyPlaybackService: SpotifyPlaybackService) {
    console.log("Desktop", this.deviceDetectorService.isDesktop());
    this.REFRESH_TIME = (this.REFRESH_MINUTES * 60 +  this.REFRESH_SECONDS) * 1000;
    this.tokenRefreshSubject = new BehaviorSubject<any>(null);
    this.tokenRefresh$ = timer(0,this.REFRESH_TIME).pipe(
      switchMap( () =>
        this.tokenRefreshSubject.pipe(
          distinctUntilChanged(),
           switchMap((user_id: number) => this.apiService.refresh_token(user_id))
        )
      )
    )

    this.userService.tokenRefreshSubject = this.tokenRefreshSubject;
    this.userService.tokenRefresh$ = this.tokenRefresh$;

    if (this.user) {
      this.userService.updateTokenUser(this.user.user_id);
    }
    this.userService.currentUser.subscribe(
      user =>  {
        user ? this.user = user : this.router.navigate(['']),
        this.tokenRefresh$.subscribe();
        this.initializeSpotifyPlayer(String(user.user_id));
        this.userService.updateTokenUser(this.user.user_id);
        this.redirect_uri = `http://db.cse.nd.edu/cse30246/tutorial/dom/auth0.php/?id=${user.user_id}`;
        console.log(this.redirect_uri);
        // this.tokenService.updateUser(this.user.user_id);
        // this.tokenService.getToken().subscribe(
        //     token => {
        //     console.log(token);
        //     if (token.length) {
        //       this.tokenService.setToken(token[0]["spotify_access"]);
        //     } else {
        //       this.no_spotify = true;
        //     }
        //   }
        // )

        // this.apiService.get_token(user.user_id).subscribe(
        //   token => {
        //     console.log(token);
        //     if (token.length) {
        //       this.tokenService.setToken(token[0]["spotify_access"]);
        //     } else {
        //       this.no_spotify = true;
        //     }
        //   }
        // )
      }
    );



    // Play a specified track on the Web Playback SDK's device ID

  }

  initializeSpotifyPlayer(user_id: string) {
    this.apiService.get_token(this.user.user_id).subscribe(
      token => {
        window['onSpotifyWebPlaybackSDKReady'] = () => {

          console.log('2',token[0]['spotify_access']);

          const player = new Spotify.Player({
            name: 'Web Playback SDK Quick Start Player',
            getOAuthToken: cb => { cb(token[0]['spotify_access']); }
          });

          // Error handling
          player.addListener('initialization_error', ({ message }) => { console.error(message); });
          player.addListener('authentication_error', ({ message }) => { console.error(message); });
          player.addListener('account_error', ({ message }) => { console.error(message); });
          player.addListener('playback_error', ({ message }) => { console.error(message); });

          // Playback status updates
          player.addListener('player_state_changed', (state) => {
            console.log(state);

            if (!this.track || this.track && this.track != state.track_window.current_track['id'])
            {
              this.track = state.track_window.current_track['id'];
              this.started = false;
              console.log("morgan");
            }

            if (
              state
              && state.track_window.previous_tracks.find(x => x.id === state.track_window.current_track.id)
              && state.paused
              && state.position == 0
              && this.started){
                console.log("ended");
                this.spotifyPlaybackService.nextOn();
              }

            if (this.started == false && state.position >= 0){
              console.log("set flag");
              this.started = true;
            }
          });

          // Ready
          player.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
            this.spotifyPlaybackService.setDeviceID(device_id);

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

        }
      }
    );
  }


  logout(){
    this.user = null;
  }






}

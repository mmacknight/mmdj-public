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
  public current_track: string = '';
  public old_track: string = '';
  title = 'frontend';
  public redirect_uri: string = '';
  tokenRefresh$: Observable<any>;
  tokenRefreshSubject: BehaviorSubject<any>;
  has_token: Observable<any>;
  REFRESH_MINUTES: number = 30;
  REFRESH_SECONDS: number = 0;
  REFRESH_TIME: number = 0;
  public track:any;
  public device_id: any = null;
  public DESKTOP: boolean = true;


  constructor(private deviceDetectorService: DeviceDetectorService, private userService: UserService, private router:Router, private apiService: ApiService, private spotifyPlaybackService: SpotifyPlaybackService) {
    console.log("Desktop", this.deviceDetectorService.isDesktop());
    this.DESKTOP = this.deviceDetectorService.isDesktop();
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
        if (this.DESKTOP) {
          this.initializeSpotifyPlayer(user.user_id);
        }
        // if (this.DESKTOP) {
        // }
        this.userService.updateTokenUser(this.user.user_id);
        // this.redirect_uri = `http://db.cse.nd.edu/cse30246/mmdj/backend/api/auth.php/?id=${user.user_id}`;
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

  initializeSpotifyPlayer(user_id: number) {
    console.log("GOT this",user_id);
    this.apiService.get_token(user_id).subscribe(
      token => {
        window['onSpotifyWebPlaybackSDKReady'] = () => {

          console.log('2',token);

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
          // player.addListener('player_state_changed', (state) => {
          //   console.log(state);
          //   if (state.position === 0 && state.duration > 0 && state.paused === false) {
          //     this.started = true;
          //   }
          //   if (this.started && state.position === 0 && state.paused === true) {
          //     this.started = false;
          //     this.spotifyPlaybackService.nextOn();
          //   }
            // this.current_track = state.track_window.current_track.id;
            // if (this.current_track == this.old_track) {
            //   this.spotifyPlaybackService.nextOff();
            // }
            //
            // if (!this.track || this.track && this.track != state.track_window.current_track['id'])
            // {
            //   this.track = state.track_window.current_track['id'];
            //   this.started = false;
            //   console.log("morgan");
            // }
            //
            // if (
            //   state
            //   && state.track_window.previous_tracks.find(x => x.id === state.track_window.current_track.id)
            //   && state.paused
            //   && state.position == 0
            //   && this.started){
            //     console.log("ended");
            //     this.spotifyPlaybackService.nextSong.subscribe(
            //       nextSong => {
            //         console.log("PPPPL", nextSong, this.current_track, this.old_track);
            //         if (nextSong == 0 && this.current_track != this.old_track) {
            //           console.log("WE DOOING IN");
            //           this.old_track = this.current_track;
            //           this.spotifyPlaybackService.nextOn();
            //         }
            //       }
            //     )
            //   }
            //
            // if (this.started == false && state.position >= 0){
            //   console.log("set flag");
            //   this.started = true;
            // }
          // });

          // Ready
          player.addListener('ready', ({ device_id }) => {
            if (!this.device_id) {
              this.device_id = device_id;
              console.log('Ready with Device ID', device_id);
              this.spotifyPlaybackService.setDeviceID(device_id);
              this.spotifyPlaybackService.player = player;
              console.log('here', device_id);
            }


           // while (!this.track_id){

            //}

            //this.play(device_id, this.track_id);
            //this.play(device_id, '0jdny0dhgjUwoIp5GkqEaA');
          });
          if (this.deviceDetectorService.isDesktop()) {
            console.log("INNNN");
            player.connect();
            player.disconnect();
          } else {
            console.log("OUTTTTT");
          }
          // player.connect();

          // Not Ready
          player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
          });


          // console.log(window);

        }
      }
    );
  }


  logout(){
    this.user = null;
  }

  @HostListener('window:beforeunload', ['$event'])
  disconnectPlayer($event: any) {
    this.spotifyPlaybackService.player.disconnect();
  }




}

import { Component, OnInit, Input, HostListener } from '@angular/core';
import { User } from '@classes/user';
import { Song } from '@classes/song';
import { QueuedSong } from '@classes/queuedSong';
import { ApiService } from '../api.service';
import { SpotifyPlaybackService } from '../spotify-playback.service';
import { UserService } from '../user.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable, interval, timer  } from 'rxjs';
import {
   startWith, debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-current-song',
  templateUrl: './current-song.component.html',
  styleUrls: ['./current-song.component.css']
})
export class CurrentSongComponent implements OnInit {

  public song: Song = new Song();
  public user: User = new User();
  public event_id: number = 0;
  public host_id: number = 0;
  public device_id: String;
  public currentSong$: Observable<Song>;
  HOST: boolean = false;
  DESKTOP: boolean = false;
  width: number = 0;
  height: number =0;
  yoffset: number = 0;
  song_padding: number = 0;
  empty: boolean = true;
  spotify_next$: Observable<number>;

  @Input()
  set event(input) {
    this.event_id = parseInt(input.event_id);
    this.host_id = parseInt(input.user_id);
    if (this.user && this.user.user_id) {
      this.HOST = this.user.user_id == this.host_id;
    }

    this.currentSong$ = timer(0,500).pipe(
      // startWith(1000),
      distinctUntilChanged(),
      switchMap(() => this.apiService.get_event_current_song(this.event_id))
    );
    this.currentSong$.subscribe(
      data => {
        if (this.empty) {
          this.song = new Song();
          console.log("SKIPPING FROM SCRAPER");
          this.skipSong();
        } else if (data && (data.order_num != this.song.order_num || !this.song)) {
          // this.empty = false;
          this.setCurrentSong();
        }
      }
    )
  }
  //
  // @Input()
  // set currentSong(input) {
  //   this.song = input;
  //   this.track_id = input;
  //   this.platform = input;
  // }

  constructor(private apiService: ApiService, private userService: UserService, private spotifyPlaybackService: SpotifyPlaybackService, private deviceService: DeviceDetectorService) {
    this.DESKTOP = this.deviceService.isDesktop();
    this.spotify_next$ = this.spotifyPlaybackService.nextSong;
    this.userService.currentUser.subscribe(
      user => {
        this.user = user;
        if (this.host_id) {
          this.HOST = this.user.user_id == this.host_id;
        }
      }
    )

    this.width = window.innerWidth;
    this.height = window.innerHeight *2/3;
    this.yoffset = window.pageYOffset;
    this.song_padding = !this.DESKTOP ? Math.max(20-100*this.yoffset/window.innerHeight,0) : 20;
   }

  ngOnInit() {

  }

  setCurrentSong() {
    // if (this.HOST) {
    //   this.pauseSpotify();
    // }
    // if (!this.empty) {
      this.apiService.get_event_current_song(this.event_id).subscribe(
        data => {
          this.song = data
        },
        error => console.log(error)
      )
    // }
  }

  skipSong() {
    if (this.HOST) {
      // this.pauseSpotify();
      console.log("SKIP");
      this.apiService.get_queuedSongs(this.event_id).subscribe(
        data => {
          // console.log("DATA", data);
          if (data[0]) {
            // console.log("in here", data[0])
            this.empty = false;
            this.apiService.put_current_song(this.event_id, data[0]['order_num']).subscribe()
          } else {
            // console.log("here");
            this.empty = true;
            // this.song = new Song();
          }
        }
      )
    }
  }

pauseSpotify() {
  console.log("BIG PAUSE");
    this.apiService.get_token(this.host_id).subscribe(
      token =>  {
        this.spotifyPlaybackService.pauseSong(token[0]['spotify_access']);
      }
    )

}


  @HostListener('window:scroll', ['$event'])
  onScroll(event?) {
    this.DESKTOP = this.deviceService.isDesktop();
    this.width = window.innerWidth;
    this.height = window.innerHeight *2/3;
    this.yoffset = window.pageYOffset;
    this.song_padding = !this.DESKTOP ? Math.max(20-100*this.yoffset/window.innerHeight,0) : 20;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.DESKTOP = this.deviceService.isDesktop();
    this.width = window.innerWidth;
  }




}

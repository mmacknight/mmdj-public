import { Component, OnInit, Input, HostListener } from '@angular/core';
import { User } from '@classes/user';
import { Song } from '@classes/song';
import { QueuedSong } from '@classes/queuedSong';
import { ApiService } from '../api.service';
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
  yoffset: number = 0;
  song_padding: number = 0;

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
        if (data.order_num != this.song.order_num) {
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

  constructor(private apiService: ApiService, private userService: UserService, private deviceService: DeviceDetectorService) {
    this.DESKTOP = this.deviceService.isDesktop();
    this.userService.currentUser.subscribe(
      user => {
        this.user = user;
        if (this.host_id) {
          this.HOST = this.user.user_id == this.host_id;
        }
      }
    )
    this.userService.device_id.subscribe(
      device_id => this.device_id = device_id
    )
    this.width = window.innerWidth;
    this.yoffset = window.pageYOffset;
    this.song_padding = !this.DESKTOP ? Math.max(20-100*this.yoffset/window.innerHeight,0) : 20;
   }

  ngOnInit() {

  }

  setCurrentSong() {
    console.log("HEERRREE1111");
    this.apiService.get_event_current_song(this.event_id).subscribe(
      data => {
        this.song = data
      },
      error => console.log(error)
    )
  }

  skipSong(){
    this.apiService.get_queuedSongs(this.event_id).subscribe(
      data => {
        if (data[0]) {
          this.apiService.put_current_song(this.event_id, data[0]['order_num']).subscribe()
        }
      }
    )

  }


  @HostListener('window:scroll', ['$event'])
  onResize(event?) {
    this.DESKTOP = this.deviceService.isDesktop();
    this.width = window.innerWidth;
    this.yoffset = window.pageYOffset;
    this.song_padding = !this.DESKTOP ? Math.max(20-100*this.yoffset/window.innerHeight,0) : 20;
  }


}

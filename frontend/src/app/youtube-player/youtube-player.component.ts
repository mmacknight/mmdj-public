import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { SpotifyPlaybackService } from '../spotify-playback.service';


@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {



  public id: string = null;
  videos = [0]
  private player;
  private ytEvent;
  public width;
  public height;

  @Input()
  set inp(input) {
    this.apiService.get_token(input[1]).subscribe(
      token =>  {
        this.spotifyPlaybackService.pauseSong(token[0]['spotify_access']);
      }
    )
    if (this.videos[0] && this.videos[0] != input[0]) {
      this.videos[0] = input[0];
    }
    this.videos[0] = input[0];
  }
  constructor(public apiService: ApiService, public spotifyPlaybackService: SpotifyPlaybackService) {
    this.height = window.innerHeight *2/3;
    this.width = this.height *16/9;
    this.onResize();
  }

  ngOnInit() {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    // this.width = window.innerWidth;
    this.height = window.innerHeight *2/3;
    this.width = this.height *16/9;
    // this.height = this.width*9/16;
    console.log(this.width);
  }

  onStateChange(event) {
    this.ytEvent = event.data;
    if (event.data == 0) {
      this.callParent();
      this.ngOnInit();
    }
    console.log(event.data)
  }
  savePlayer(player) {
    this.player = player;
    this.playVideo();
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  @Output() endSong = new EventEmitter<string>();
  callParent() {
    this.endSong.emit('eventDesc');
  }
}

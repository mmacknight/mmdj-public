import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';

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
    if (this.videos[0] && this.videos[0] != input) {
      this.videos[0] = input;
    }
    this.videos[0] = input;
  }
  constructor() {
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

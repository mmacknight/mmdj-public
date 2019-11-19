import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

  id = 'FM7MFYoylVs';
  private player;
  private ytEvent;
  public width;
  public height;

  constructor() {
    this.onResize();
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.width = window.innerWidth;
    this.height = this.width*9/16;
    console.log(this.width);
  }

  onStateChange(event) {
    this.ytEvent = event.data;
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
}

import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {



  public id: number;
  private player;
  private ytEvent;
  public width;
  public height;

  @Input()
  set inp(input) {
    this.id = input;
  }
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

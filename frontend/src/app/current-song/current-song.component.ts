import { Component, OnInit, Input } from '@angular/core';
import { Song } from '@classes/song'
import { QueuedSong } from '@classes/queuedSong'

@Component({
  selector: 'app-current-song',
  templateUrl: './current-song.component.html',
  styleUrls: ['./current-song.component.css']
})
export class CurrentSongComponent implements OnInit {

  public song: Song;

  @Input()
  set inp(input) {
    this.song = input[0];
    console.log(this.song);
  }

  constructor() { }

  ngOnInit() {
  }

}

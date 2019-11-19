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
  public track_id: string;
  public platform: string;

  constructor() {
    this.song = new Song();
    this.track_id = '0jdny0dhgjUwoIp5GkqEaA';  // from GetCurrentSong
    this.platform = 'spotify';
    this.song.title = 'Praying';
    this.song.artist = 'Kesha';
   }

  ngOnInit() {
  }



}

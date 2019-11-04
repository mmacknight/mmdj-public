import { Component, OnInit } from '@angular/core';
import { Event } from '@classes/event';
import { Song } from '@classes/song';


@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  public event = new Event();
  public queuedSongs = [];
  public s1 = new Song();
  public s2 = new Song();
  public displayedColumns = ['artist', 'title', 'vote'];

  constructor() { 
    this.event.event_id = 0;
    this.event.user_id = 'mitch';
    this.event.event_name = 'dance party';
    this.event.description = 'this is the dance party';
    this.event.current_song = 2;
    this.event.is_active = true;

    this.s1.artist = 'Chainsmokers';
    this.s1.song_id = 444;
    this.s1.title = 'Closer';
    this.queuedSongs.push(this.s1);


    this.s2.artist = 'Taylor Swift';
    this.s2.song_id = 500;
    this.s2.title = 'Lover';
    this.queuedSongs.push(this.s2);

   
    console.log(this.queuedSongs);

  }

  ngOnInit() {

  
  }

}

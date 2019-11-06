import { Component, OnInit } from '@angular/core';
import { Event } from '@classes/event';
import { Song } from '@classes/song';
import { QueuedSong } from '@classes/queuedSong';
import { SongSearchService } from '../song-search.service';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  public event = new Event();
  public queuedSong: QueuedSong;
  public queuedSongs = [];
  public s1 = new Song();
  public s2 = new Song();
  public displayedColumns = ['artist', 'title', 'vote'];
  public results = [];
  public id = '0';
  

  constructor(private songSearchService: SongSearchService, private apiService: ApiService, private router: Router, 
    private route: ActivatedRoute, private snackBar: MatSnackBar) {
  
    this.id = route.snapshot.paramMap.get('id');
    this.apiService.get_event(parseInt(this.id)).subscribe(
      data  => {
        if (data) {
          this.event = data[0];
        
          console.log(data);
          this.refresh();
        }
      },
      error => {
        if ( error.status >= 400) {
          // this.invalid = true,
          console.log(error)
        }
      }
    )
  }

  refresh() {
    this.apiService.get_queuedSongs(this.event.event_id).subscribe(
      data => {
        this.queuedSongs = data;
      },
      error => {
        if ( error.status >= 400) {
          // this.invalid = true,
          console.log(error)
        }
      }
    )
  }

  upvote(order_num) {
    this.queuedSong = new QueuedSong;
    this.queuedSong.event_id = this.event.event_id;
    this.queuedSong.order_num = order_num;
    this.queuedSong.popularity = 1;
    this.apiService.put_QueuedSong(this.queuedSong).subscribe(
      data => {
        this.refresh();
      },
      error => {
        if ( error.status >= 400) {
          // this.invalid = true,
          console.log(error)
        }
      }
    )
  }

  downvote(order_num) {
    this.queuedSong = new QueuedSong;
    this.queuedSong.event_id = this.event.event_id;
    this.queuedSong.order_num = order_num;
    this.queuedSong.popularity = -1;
    this.apiService.put_QueuedSong(this.queuedSong).subscribe(
      data => {
        this.refresh();
      },
      error => {
        if ( error.status >= 400) {
          // this.invalid = true,
          console.log(error)
        }
      }
    )
  }

  ngOnInit() {

  }

  onEndPartyClick(){

    this.apiService.delete_Event(this.event.event_id).subscribe(
      data => {
        let snackBarRef = this.snackBar.open('Your event was successfully deleted', 'Start a new party');
        snackBarRef.onAction().subscribe(() => {
          this.router.navigate(['/host']);
        });
      },
      error => {
        console.log(error);
      }
    )
  }


}

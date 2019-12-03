import { Component, OnInit, HostListener } from '@angular/core';
import { Event } from '@classes/event';
import { Song } from '@classes/song';
import { User } from '@classes/user';
import { Vote } from '@classes/vote';
import { QueuedSong } from '@classes/queuedSong';
import { SongSearchService } from '../song-search.service';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable, interval  } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { TokenService } from '../token.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  public event = new Event();
  public queuedSong: QueuedSong;
  public queuedSongs = [];
  public width: number;
  public displayedColumns = ['score', 'artist', 'title', 'vote'];
  public results = [];
  public id: string;
  public queuedSongs$: Observable<Song[]>;
  public userVotes = {};
  public user: User;
  public display = [1, 0, 0, 0];

  constructor(private songSearchService: SongSearchService, private apiService: ApiService, private router: Router,
    private route: ActivatedRoute, private snackBar: MatSnackBar, private userService: UserService, private tokenService: TokenService) {
    this.width = window.innerWidth;
    this.id = route.snapshot.paramMap.get('id');
    this.userService.currentUser.subscribe(
      user => user ? this.user = user : this.router.navigate([''])
    );

    this.apiService.get_event(parseInt(this.id)).subscribe(
      data  => {
        if (data) {
          this.event = data[0];
          this.refreshVotes();
          console.log(data);
          // this.refresh();
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

  // refresh() {
  //   this.apiService.get_queuedSongs(this.event.event_id).subscribe(
  //     data => {
  //       this.queuedSongs = data;
  //       console.log(this.queuedSongs);
  //     },
  //     error => {
  //       if ( error.status >= 400) {
  //         // this.invalid = true,
  //         console.log(error)
  //       }
  //     }
  //   )
  // }

  refreshVotes() {
    this.apiService.get_user_votes(this.user.user_id,this.event.event_id).subscribe(
      data => {
        for (let i in data) {
          var vote = data[i];
          this.userVotes[vote.order_num] = vote.vote;
        }
        //console.log(this.userVotes);
      },
      error => {
        if ( error.status >= 400) {
          console.log(error)
        }
      }
    )
  }

  upvote(order_num, song_id, platform) {
    this.queuedSong = new QueuedSong;
    this.queuedSong.event_id = this.event.event_id;
    this.queuedSong.order_num = order_num;
    var vote_amount = [2, 1, -1];
    this.queuedSong.popularity = order_num in this.userVotes ? vote_amount[parseInt(this.userVotes[order_num])+1] : 1;
    this.apiService.put_QueuedSong(this.queuedSong).subscribe(
      data => {
        var vote = new Vote();
        vote.user_id = this.user.user_id;
        vote.event_id = this.event.event_id;
        vote.vote = order_num in this.userVotes && this.userVotes[order_num] == 1 ? 0 : 1;
        vote.song_id = song_id;
        vote.platform = platform;
        vote.order_num = parseInt(order_num);
        if (order_num in this.userVotes) {
          this.apiService.put_vote(vote).subscribe(
            data => this.refreshVotes(),
            error => error.status == 204 ? this.refreshVotes() : console.log(error)
          )
        } else {
          this.apiService.post_vote(vote).subscribe(
            data => this.refreshVotes(),
            error => error.status == 204 ? this.refreshVotes() : console.log(error)
          )
        }
      },
      error => {
        if ( error.status >= 400) {

          console.log(error)
        }
      }
    )
  }

  downvote(order_num, song_id, platform) {
    this.queuedSong = new QueuedSong;
    this.queuedSong.event_id = this.event.event_id;
    this.queuedSong.order_num = order_num;
    var vote_amount = [1, -1, -2];
    this.queuedSong.popularity = order_num in this.userVotes ? vote_amount[parseInt(this.userVotes[order_num])+1] : -1;
    this.apiService.put_QueuedSong(this.queuedSong).subscribe(
      data => {
        var vote = new Vote();
        vote.user_id = this.user.user_id;
        vote.event_id = this.event.event_id;
        vote.vote = order_num in this.userVotes && this.userVotes[order_num] == -1 ? 0 : -1;
        vote.song_id = song_id;
        vote.platform = platform;
        vote.order_num = parseInt(order_num);
        console.log(vote);
        if (order_num in this.userVotes) {
          this.apiService.put_vote(vote).subscribe(
            data => this.refreshVotes(),
            error => error.status == 204 ? this.refreshVotes() : console.log(error)
          )
        } else {
          this.apiService.post_vote(vote).subscribe(
            data => this.refreshVotes(),
            error => error.status == 204 ? this.refreshVotes() : console.log(error)
          )
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

  ngOnInit() {
    this.queuedSongs$ = interval(1000).pipe(switchMap(() => this.apiService.get_queuedSongs(this.event.event_id)));
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

  loginSpotify() {
      this.tokenService.getSpotifyToken(String(this.event.event_id));
  }

  toggleDisplay(index: number) {
    this.display = [0, 0, 0, 0];
    this.display[index] = 1;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.width = window.innerWidth;
  }


}

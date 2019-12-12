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
import { Observable, interval, timer  } from 'rxjs';
import {
   startWith, debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { TokenService } from '../token.service';
import { DeviceDetectorService } from 'ngx-device-detector';

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
  public padding: number;
  public height: number;
  public displayedColumns = ['Songs', 'Score', 'Vote'];
  public displayedColumnsRecommendations = ['Songs'];
  public results = [];
  public id: string;
  public queuedSongs$: Observable<Song[]>;
  public currentSong$: Observable<Song>;
  public user: User;
  public display = [1, 0, 0, 0];
  public spotifyUserInfo = {};
  public DESKTOP: any;
  public showProfileInfo: Boolean;
  public showInfoText: Boolean;
  public matIconArrowLabel: string;
  public showRecommendationsTable: Boolean;
  public recommendations: any;
  public qs: QueuedSong;
  public showOptions: Boolean;

  constructor(private songSearchService: SongSearchService, private apiService: ApiService, private router: Router,
    private route: ActivatedRoute, private snackBar: MatSnackBar, private userService: UserService, private tokenService: TokenService, private deviceService: DeviceDetectorService) {

    this.showInfoText = true;
    this.showOptions = false;
    this.showRecommendationsTable = false;
    this.matIconArrowLabel = 'keyboard_arrow_left';
    this.showProfileInfo = false;
    this.recommendations = [];

    this.DESKTOP = this.deviceService.isDesktop();

    this.width = window.innerWidth;
    this.padding = window.pageYOffset/window.innerHeight;
    this.height = window.innerHeight;
    this.id = route.snapshot.paramMap.get('id');


    this.userService.currentUser.subscribe(
      user => {
        user ? this.user = user : this.router.navigate(['']);
        this.apiService.get_token(this.user.user_id).subscribe(
          token => {
            this.userService.getProfile(token[0]['spotify_access']).subscribe(
              data => {
                this.spotifyUserInfo = data;
              },
              error => {
                console.log(error)
              }
            )
          },
          error => console.log(error)
        );
        this.apiService.get_event(parseInt(this.id)).subscribe(
          data  => {
            if (data) {
              this.event = data[0];
              this.queuedSongs$ = timer(0,500).pipe(

                distinctUntilChanged(),
                switchMap(() => this.apiService.get_queuedSongsVotes(this.event.event_id, this.user.user_id))
              );
            }
          },
          error => {
            if ( error.status >= 400) {
              console.log(error)
            }
          }
        )

      }
    );
  }

  upvote(order_num, song_id, platform, old_vote) {
    var voted = old_vote != null;
    old_vote = parseInt(old_vote);
    this.queuedSong = new QueuedSong;
    this.queuedSong.event_id = this.event.event_id;
    this.queuedSong.order_num = order_num;
    this.queuedSong.song_id = song_id;
    this.queuedSong.platform = platform;
    var vote_amount = [2, 1, -1];
    this.queuedSong.popularity = old_vote ? vote_amount[old_vote+1] : 1;
    this.apiService.put_QueuedSong(this.queuedSong).subscribe(
      data => {
        var vote = new Vote();
        vote.user_id = this.user.user_id;
        vote.event_id = this.event.event_id;
        vote.vote = old_vote && old_vote == 1 ? 0 : 1;
        vote.song_id = song_id;
        vote.platform = platform;
        vote.order_num = parseInt(order_num);
        console.log(vote)
        if (voted) {
          this.apiService.put_vote(vote).subscribe(
            data => console.log(data),
            error => console.log(error)
          )
        } else {
          this.apiService.post_vote(vote).subscribe(
            data => console.log(data),
            error => console.log(error)
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

  downvote(order_num, song_id, platform, old_vote) {
    var voted = old_vote != null;
    old_vote = parseInt(old_vote);
    this.queuedSong = new QueuedSong;
    this.queuedSong.event_id = this.event.event_id;
    this.queuedSong.order_num = order_num;
    this.queuedSong.song_id = song_id;
    this.queuedSong.platform = platform;
    var vote_amount = [1, -1, -2];
    this.queuedSong.popularity = old_vote ? vote_amount[old_vote+1] : -1;
    this.apiService.put_QueuedSong(this.queuedSong).subscribe(
      data => {
        var vote = new Vote();
        vote.user_id = this.user.user_id;
        vote.event_id = this.event.event_id;
        vote.vote = old_vote && old_vote == -1 ? 0 : -1;
        vote.song_id = song_id;
        vote.platform = platform;
        vote.order_num = parseInt(order_num);
        if (voted) {
          this.apiService.put_vote(vote).subscribe(
            data => {},
            error => console.log(error)
          )
        } else {
          this.apiService.post_vote(vote).subscribe(
            data => {},
            error => console.log(error)
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

  ngOnInit() {

  }

  onEndPartyClick(){
    this.showOptions = true;

  }

  onEndPartyNOClick(){
    this.showOptions = false;
    this.showProfileInfo = false;
  }

  onEndPartyYESClick(){

    this.apiService.delete_Event(this.event.event_id).subscribe(
      data => {
        let snackBarRef = this.snackBar.open('Your event was successfully deleted', 'DISMISS');
        snackBarRef.onAction().subscribe(() => {
          this.router.navigate(['/']);
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

  trackByFunction(index, item) {
    if (!item) return null;
    return index;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  leaveParty() {
    this.router.navigate(['join']);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  hideText(){
    if (this.showInfoText){
      this.showInfoText = false;
      this.matIconArrowLabel = 'keyboard_arrow_right'
    }
    else {
      this.showInfoText = true;
      this.matIconArrowLabel = 'keyboard_arrow_left'
    }
  }

  showProfileOptions(){
    if (this.showProfileInfo){
      this.showProfileInfo = false;
    }
    else {
      this.showProfileInfo = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event?) {
    this.padding = window.pageYOffset/window.innerHeight;
  }

  goFullscreen(){
    document.body.requestFullscreen();
  }

  getRecommendations(){

    this.apiService.get_recommendations(this.event.event_id).subscribe(
      recommendations => {
        this.recommendations = recommendations;
        this.showRecommendationsTable = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSongSearch(){

  }

  addSong(newSong: any) {
    this.apiService.get_song(newSong.song_id, newSong.platform).subscribe(
      data => {
        if (data){   
          this.addSongToQueue(newSong.song_id, newSong.platform);
          let snackBarRef = this.snackBar.open('"' + newSong.title + '" ' +'was added to the queue', 'DISMISS');

        }
        else {
          this.apiService.post_Song(newSong).subscribe(
            data => this.addSongToQueue(newSong.song_id, newSong.platform),
            error => console.log(error)
          )
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  addSongToQueue(id: string, platform: string){
    this.qs = new QueuedSong();
    this.qs.event_id = this.event.event_id;
    this.qs.song_id = id;
    this.qs.platform = platform;

    this.apiService.post_QueuedSong(this.qs).subscribe(
      data => {
       
      },
      error => {
        if ( error.status >= 400) {
          console.log(error)
        }
      }
    )
  }

}

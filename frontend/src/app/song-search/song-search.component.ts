import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap, first
 } from 'rxjs/operators';
import { SongSearchService } from '../song-search.service';
import { ApiService } from '../api.service';
import { Song } from '@classes/song';
import { Youtube } from '@classes/youtube';
import { Soundcloud } from '@classes/soundcloud';
import { QueuedSong } from '@classes/queuedSong';
import { TokenService } from '../token.service';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { platform } from 'os';


@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.css']
})
export class SongSearchComponent implements OnInit {

  public event_id: number = null;
  public host_id: number = null;
  public padding: number;
  public qs: QueuedSong;
  spotifySongs$: Observable<any> = new Observable<any>();
  public searchOptions = [1, 0, 0];
  searching_term = '';

  public spotify$: Observable<any>;
  public songs = [];
  private searchTermsSpotify = new BehaviorSubject<string[]>(['','']);
  public displayedColumns = ['Results'];

  public soundcloud$: Observable<Soundcloud[]>;
  private searchTermsSoundcloud = new BehaviorSubject<string>('');
  public displayedColumnsSoundcloud = ['Results'];

  public youtubes$: Observable<Youtube[]>;
  private searchTermsYoutube = new BehaviorSubject<string>('');
  public displayedColumnsYoutube = ['Results'];
  public s: Soundcloud[];

  constructor(private songSearchService: SongSearchService, private apiService: ApiService, private tokenService: TokenService, private snackBar: MatSnackBar) {
    // this.songSearchService.searchSpotify('kesha').subscribe(
    //   data => {
    //     console.log('here');
    //     console.log(data);
    //   }
    // )
    // this.search_spotify('kesha');
    this.padding = window.pageYOffset/window.innerHeight;

   }

  @Input()
  set inp(input) {
    this.event_id = input.event_id;
    this.host_id = input.user_id;
  }

  // Push a search term into the observable stream.
  // search_spotify(term: string): void {
  //   this.searchTermsSpotify.next(term);
  // }

  searchYoutube(term: string): void {
    this.searchTermsYoutube.next(term);
  }

  searchSoundcloud(term: string): void {
    this.searchTermsSoundcloud.next(term)
  }

  ngOnInit(): void {

    this.spotify$ = this.searchTermsSpotify.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      first(),
      // switch to new search observable each time the term changes
      switchMap((term: string[]) => this.songSearchService.searchSpotify(term[0],term[1]))

    );

    this.soundcloud$ = this.searchTermsSoundcloud.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.songSearchService.searchSoundcloud(term)),
    );

    this.youtubes$ = this.searchTermsYoutube.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.songSearchService.searchYoutube(term)),
    );
  }

  @Output() myEvent = new EventEmitter<string>();
  callParent() {
    this.myEvent.emit('eventDesc');
  }

  addSong(newSong: Song) {
    this.searching_term = '';
    console.log(newSong);
    this.apiService.get_song(newSong.song_id, newSong.platform).subscribe(
      data => {
        if (data){   // song exists
          // call put

          this.addSongToQueue(newSong.song_id, newSong.platform);
          // show toast
          let snackBarRef = this.snackBar.open('"' + newSong.title + '" ' +'was added to the queue', 'DISMISS');

        }
        else {
          this.apiService.post_Song(newSong).subscribe(
            data => this.addSongToQueue(newSong.song_id, newSong.platform),
            error => console.log(error)
            //this.addSongToQueue(newSong.song_id, newSong.platform);
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
    this.qs.event_id = this.event_id;
    this.qs.song_id = id;
    this.qs.platform = platform;

    this.apiService.post_QueuedSong(this.qs).subscribe(
      data => {
        this.callParent();
      },
      error => {
        if ( error.status >= 400) {
          // this.invalid = true,
          console.log(error)
        }
      }
    )
  }

  convertYoutube(youtube: Youtube) {
    var y_song = new Song();

    y_song.title = youtube.title;
    y_song.artist = '';
    y_song.artwork = youtube.artwork.split('?')[0];
    y_song.song_id = youtube.url.split('v=')[1].split(';')[0];
    y_song.platform = 'youtube';
    y_song.duration = 0;

    return y_song;
  }

  convertSoundcloud(soundcloud: Soundcloud) {
    var s_song = new Song();
    s_song.title = soundcloud.title;
    s_song.artist = soundcloud.user.username;
    s_song.song_id = String(soundcloud.id);
    if (soundcloud.artwork_url) {
      s_song.artwork = soundcloud.artwork_url;
    } else {
      s_song.artwork = soundcloud.user.avatar_url;
    }
    s_song.platform = 'soundcloud';
    s_song.duration = soundcloud.duration;

    return s_song;
  }


  onButtonClick(index) {
    this.searchOptions = [0, 0, 0];
    this.searchOptions[index] = 1;
    if (index == 0) {
      this.search_spotify(this.searching_term);
    } else if (index == 1){
      this.searchSoundcloud(this.searching_term);
    } else if (index == 2){
      this.searchYoutube(this.searching_term);
    }
  }

  convertJSON(data) {
    var songs = [];
    if (data && 'tracks' in data) {
      for(var item in data['tracks']['items']){
        var mySong = new Song();
        mySong.artist = data['tracks']['items'][item]['artists'][0]['name'];
        mySong.platform = 'spotify';
        mySong.title = data['tracks']['items'][item]['name'];
        mySong.song_id = data['tracks']['items'][item]['id'];
        mySong.duration = data['tracks']['items'][item]['duration_ms'];
        if ('images' in data['tracks']['items'][item]['album']){
          if (0 in data['tracks']['items'][item]['album']['images'] ){
            if ('url' in data['tracks']['items'][item]['album']['images'][0]){
              mySong.artwork = data['tracks']['items'][item]['album']['images'][0]['url'];
            }
          }
        }
        songs.push(mySong);
      }
    }
    return songs;
  }

  search_spotify(search_term: string){
    if (search_term){
      this.apiService.get_token(this.host_id).subscribe(
        token => {
          this.searchTermsSpotify.next([search_term,token[0]['spotify_access']]);
          this.spotifySongs$ = this.spotify$.pipe(first(), debounceTime(300))
        }
      )
    }
  }

  trackByFunction(index, item) {
    if (!item) return null;
    return index;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event?) {
    this.padding = window.pageYOffset/window.innerHeight;
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { SongSearchService } from '../song-search.service';
import { ApiService } from '../api.service';
import { TokenService } from '../token.service';
import { Song } from '@classes/song';
import { Youtube } from '@classes/youtube';
import { Soundcloud } from '@classes/soundcloud';
import { QueuedSong } from '@classes/queuedSong';
// import { platform } from 'os';


@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.css']
})
export class SongSearchComponent implements OnInit {

  public event_id = 1;
  public qs: QueuedSong;

  public searchOptions = [1, 0, 0];

  public songs$: Observable<any>;
  public songs = [];
  private searchTerms = new Subject<string>();
  public displayedColumns = ['artist', 'title'];

  public soundcloud$: Observable<Soundcloud[]>;
  private searchTermsSoundcloud = new Subject<string>();
  public displayedColumnsSoundcloud = ['artwork', 'artist','title'];

  public youtubes$: Observable<Youtube[]>;
  private searchTermsYoutube = new Subject<string>();
  public displayedColumnsYoutube = ['title'];
  public s: Soundcloud[];

  constructor(private songSearchService: SongSearchService, private apiService: ApiService, private tokenService: TokenService) {
    // this.songSearchService.searchSpotify('kesha').subscribe(
    //   data => {
    //     console.log('here');
    //     console.log(data);
    //   }
    // )
    // this.search_spotify('kesha');
   }

  @Input()
  set inp(input) {
     this.event_id = input;
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  searchYoutube(term: string): void {
    this.searchTermsYoutube.next(term);
  }

  searchSoundcloud(term: string): void {
    this.searchTermsSoundcloud.next(term);
  }

  ngOnInit(): void {

    this.songs$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      // switchMap((term: string) => this.songSearchService.searchSpotify('kesha')).subscribe(
      //   data => this.songs = data;
      // )
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
    // add to Songs table
    console.log(newSong);
    this.apiService.get_song(newSong.song_id, newSong.platform).subscribe(
      data => {
        if (data){   // song exists
          // call put

          this.addSongToQueue(newSong.song_id, newSong.platform);

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
    console.log(this.event_id);
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




  onButtonClick(index) {
    this.searchOptions = [0, 0, 0];
    this.searchOptions[index] = 1;
  }


  search_spotify(search_term: string){
    if (search_term){
      this.tokenService.token.subscribe(
        token => {
          this.songSearchService.searchSpotify(search_term,token).subscribe(
            data => {
              this.songs = [];
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
                this.songs.push(mySong);
              }
            },
            error => {
              console.log(error)
            }
          )
        }
      )
    }
  }
}

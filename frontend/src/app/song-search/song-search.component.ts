import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { SongSearchService } from '../song-search.service';
import { ApiService } from '../api.service';
import { Song } from '@classes/song';
import { Youtube } from '@classes/youtube';
import { QueuedSong } from '@classes/queuedSong';


@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.css']
})
export class SongSearchComponent implements OnInit {

  public event_id = 1;
  public qs: QueuedSong;

  public searchOptions = [1, 0];

  songs$: Observable<Song[]>;
  private searchTerms = new Subject<string>();
  public displayedColumns = ['artist', 'title'];

  youtubes$: Observable<Youtube[]>;
  private searchTermsYoutube = new Subject<string>();
  public displayedColumnsYoutube = ['title'];

  constructor(private songSearchService: SongSearchService, private apiService: ApiService) {  }


  @Input()
  set inp(input) {
     this.event_id = input[0];
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  searchYoutube(term: string): void {
    this.searchTermsYoutube.next(term);
  }

  ngOnInit(): void {

    this.songs$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.apiService.get_songs(term)),
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

  addSong(id) {
    this.qs = new QueuedSong();
    this.qs.event_id = this.event_id;
    this.qs.queuedSongs_id = id;
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
    this.searchOptions = [0, 0];
    this.searchOptions[index] = 1;

  }

}

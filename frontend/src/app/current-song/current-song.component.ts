import { Component, OnInit, Input } from '@angular/core';
import { Song } from '@classes/song';
import { QueuedSong } from '@classes/queuedSong';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-current-song',
  templateUrl: './current-song.component.html',
  styleUrls: ['./current-song.component.css']
})
export class CurrentSongComponent implements OnInit {

  public song = new Song();
  public track_id: string;
  public platform: string;
  public event_id: number;
  public device_id: any = '';

  @Input()
  set inp(input) {
     this.event_id = input;
    if(this.event_id){ 
      this.setCurrentSong();
     }
  }

  constructor(private apiService: ApiService, private userService: UserService) {
    this.userService.device_id.subscribe(
      device_id => this.device_id = device_id
    )
   }

  ngOnInit() {
  }

  setCurrentSong(){
    this.apiService.get_event_current_song(this.event_id).subscribe(
      data => {
        if (data){
          this.song = data;
          this.track_id = this.song.song_id;
          this.platform = this.song.platform;
        }
      },
      error => console.log(error)
    )   
  }

  skipSong(){
    this.apiService.get_queuedSongs(this.event_id).subscribe(
      data => {
        this.apiService.put_current_song(this.event_id, data[0]['order_num']).subscribe(
          data => {
            this.setCurrentSong();
          }
        )
      }
    )

  }



}

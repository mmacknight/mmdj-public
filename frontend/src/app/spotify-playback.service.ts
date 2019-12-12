import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError as observableThrowError, BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyPlaybackService {
  private device_id_Subject: BehaviorSubject<String>;
  public device_id: Observable<String>;
  public ready: boolean = false;
  private nextSong_Subject: BehaviorSubject<number>;
  public nextSong: Observable<number>;

  constructor() {
    this.device_id_Subject = new BehaviorSubject<String>(localStorage.getItem('device_id') || '');
    this.device_id = this.device_id_Subject.asObservable();
    this.nextSong_Subject = new BehaviorSubject<number>(0);
    this.nextSong = this.nextSong_Subject.asObservable();
  }

  setDeviceID(my_device_id: string) {
    console.log("MYYYYY",my_device_id)
    this.ready = true;
    localStorage.setItem('device_id', my_device_id);
    this.device_id_Subject.next(my_device_id);
  }

  playSong(song_id: string, token: string) {
    console.log("IN THE SERVICE", song_id, token);
    // setTimeout( () => {
    //   while (1) {
        if (this.ready) {
          this.device_id.subscribe(
            device_id =>  this.play(device_id, song_id, token)
          )
        }
    //   }
    // }, 6000);
  }

  pauseSong(token: string) {

    this.device_id.subscribe(
      device_id =>  this.pause(device_id, token)
    )

  }

  play(device_id: any, current_track: string, token: string) {
    console.log('here and PLAAAYIN',token);
    var spotify_uri:string = 'spotify:track:' + current_track;
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: [spotify_uri] }),
      headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
      }
    });
  }

  pause(device_id: any, token: string) {
    console.log('here and PAUSIN',token);
    fetch(`https://api.spotify.com/v1/me/player/pause?device_id=${device_id}`, {
      method: 'PUT',
      headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
      }
    });
  }

  nextOn() {
    this.nextSong_Subject.next(1);
  }

  nextOff() {
    this.nextSong_Subject.next(0);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-soundcloud',
  templateUrl: './soundcloud.component.html',
  styleUrls: ['./soundcloud.component.css']
})
export class SoundcloudComponent implements OnInit {

  public track_id: number = 0;
  public FRAME = null;


  @Input()
  set inp(input) {
    console.log(input)
    this.track_id = input;
    this.FRAME = this.sanitize(`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.track_id}&amp;auto_play=true`);
  }

  constructor(public sanitizer: DomSanitizer) { }

  sanitize(frame: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(frame);
  }

  ngOnInit() { }

}

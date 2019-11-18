import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-soundcloud',
  templateUrl: './soundcloud.component.html',
  styleUrls: ['./soundcloud.component.css']
})
export class SoundcloudComponent implements OnInit {

  public track_id: number;

  @Input()
  set inp(input) {
     this.track_id = input[0];
  }

  constructor() { }

  ngOnInit() { }

}

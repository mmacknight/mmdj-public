import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent implements OnInit {

  public display = [];

  @Input()
  set inp(input) {
    this.display = input;
  }

  constructor() { }

  ngOnInit() {
  }

  @Output() toggle = new EventEmitter<string>();
  toggleValue(index) {
    this.toggle.emit(index);
  }

}

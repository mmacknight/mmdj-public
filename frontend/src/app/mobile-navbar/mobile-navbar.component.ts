import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent implements OnInit {

  public display = [];
  public DESKTOP: boolean = false;;

  @Input()
  set inp(input) {
    console.log("INP",input);
    this.display = input;
  }

  constructor(private deviceService: DeviceDetectorService) {

    this.DESKTOP = this.deviceService.isDesktop();
  }

  ngOnInit() {
  }

  @Output() toggle = new EventEmitter<string>();
  toggleValue(index) {
    this.toggle.emit(index);
  }

}

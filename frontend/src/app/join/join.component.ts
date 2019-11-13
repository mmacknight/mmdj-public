import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

    public joinForm: FormGroup;
    public invalid = false;

    constructor(fb: FormBuilder, public apiService: ApiService, private router: Router) {
      console.log(window);
      this.joinForm = fb.group({
        eventID: ['', Validators.required]
      });
    }

    ngOnInit() {}


    joinParty() {
      this.apiService.get_event(this.joinForm.controls.eventID.value).subscribe(
        data  => {
          this.apiService.get_event(parseInt(this.joinForm.controls.eventID.value)).subscribe(
            data  => {
              if (data.length) {
                console.log(data);
                this.invalid = false;
                this.router.navigate(['party',this.joinForm.controls.eventID.value]);
              } else {
                this.invalid = true;
              }
            },
            error => {
              if ( error.status >= 400) {
                this.invalid = true,
                console.log(error)
              }
            }
          )
        },
        error => {
          if ( error.status > 400) {
            this.invalid = true,
            console.log(error)
          }
        }
      )
    }

  }

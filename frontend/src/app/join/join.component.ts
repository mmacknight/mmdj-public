import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

    public joinForm: FormGroup;

    constructor(fb: FormBuilder, public apiService: ApiService) {

      this.joinForm = fb.group({
        eventID: ['', Validators.required]
      });
    }

    ngOnInit() {}


    joinParty() {

    }

  }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  public partyForm: FormGroup;

  constructor(fb: FormBuilder, public apiService: ApiService) {
    this.partyForm = fb.group({
      name: '',
      description: '',
      genre: ''
    });
  }
  ngOnInit() {
  }

}

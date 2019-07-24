import { Component, OnInit } from '@angular/core';
import { sing7158 } from '../sing7158';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currStudent: sing7158 = { sid: 991499714,
    sname: 'Kamaljit Singh',
    scampus: 'Davis',
    slogin: 'sing7158',
    atitle: 'Assignment 3'};
}

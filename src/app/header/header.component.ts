import { Component, OnInit } from '@angular/core';

import { sing7158 } from '../sing7158';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currStudent: sing7158={ sid: 991499714,
    sname: 'Kamaljit Singh',
    scampus: 'Davis',
    slogin: 'sing7158',
    atitle: 'Assignment 3'};

  constructor() { }

  ngOnInit() {
  }

  
}

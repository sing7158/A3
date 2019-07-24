import { Component, OnInit } from '@angular/core';
import{ SONG } from '../../assets/data/songs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  mysongs = SONG;
  songname:string;
  aname:string;
  yreleased:string;
  image:string;
  genre:string;

  constructor() {
    
   }
    


  ngOnInit() {
  }
   
     display(myNum:number):void{
        this.songname=this.mysongs[myNum].songname;
        this.aname=this.mysongs[myNum].aname;
        this.yreleased=this.mysongs[myNum].yreleased;
        this.genre=this.mysongs[myNum].genre;
     }

}
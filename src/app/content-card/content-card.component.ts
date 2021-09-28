import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  @Input() content: any;

  constructor() {

  }

  ngOnInit(): void {

  }

}
export function showID(){

  let iD = document.getElementById("iD");
  console.log("image clicked", iD);

}

// export function needClickImage(){
//   let img = document.getElementById("img");
//   img?.addEventListener("click", showID);
//
//    }



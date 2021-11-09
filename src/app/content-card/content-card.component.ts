import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  @Input() content: any;
  //@Input() titleToCheck: any;
  constructor() {
    this.content = {};
  }

  ngOnInit(): void {

  }
  showID(): void {
    console.log(this.content.id);
  }
}





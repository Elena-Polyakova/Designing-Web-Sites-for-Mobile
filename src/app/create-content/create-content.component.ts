import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  @Input() newId: any;
  @Input() newAuthor: any;
  @Input() newImgUrl: any;
  @Input() newType: any;
  @Input() newTitle: any;
  @Input() newBody: any;
  @Input() newTags: any;
  //@Input() contentPiece: any;
  constructor() {
   // this.contentPiece = {};
    this.newId = this.newId;
    this.newAuthor = this.newAuthor;
    this.newImgUrl = this.newImgUrl;
    this.newType = this.newType;
    this.newTitle = this.newTitle;
    this.newBody = this.newBody;
    this.newTags = this.newTags;
  }

  ngOnInit(): void {
  }

  //add Content To Array promise
}

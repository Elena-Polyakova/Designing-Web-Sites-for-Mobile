import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  @Output() newSongEvent = new EventEmitter<Content>();
  newSongItem: Content;

  @Input() newId: any;
  @Input() newAuthor: any;
  @Input() newImgUrl: any;
  @Input() newType: any;
  @Input() newTitle: any;
  @Input() newBody: any;
  @Input() newTags: any;
  @Input() newContent: any;

  public  additionResult: any;

  addSong(id: any, author: any, imgUrl: any, type: any, title: any, body: any, tags: any): void{
    this.newSongEvent.emit(this.newSongItem);
    this.newContent.id = null;
   // this.newContent.id = null;
  }
  constructor() {
    // this.newSongItem.id = this.newId;
    // this.newSongItem.author = this.newAuthor;
    // this.newSongItem. imgUrl = this.newImgUrl;
    // this.newSongItem.type = this.newType;
    // this.newSongItem.title = this.newTitle;
    // this.newSongItem.body = this.newBody;
    // this.newSongItem.tags = this.newTags;
    this.additionResult = this.additionResult;

    this.newSongItem = {
      id: 0,
      author: "",
      imgUrl: "",
      type: "",
      title: "",
      body: "",
      tags: []
    }
  }

  ngOnInit(): void {

   let contentPiece: Content;

    let ourPromise = new Promise((success, fail) => {
      let arrayAdded = true;
      if (arrayAdded) {
        success("Item(s) added in the array!");
        success(this.newTitle);
        this.newTitle = null;
        this.newAuthor = null;
        this.newImgUrl = null;
        this.newType = null;
        this.newTags = null;
        this.newBody = null;
      }
      else {
        fail("Could not add items in the array");
      }
    });
    ourPromise.then(function (successResult) {
      console.log("Addition was successful", successResult)
      let additionResult = "";
    }).catch(error => {
      console.log("Addition failed", error)
      this.additionResult = "Content failed to be added";
    });
  }

  //add Content To Array using promise
  // add(): void{
  //     this.newContent.push({
  //       id: this.newId,
  //       author: this.newAuthor,
  //       imgURL: this.newImgUrl,
  //       type: this.newType,
  //       title: this.newTitle,
  //       body: this.newBody,
  //       tags: this.newTags
  //     })
  //
  //   this.newContent = [...this.newContent];
  //   console.log(this.newContent);
  // }
}

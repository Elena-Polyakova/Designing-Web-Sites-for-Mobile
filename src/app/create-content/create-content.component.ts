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
  //@Input() newSongItem: Content[];

  message: any;
  id: any;
  author: any;
  imgUrl: any;
  type: any;
  title: any;
  body: any;
  tags: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  addContentPromise() {
    let addContentPromise = new Promise((successFunction, failFunction) => {
      if (this.id && this.author && this.title && this.body) {
        this.newSongEvent.emit({
          id: this.id,
          author: this.author,
          imgUrl: this.imgUrl,
          type: this.type,
          title: this.title,
          body: this.body,
          tags: this.tags.split(',')
        });

        successFunction("Content successfully added.");

      }
      else {
        failFunction("500");
      }
    });

    addContentPromise.then((msg) => {
      console.log(msg);
      this.message = "";
    }).catch((msg) => {
      this.message = "Can't add the content without all the required fields set: Error code " + msg;
    });
  }

}

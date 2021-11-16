import {Component, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  @Output() songContent: Content[] = [];
  @Output() song: any;

  message: any;
  id: any;
  author: any;
  imgUrl: any;
  type: any;
  title: any;
  body: any;
  tags: any;
  constructor() { }

  ngOnInit(): void {
    if (this.id && this.author && this.title && this.body) {
      this.song({
        id: this.id,
        author: this.author,
        imgUrl: this.imgUrl,
        type: this.type,
        title: this.title,
        body: this.body,
        tags: this.tags.split(',')
      });

    }

  }
}

import { Component, OnInit } from '@angular/core';
// import  { ContentList } from "../helper-files/content-list";
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  //instance of your ContentList
  // anotherContent: ContentList = new ContentList;
  constructor() {

  }

  ngOnInit(): void {

    let item: Content;

    // item = {id: 1, author: "Unknown", title: "The Novel", body: "This is the novel."};
    // this.anotherContent.add(item);
    // item = {id: 2, author: "Unknown", title: "Movie", body: "This is the movie."};
    // this.anotherContent.add(item);
    // item = {id: 3, author: "Unknown", title: "The cartoon", body: "This is the cartoon."};
    // this.anotherContent.add(item);
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import { Pipe, PipeTransform } from '@angular/core';
import {ContentService} from "../services/content.service";
import {MessageService} from "../message.service";
import {newContent} from "../helper-files/contentDb";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
    @Output() newSongEvent = new EventEmitter<Content>();
    message = "";
    selectedContent?: Content;
    newContent: Content[] = [];
    public item: any;

  constructor(private contentService: ContentService, private messageService: MessageService) {

  }

  ngOnInit(): void {
    //this.newContent = this.contentService.getContent();
    this.contentService.getContentObs().subscribe(content => this.newContent = content);
  }

  onSelect(newContent: Content): void {
    this.selectedContent = newContent;
    this.messageService.add(`Content retrieved!`);
  }

  putAlert(songVariable: string): void{
    //display if song exists with user's title or not
    this.message = "";
     console.log("Your search completed");
     // this.newContent.forEach((eachContentItem) => {
     //   if (songVariable == eachContentItem.title){
     //     console.log("You found the song title in the song list!");
     //     this.message = "Found the song!";
     //     return;
     //   }
     //});
    // if (this.message = '')
    // {
    //   this.message = "We didn't find it";
    // }
    //OR
     for(let i = 0; i < this.newContent.length; i++){
       if(this.newContent[i].title === songVariable){
         this.message = "Song is found!";
         break;
       }
     }
     // let filter = this._newContent.filter(song => song.title == title);
     // if(filter.length > 0) {
     //   this.message = "Found";
     // } else {
     //    this.message = "Not found";
     // }
       // if (songVariable == this.newContent[i].title){
       //
       // }

}

}




import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

    message = "";
    //add 5 items in array
    public newContent: Content[] = [
    {
      id: 1,
      author: 'Luis Fonsi',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Luis_Fonsi_2015_%28cropped%29.JPG',
      type: 'Pop',
      title: 'Despacito ft. Daddy Yankee',
      body: 'This is popular song.',
      tags: ['Pop', 'Luis Fonsi', 'Despacito']
    },
    {
      id: 2,
      author: 'Ed Sheeran',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg',
      type: 'Pop',
      title: 'Shape of You',
      body: 'This is popular song.',
      tags: ['Pop', 'Ed Sheeran', 'Shape of You']
    },
    {
      id: 3,
      author: 'PSY',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/PSY_EMTV_logo_27_%288198008711%29.jpg',
      type: 'Pop Fun',
      title: 'Gangnam Style',
      body: 'This is popular song.',
      tags: ['Pop', 'PSY', 'Gangnam Style']
    },
    {
      id: 4,
      author: 'Mark Ronson',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Mark_Ronson_and_Jennifer_Su%2C_2011_%28cropped%29.jpg',
      type: 'Pop',
      title: 'Uptown Funk ft. Bruno Mars',
      body: 'This is popular song.',
      },
    {
      id: 5,
      author: 'Wiz Khalifa',
      // imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Wiz_Khalifa_High_Road.jpg',
      type: 'Pop Fun',
      title: 'See You Again ft. Charlie Puth',
      body: 'This is popular song.',
      tags: ['Pop', 'Wiz Khalifa', 'See You Again']
    }];
  public item: any;


  constructor() {

  }

  ngOnInit(): void {

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




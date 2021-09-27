import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

    //add 5 items in array
    newContent: Content[] = [
    {
      id: 1,
      author: 'Luis Fonsi',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Luis_Fonsi_2015_%28cropped%29.JPG',
      type: 'Pop',
      title: 'Despacito ft. Daddy Yankee',
      body: 'This is popular song.',
      tags: ['pop', 'Luis Fonsi', 'Despacito']
    },
    {
      id: 2,
      author: 'Ed Sheeran',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg',
      type: 'Pop',
      title: 'Shape of You',
      body: 'This is popular song.',
      tags: ['pop', 'Ed Sheeran', 'Shape of You']
    },
    {
      id: 3,
      author: 'PSY',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/PSY_EMTV_logo_27_%288198008711%29.jpg',
      type: 'Pop',
      title: 'Gangnam Style',
      body: 'This is popular song.',
      tags: ['pop', 'PSY', 'Gangnam Style']
    },
    {
      id: 4,
      author: 'Mark Ronson',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Mark_Ronson_and_Jennifer_Su%2C_2011_%28cropped%29.jpg',
      type: 'Pop',
      title: 'Uptown Funk ft. Bruno Mars',
      body: 'This is popular song.',
      tags: ['pop', 'Mark Ronson', 'Uptown Funk']
    },
    {
      id: 5,
      author: 'Wiz Khalifa',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Wiz_Khalifa_High_Road.jpg',
      type: 'Pop',
      title: 'See You Again ft. Charlie Puth',
      body: 'This is popular song.',
      tags: ['pop', 'Wiz Khalifa', 'See You Again']
    }];

  constructor() { }

  ngOnInit(): void {

  }

}


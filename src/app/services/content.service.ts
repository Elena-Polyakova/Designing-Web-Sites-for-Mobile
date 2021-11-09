import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {newContent} from "../helper-files/contentDb";
import {Observable, of} from "rxjs";
import {MessageService} from "../message.service";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
//use observable supply the content array from contentDb to the content-list
  constructor(private messageService: MessageService) { }

  getContent(): Content[] {
    return newContent;
  }
//publisher
  getContentObs(): Observable<Content[]>{
    //send messages
    this.messageService.add('Content: get newContent');
    return of(newContent);
    //return newContent;
   }
}

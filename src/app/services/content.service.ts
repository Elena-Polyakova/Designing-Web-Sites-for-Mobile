import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {newContent} from "../helper-files/contentDb";
import {Observable, of} from "rxjs";
import {MessageService} from "../message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
//use observable supply the content array from contentDb to the content-list
  constructor(private messageService: MessageService, private http: HttpClient) { }


  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("api/songContent");
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
        'application/json' })
  };

  //commented for assignment 7
//   getContent(): Content[] {
//     return newContent;
//   }
// //publisher
  getContentObs(): Observable<Content[]>{
    //send messages
    this.messageService.add('Content Retrieved!');
    return of(newContent);
    //return newContent;
   }
  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>("api/songContent", content, this.httpOptions);
  }
  updateContent(content: Content): Observable<any> {
    return this.http.put("api/bananas", content, this.httpOptions);
  }
}


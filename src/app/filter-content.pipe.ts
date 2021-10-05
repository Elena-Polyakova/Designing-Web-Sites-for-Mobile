import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  //accept single string parameter to filter an array of Content, returning Content
  //that has its type equal to a string passed to pipe
  transform(item: Content[], newType: string) : Content[]{
    return item.filter(function(item) {
      return item.type == newType? item:null;
    });
  }

}

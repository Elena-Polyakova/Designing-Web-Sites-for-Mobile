import { Content } from "./content-interface";

export class ContentList {
  newContent: Content[]; //private array of Content
  constructor() {
    this.newContent = []; // set array to be empty

  }
  //Getter
  get getContent(): Content[]{
    return this.newContent;
  }
//Add function that adds 1 Content item to the end of the array
  add(item: Content){
    this.newContent.push(item);
  }
  //function that returns the number of items in the array
  arrayLength(){
    return this.newContent.length;
  }
}

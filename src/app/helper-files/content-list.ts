import { Content } from "./content-interface";

class ContentList {
  newContent: Content[]; //private array of Content
  constructor(item: Content) {
    this.newContent = []; // set array to be empty

  }
  //Getter
  get getContent(): Content[]{
    return this.newContent;
  }

}

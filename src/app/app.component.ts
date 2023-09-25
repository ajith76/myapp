import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

type Anime ={
  id:string,
  title:string,
  rating:number,
  poster:string,
  summary:string,
  trailer:string,
  like:number,
  dislike:number,
  releaseYear:number,
  censorRating:string,
  genres:Array<string>,
  languages:Array<string>


}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myapp';
 
}

export{Anime};

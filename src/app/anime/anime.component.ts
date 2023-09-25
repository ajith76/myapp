import { Component,Input,Output,EventEmitter  } from '@angular/core';
import { AnimeService } from '../anime.service';
import { Route, Router } from '@angular/router';
import { Anime } from '../app.component';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {
  @Input() anime: Anime = {
    "id": "1",
    "title": "Your Name",
    "rating": 8.9,
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgxNTgzOV5BMl5BanBnXkFtZTgwMDM5OTI5NjE@._V1_.jpg",
    "summary": "Two strangers find themselves connected in a mysterious way when they start swapping bodies intermittently. They embark on a quest to uncover the truth behind this strange phenomenon.",
    "trailer": "https://youtu.be/hRfHcp2GjVI",
    "like": 0,
    "dislike": 0,
    "releaseYear": 2016,
    "censorRating": "PG",
    "genres": [
      "Animation",
      "Drama",
      "Fantasy"
    ],
    "languages": [
      "Japanese",
      "English"
    ]
  };
  @Output() removeAnime = new EventEmitter();
  show = true;
  constructor(private router: Router, private animeService:AnimeService){}
  toggleSummary(){
    this.show = !this.show;
  }
  gotoAnimeDetails(){
    this.router.navigate([])
  }
}

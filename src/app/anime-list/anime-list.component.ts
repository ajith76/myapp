import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimeService } from '../anime.service';
import { Anime } from '../app.component';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {
  animeList: Array<Anime> = [];
  getAnimeList: Subscription | any ;
  constructor(private animeService: AnimeService){}
  
  ngOnINit(){
    this.loadAnimesData();
  }
  loadAnimesData(){
    this.getAnimeList = this.animeService
    .getAnimeListFromMockAPI()
    .subscribe((aniList) => {
      this.animeList = aniList;
    });
  }
  ngOnDestroy(){
    this.getAnimeList.unsubscribe();
  }
}

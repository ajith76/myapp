import { Component,Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimeService } from '../anime.service';
import { Anime } from '../app.component';
import { FormBuilder } from '@angular/forms';
import { GENRES, LANGUAGES } from '../add-anime-form/global';


import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {
  animeList: Array<Anime> = [];
  getAnimeList: Subscription | any ;
  searchForm = this.fb.group({
    search: '',
  });

  get search() {
    return this.searchForm.get('search');
  }
 
  constructor(private animeService: AnimeService,private fb: FormBuilder){}
  
  ngOnInit(){
    this.getanime();
    this.loadAnimesData();
  }
  getanime(){
    this.getAnimeList = this.animeService.getAnimeListFromMockAPI().subscribe((animeList : any)=>{
    this.animeList = animeList;
    })
  }
  loadAnimesData(){
    this.getAnimeList = this.animeService
    .currentAnimeList
    .subscribe((aniList : any) => {
      this.animeList = aniList;
    });
  }
  ngOnDestroy(){
    this.getAnimeList.unsubscribe();
  }
  
  
}


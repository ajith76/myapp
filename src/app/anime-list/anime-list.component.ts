import { Component,Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimeService } from '../anime.service';
import { Anime } from '../app.component';
import { FormBuilder } from '@angular/forms';

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
    this.search?.valueChanges
    .pipe(
      debounceTime(1500),
      distinctUntilChanged(),
      switchMap((name) => this.animeService.searchAnimeList(name || ''))
    )
    .subscribe((mvList) => {
      this.animeList = mvList;
    });
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

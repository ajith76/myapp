import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
} from 'rxjs';
import { Subscription } from 'rxjs';
import { AnimeService } from '../anime.service';
import { Anime } from '../app.component';


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {
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
    .subscribe((aniList) => {
      this.animeList = aniList;
      this.animeService.changeAnimeList(this.animeList)
    });

  }
 
  }
 



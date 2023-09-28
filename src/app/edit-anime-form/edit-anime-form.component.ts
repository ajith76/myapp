import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { FormBuilder } from '@angular/forms';
import { Anime } from '../app.component';
import { AnimeService } from '../anime.service';
import { GENRES, LANGUAGES } from '../add-anime-form/global';


@Component({
  selector: 'app-edit-anime-form',
  templateUrl: './edit-anime-form.component.html',
  styleUrls: ['./edit-anime-form.component.css']
})
export class EditAnimeFormComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];

  languages = LANGUAGES;

  genres = GENRES;
  id: string = '';

  anime:any;


  animeForm = this.fb.group({
    id:'',
    like: 0,
    dislike: 0,
    title: ['', [Validators.required, Validators.minLength(5)]],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    // releaseYear: ['', [Validators.required]],
    censorRating: ['', [Validators.required]],
    genres: [[], [Validators.required]],
    languages: [[], [Validators.required]],

    poster: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    summary: ['', [Validators.required, Validators.minLength(20)]],
    trailer: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
  });
  animeList;
  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.animeList = animeService.getAnimeList();
    const { id } = this.route.snapshot.params;
    this.id = id;
  }
  
  ngOnInit() {
    this.animeService.getAnimeById(this.id).subscribe((ani:any) => {
      console.log(ani);
      this.animeForm.patchValue(ani);
    });
  }
 
  get title() {
    return this.animeForm?.get('title');
  }

  get rating() {
    return this.animeForm?.get('rating');
  }

  get poster() {
    return this.animeForm?.get('poster');
  }

  get summary() {
    return this.animeForm?.get('summary');
  }

  get trailer() {
    return this.animeForm?.get('trailer');
  }

  get censorRating(){
    return this.animeForm?.get('censorRating')
  }
  

 
  updateAnime() {
    console.log(this.animeForm.status);

    if (this.animeForm.valid) {
      const updatedAnime = this.animeForm.value;
      console.log(updatedAnime);
      this.animeService.updateAnimeById(updatedAnime as unknown as Anime).subscribe(() => {
        this.router.navigate(['/animes']);
      });
    }
  }
}
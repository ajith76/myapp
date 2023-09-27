import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { LANGUAGES, GENRES } from './global';
import { FormBuilder } from '@angular/forms';
import { Anime } from '../app.component';
import { AnimeService } from '../anime.service';




@Component({
  selector: 'app-add-anime-form',
  templateUrl: './add-anime-form.component.html',
  styleUrls: ['./add-anime-form.component.css']
})
export class AddAnimeFormComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];

  languages = LANGUAGES;

  genres = GENRES;

  animeForm = this.fb.group({
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
    private animeService: AnimeService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.animeList = animeService.getAnimeList();
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


  addAnime() {
    console.log(this.animeForm.status);

    if (this.animeForm.valid) {
      const newAnime = this.animeForm.value;
      console.log(newAnime);
      this.animeService.createAnime(newAnime as unknown as Anime).subscribe(() => {
        this.router.navigate(['/animes']);
      });
    }
  }
}


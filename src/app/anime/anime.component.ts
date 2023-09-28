import { Component,Input,Output,EventEmitter  } from '@angular/core';
import { AnimeService } from '../anime.service';
import { Route, Router } from '@angular/router';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { Anime } from '../app.component';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {
  @Input() anime: any;
  @Output() removeAnime = new EventEmitter();
  likeSubject = new Subject<number>();
  disLikeSubject = new Subject<number>();
  show = false;
  constructor(private router: Router, private animeService: AnimeService) {

    this.likeSubject
      .pipe(
        debounceTime(2000),
        switchMap((count) => {
          this.anime = { ...this.anime, like: count };
          return this.animeService.updateAnimeById(this.anime);
        })
      )
      .subscribe();

    this.disLikeSubject
      .pipe(
        debounceTime(2000),
        switchMap((count) => {
          this.anime = { ...this.anime, dislike: count };
          return this.animeService.updateAnimeById(this.anime);
        })
      )
      .subscribe();
  }

  toggleSummary() {
    this.show = !this.show;
  }

  gotoAnimeDetail() {

    this.router.navigate([`/animes/info/`, this.anime.id]);
  }


  editAnime() {
    this.router.navigate(['/animes/edit/', this.anime.id]);
  }


  deleteAnime() {
    this.animeService.deleteAnimeById(this.anime.id).subscribe(() => {
      console.log('anime deleted successfully');
      this.removeAnime.emit();
      this.router.navigate(['/animes']);
    });

  }

  likeCount(count: number) {
  
    this.likeSubject.next(count);
  }

  disLikeCount(count: number) {
    this.disLikeSubject.next(count);
  }
}

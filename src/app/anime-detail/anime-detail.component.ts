import { Component } from '@angular/core';
import { AnimeService } from '../anime.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { GENRES, LANGUAGES } from '../add-anime-form/global';


@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent {
  id: string = '';
  anime: any;

  constructor(
    private router: ActivatedRoute,
    private animeService: AnimeService,
    private sanitizer: DomSanitizer
  ) {
    const { id } = this.router.snapshot.params;
    this.id = id;
  }

  ngOnInit() {
    this.animeService.getAnimeById(this.id).subscribe((ani) => {
      console.log(ani);
      this.anime = {
        ...ani,
        trailer: this.sanitizer.bypassSecurityTrustResourceUrl(ani.trailer),
      };
    });
  }

  getLabelLanguages(anime: any) {
    return this.anime.languages?.map(
      (lang: string) => LANGUAGES.find((data) => data.value === lang)?.label
    );
  }

  getLabelGenres(anime: any) {
    return anime.genres?.map(
      (gen: string) => GENRES.find((data) => data.value === gen)?.label
    );
  }
}

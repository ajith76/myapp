import { Injectable } from '@angular/core';
import { Anime } from './app.component';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  animeList : Array<Anime> = [];

  constructor(private http: HttpClient) { }


getAnimeList(){
  return this.animeList;
}

getAnimeListFromMockAPI(){
  return this.http.get<Anime[]>('https://64f6f4189d7754084952d85e.mockapi.io/anime');
}
  getAnimeById(id: string) {
    return this.http.get<Anime>(
      `https://64f6f4189d7754084952d85e.mockapi.io/anime/${id}`
    );
  }

  deleteAnimeById(id: string) {
    return this.http.delete<Anime>(
      `https://64f6f4189d7754084952d85e.mockapi.io/anime/${id}`
    );
  }

  createAnime(newAnime: Anime) {
    return this.http.post(
      `https://64f6f4189d7754084952d85e.mockapi.io/anime`,
      newAnime
    );
  }

  updateAnimeById(updatedAnime: Anime) {
    const id = updatedAnime.id;
    return this.http.put(
      `https://60c98aa8772a760017203b57.mockapi.io/movies/${id}`,
      updatedAnime
    );
  }

  setAnimeList(newAnime: Anime) {
    this.animeList.push(newAnime);
  }

  updateAnime(updatedAnime: Anime) {
    console.log(this.animeList);
    const id = updatedAnime.id;
    const index = this.animeList.findIndex((ani) => ani.id === id);
    this.animeList.splice(index, 1, updatedAnime);
    
  }
}

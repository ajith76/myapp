import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AddAnimeFormComponent } from './add-anime-form/add-anime-form.component';




const routes: Routes = [{path:"animes", component:AnimeListComponent },
{path:"animes/add", component:AddAnimeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

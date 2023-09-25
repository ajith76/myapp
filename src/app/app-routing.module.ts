import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './anime-list/anime-list.component';




const routes: Routes = [{path:"anime", component:AnimeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

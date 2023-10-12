import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './animes/anime/anime.component';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './animes/anime-list/anime-list.component';
import { AddAnimeFormComponent } from './animes/add-anime-form/add-anime-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditAnimeFormComponent } from './animes/edit-anime-form/edit-anime-form.component';
import { AnimeDetailComponent } from './animes/anime-detail/anime-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [ { path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomePageComponent },

{
  path: 'animes',
  loadChildren: () =>
    import('./animes/animes.module').then((m) => m.AnimesModule),
  
},
{ path: '**', component: NotFoundComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

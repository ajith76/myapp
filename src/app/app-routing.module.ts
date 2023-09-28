import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AddAnimeFormComponent } from './add-anime-form/add-anime-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditAnimeFormComponent } from './edit-anime-form/edit-anime-form.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';



const routes: Routes = [{path:"animes", component:AnimeListComponent },
{path:"animes/add", component:AddAnimeFormComponent},
{path:"", component:HomePageComponent},
{path:"animes/edit/:id", component:EditAnimeFormComponent},
{path:"animes/info/:id", component:AnimeDetailComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

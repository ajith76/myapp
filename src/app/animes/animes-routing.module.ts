import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AddAnimeFormComponent } from './add-anime-form/add-anime-form.component';
import { EditAnimeFormComponent } from './edit-anime-form/edit-anime-form.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

const routes: Routes = [
  { path: '', component: AnimeListComponent, pathMatch: 'full' },
  { path: 'add', component: AddAnimeFormComponent },
  //  : -> id become variable
  { path: 'edit/:id', component: EditAnimeFormComponent },
  { path: ':id', component: AnimeDetailComponent },
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimesRoutingModule { 
 }

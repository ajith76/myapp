import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimesRoutingModule } from './animes-routing.module';
import { AnimeComponent } from './anime/anime.component';
import { AddAnimeFormComponent } from './add-anime-form/add-anime-form.component';
import { EditAnimeFormComponent } from './edit-anime-form/edit-anime-form.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbar } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { LikeDislikeCounterComponent } from './like-dislike-counter/like-dislike-counter.component';


@NgModule({
  declarations: [
   
    AnimeComponent,
    AddAnimeFormComponent,
    EditAnimeFormComponent,
    AnimeListComponent,
    AnimeDetailComponent,
    LikeDislikeCounterComponent
  ],
  imports: [
    CommonModule,
    AnimesRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatChipsModule,
    SharedModule
  ]
})
export class AnimesModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import {
 MatChipEditedEvent ,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAnimeFormComponent } from './add-anime-form/add-anime-form.component';
import { LikeDislikeCounterComponent } from './like-dislike-counter/like-dislike-counter.component';
import {MatIconModule} from '@angular/material/icon';
import { EditAnimeFormComponent } from './edit-anime-form/edit-anime-form.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import { NotFoundComponent } from './not-found/not-found.component';






@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    AnimeListComponent,
    AddAnimeFormComponent,
    LikeDislikeCounterComponent,
    EditAnimeFormComponent,
    AnimeDetailComponent,
    HomePageComponent,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,MatIconModule,MatFormFieldModule,MatButtonModule,FormsModule, ReactiveFormsModule,
    MatInputModule,BrowserAnimationsModule,MatToolbarModule,MatFormFieldModule,MatRadioModule,
    MatDatepickerModule,MatListModule,MatSelectModule,MatChipsModule,MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

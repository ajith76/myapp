import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponentComponent } from '../search-component/search-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchComponentComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[SearchComponentComponent]
})
export class SharedModule { }

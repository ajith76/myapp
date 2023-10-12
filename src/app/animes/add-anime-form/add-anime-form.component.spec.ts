import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimeFormComponent } from './add-anime-form.component';

describe('AddAnimeFormComponent', () => {
  let component: AddAnimeFormComponent;
  let fixture: ComponentFixture<AddAnimeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAnimeFormComponent]
    });
    fixture = TestBed.createComponent(AddAnimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

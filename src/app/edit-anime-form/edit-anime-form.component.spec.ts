import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnimeFormComponent } from './edit-anime-form.component';

describe('EditAnimeFormComponent', () => {
  let component: EditAnimeFormComponent;
  let fixture: ComponentFixture<EditAnimeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAnimeFormComponent]
    });
    fixture = TestBed.createComponent(EditAnimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

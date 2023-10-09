import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogueBoxComponent } from './confirm-dialogue-box.component';

describe('ConfirmDialogueBoxComponent', () => {
  let component: ConfirmDialogueBoxComponent;
  let fixture: ComponentFixture<ConfirmDialogueBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDialogueBoxComponent]
    });
    fixture = TestBed.createComponent(ConfirmDialogueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

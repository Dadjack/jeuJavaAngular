import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDifficultyComponent } from './choose-difficulty.component';

describe('ChooseDifficultyComponent', () => {
  let component: ChooseDifficultyComponent;
  let fixture: ComponentFixture<ChooseDifficultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseDifficultyComponent]
    });
    fixture = TestBed.createComponent(ChooseDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

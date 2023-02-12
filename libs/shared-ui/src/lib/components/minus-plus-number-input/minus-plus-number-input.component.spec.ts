import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusPlusNumberInputComponent } from './minus-plus-number-input.component';

describe('MinusPlusNumberInputComponent', () => {
  let component: MinusPlusNumberInputComponent;
  let fixture: ComponentFixture<MinusPlusNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinusPlusNumberInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinusPlusNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

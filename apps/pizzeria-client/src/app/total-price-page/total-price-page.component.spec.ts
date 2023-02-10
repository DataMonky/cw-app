import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPricePageComponent } from './total-price-page.component';

describe('TotalPricePageComponent', () => {
  let component: TotalPricePageComponent;
  let fixture: ComponentFixture<TotalPricePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalPricePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TotalPricePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

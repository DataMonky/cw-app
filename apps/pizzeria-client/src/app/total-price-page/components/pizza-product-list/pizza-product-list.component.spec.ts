import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaProductListComponent } from './pizza-product-list.component';

describe('PizzaProductListComponent', () => {
  let component: PizzaProductListComponent;
  let fixture: ComponentFixture<PizzaProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

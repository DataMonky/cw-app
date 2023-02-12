import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { PizzaProductViewModel } from '../../view-models';

@Component({
  selector: 'cw-app-pizza-product-list',
  templateUrl: './pizza-product-list.component.html',
  styleUrls: ['./pizza-product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaProductListComponent {
  @Input() pizzaProducts: PizzaProductViewModel[] = [];

  @Output() selected = new EventEmitter<PizzaProductViewModel>();

  faPizzaSlice = faPizzaSlice;
  
  select(pizzaProduct: PizzaProductViewModel) {
    this.selected.emit(pizzaProduct);
  }
}

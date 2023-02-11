import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PizzaProductViewModel } from '../../view-models';

@Component({
  selector: 'cw-app-pizza-product-list',
  templateUrl: './pizza-product-list.component.html',
  styleUrls: ['./pizza-product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaProductListComponent {
  @Input() pizzaProducts: PizzaProductViewModel[] = [];
}

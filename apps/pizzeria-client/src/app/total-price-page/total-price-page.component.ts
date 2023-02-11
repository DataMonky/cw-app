import { Component, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subscription,
} from 'rxjs';
import { TotalPriceService } from './services/total-price.service';
import { PizzaProductViewModel, StoreViewModel } from './view-models';

@Component({
  selector: 'cw-app-total-price-page',
  templateUrl: './total-price-page.component.html',
  styleUrls: ['./total-price-page.component.scss'],
})
export class TotalPricePageComponent implements OnDestroy {
  stores$: Observable<StoreViewModel[]> = this.totalPriceService.getStores();
  pizzaProducts: PizzaProductViewModel[] = [];
  private showPizzaProductsSubj = new BehaviorSubject<boolean>(false);
  showPizzaProducts$ = this.showPizzaProductsSubj.asObservable();
  private subscriptions: Subscription = new Subscription();

  constructor(private totalPriceService: TotalPriceService) {}

  onStoreSelected(store: StoreViewModel) {
    this.subscriptions.add(
      this.totalPriceService
        .getPizzaProducts(store.id)
        .subscribe((pizzaProducts) => {
          const hasPizzaProducts = pizzaProducts && pizzaProducts.length > 0;
          this.showPizzaProductsSubj.next(hasPizzaProducts);
          this.pizzaProducts = pizzaProducts;
        })
    );
  }

  onStoreSelectionCleared() {
    this.pizzaProducts = [];
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

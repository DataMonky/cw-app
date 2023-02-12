import { Component, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subscription,
} from 'rxjs';
import { PurchaseablePizzaProduct } from './models';
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
  selectedPizzaProduct: PizzaProductViewModel | null = null;

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

  onPizzaSelected(pizzaProduct: PizzaProductViewModel) {
    this.selectedPizzaProduct = pizzaProduct;
  }
  
  onSelectedPizzaProductAdded(selectedPurchaseablePizzaProduct: PurchaseablePizzaProduct){
    console.log('selected pizza product: ', selectedPurchaseablePizzaProduct);
    this.selectedPizzaProduct = null;
  }

  onSelectPizzaCancelled() {
    this.selectedPizzaProduct = null;
  }
  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

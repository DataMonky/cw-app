import { BehaviorSubject, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PizzaProductResponse, StoreApiService, StoreResponse } from '@cw-app/api';
import { buildToppingSummary, extractCustomiseableToppings, PizzaProductViewModel, StoreViewModel } from '../view-models';
import { PurchaseablePizzaProduct } from '../models';
import { PurchaseableItem } from '@cw-app/contacts';

@Injectable({
  providedIn: 'root',
})
export class TotalPriceService {

  private purchaseabledPizzaProducts: PurchaseablePizzaProduct[] = [];
  private totalPrice = 0;
  private totalPriceSubj = new BehaviorSubject<number>(0);
  totalPrice$ = this.totalPriceSubj.asObservable();

  constructor(private storeApiService: StoreApiService) {}

  getStores(): Observable<StoreViewModel[]> {
    return this.storeApiService.getStores().pipe(
      map((storeResponses: StoreResponse[]) =>
        storeResponses.map((storeResponse: StoreResponse) => {
          const store: StoreViewModel = {
            id: storeResponse.id,
            name: storeResponse.name,
          };
          return store;
        })
      )
    );
  }

  getPizzaProducts(storeId: string): Observable<PizzaProductViewModel[]> {
    return this.storeApiService.getPizzaProducts(storeId).pipe(
      map((pizzaProductResponses: PizzaProductResponse[]) =>
        pizzaProductResponses
        .map((pizzaProductResponse: PizzaProductResponse) => {
          const pizzaProduct: PizzaProductViewModel = {
            id: pizzaProductResponse.id,
            name: pizzaProductResponse.name,
            toppingSummary: buildToppingSummary(pizzaProductResponse.toppings),
            customiseableToppings: extractCustomiseableToppings(pizzaProductResponse.toppings),
            price: pizzaProductResponse.price
          };
          return pizzaProduct;
        }))
    );
  }

  addPurchaseablePizzaProduct(purchaseablePizzaProduct: PurchaseablePizzaProduct) {
    this.purchaseabledPizzaProducts.push(purchaseablePizzaProduct);
    this.totalPrice = this.totalPrice + this.calPurchaseablePizzaProductTotalPrice(purchaseablePizzaProduct);
    this.totalPriceSubj.next(this.totalPrice);
  }

  reset() {
    this.totalPrice = 0;
    this.totalPriceSubj.next(this.totalPrice);
    this.purchaseabledPizzaProducts = [];
  }

  private calPurchaseablePizzaProductTotalPrice(purchaseablePizzaProduct: PurchaseablePizzaProduct) {
    const unitPizzaProductToppingPrice = this.calPurchaseablePizzaToppingPrice(purchaseablePizzaProduct.toppings);
    const unitPizzaProductPrice = purchaseablePizzaProduct.pizza.unitPrice + unitPizzaProductToppingPrice;
    return unitPizzaProductPrice * purchaseablePizzaProduct.quantity;
  }

  private calPurchaseablePizzaToppingPrice(toppings: PurchaseableItem[]) {
    let totalPrice = 0;
    for(const topping of toppings) {
      totalPrice = totalPrice + topping.unitPrice
    }
    return totalPrice;
  }
}

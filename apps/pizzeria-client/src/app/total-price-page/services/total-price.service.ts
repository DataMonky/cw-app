import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PizzaProductResponse, StoreApiService, StoreResponse } from '@cw-app/api';
import { buildToppingSummary, extractCustomiseableToppings, PizzaProductViewModel, StoreViewModel } from '../view-models';

@Injectable({
  providedIn: 'root',
})
export class TotalPriceService {
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
}

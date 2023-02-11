import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PizzaProductResponse } from './responses';
import { StoreResponse } from './responses/store.response';

@Injectable({
  providedIn: 'root',
})
export class StoreApiService {
  getStores(): Observable<StoreResponse[]> {
    const mockedStores: StoreResponse[] = [
      { id: '1', name: 'Preston' },
      { id: '2', name: 'Southbank' },
    ];
    return of(mockedStores);
  }

  getPizzaProducts(storeId: string): Observable<PizzaProductResponse[]> {
    const mockedPizzaProducts: PizzaProductResponse[] =
      storeId === '1'
        ? this.getMockedPizzaProductsForPreston()
        : storeId === '2'
        ? this.getMockedPizzaProductsForSouthbank()
        : [];

    return of(mockedPizzaProducts);
  }

  private getMockedPizzaProductsForPreston(): PizzaProductResponse[] {
    const mockedPizzaProductsForPreston = [
      {
        id: '1',
        name: 'Capricciosa',
        toppings: [
          {
            id: '1',
            name: 'Cheese',
            allowExtra: true,
            price: 1,
          },
          {
            id: '2',
            name: 'Ham',
            allowExtra: false,
            price: 0,
          },
          {
            id: '3',
            name: 'Mushrooms',
            allowExtra: false,
            price: 0,
          },
          {
            id: '4',
            name: 'Olives',
            allowExtra: true,
            price: 1,
          },
        ],
        price: 20,
      },
      {
        id: '2',
        name: 'Mexicana',
        toppings: [
          {
            id: '1',
            name: 'Cheese',
            allowExtra: true,
            price: 1,
          },
          {
            id: '5',
            name: 'Salami',
            allowExtra: true,
            price: 1,
          },
          {
            id: '6',
            name: 'Capsicum',
            allowExtra: true,
            price: 1,
          },
          {
            id: '7',
            name: 'Chilli',
            allowExtra: false,
            price: 0,
          },
        ],
        price: 18,
      },
      {
        id: '3',
        name: 'Margherita',
        toppings: [
          {
            id: '1',
            name: 'Cheese',
            allowExtra: true,
            price: 1,
          },
          {
            id: '8',
            name: 'Spinach',
            allowExtra: false,
            price: 0,
          },
          {
            id: '9',
            name: 'Ricotta',
            allowExtra: false,
            price: 0,
          },
          {
            id: '10',
            name: 'Cherry',
            allowExtra: false,
            price: 0,
          },
          {
            id: '11',
            name: 'Tomatoes',
            allowExtra: false,
            price: 0,
          },
        ],
        price: 22,
      },
    ];
    return mockedPizzaProductsForPreston;
  }

  private getMockedPizzaProductsForSouthbank(): PizzaProductResponse[] {
    const mockedPizzaProductsForSouthbank = [
      {
        id: '1',
        name: 'Capricciosa',
        toppings: [
          {
            id: '1',
            name: 'Cheese',
            allowExtra: true,
            price: 1,
          },
          {
            id: '2',
            name: 'Ham',
            allowExtra: false,
            price: 0,
          },
          {
            id: '3',
            name: 'Mushrooms',
            allowExtra: false,
            price: 0,
          },
          {
            id: '4',
            name: 'Olives',
            allowExtra: true,
            price: 1,
          },
        ],
        price: 25,
      },
      {
        id: '4',
        name: 'Vegetarian',
        toppings: [
          {
            id: '1',
            name: 'Cheese',
            allowExtra: true,
            price: 1,
          },
          {
            id: '3',
            name: 'Mushrooms',
            allowExtra: false,
            price: 0,
          },
          {
            id: '6',
            name: 'Capsicum',
            allowExtra: true,
            price: 1,
          },
          {
            id: '12',
            name: 'Onion',
            allowExtra: false,
            price: 0,
          },
          {
            id: '4',
            name: 'Olives',
            allowExtra: true,
            price: 1,
          },
        ],
        price: 17,
      },
    ];

    return mockedPizzaProductsForSouthbank;
  }
}

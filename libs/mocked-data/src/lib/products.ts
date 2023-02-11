import { InvoiceableItem } from './invoiceable-items';
import { ItemType } from './item-type.enum';
import { Store } from './stores';

export interface Product {
  id: string;
  invoiceableItem: InvoiceableItem;
  price: number;
  location: Store;
}

export const exampleProducts: Product[] = [
  {
    id: '1',
    invoiceableItem: {
      id: '1',
      type: ItemType.Topping,
      pizza: undefined,
      topping: {
        id: '1',
        name: 'Cheese',
        allowExtra: true,
      },
    },
    price: 1,
    location: {
      id: '1',
      name: 'Preston',
    },
  },
  {
    id: '2',
    invoiceableItem: {
      id: '5',
      type: ItemType.Pizza,
      pizza: {
        id: '1',
        name: 'Capricciosa',
        toppings: [
          {
            id: '1',
            name: 'Cheese',
            allowExtra: true,
          },
          {
            id: '2',
            name: 'Ham',
            allowExtra: false,
          },
          {
            id: '3',
            name: 'Mushrooms',
            allowExtra: false,
          },
          {
            id: '4',
            name: 'Olives',
            allowExtra: true,
          },
        ],
      },
      topping: undefined,
    },
    price: 20,
    location: {
      id: '1',
      name: 'Preston',
    },
  },
  {
    id: '3',
    invoiceableItem: {
      id: '6',
      type: ItemType.Pizza,
      pizza: {
        id: '2',
        name: 'Mexicana',
        toppings: [
          {
            id: '1',
            name: 'Cheese',
            allowExtra: true,
          },
          {
            id: '5',
            name: 'Salami',
            allowExtra: true,
          },
          {
            id: '6',
            name: 'Capsicum',
            allowExtra: true,
          },
          {
            id: '7',
            name: 'Chilli',
            allowExtra: false,
          },
        ],
      },
      topping: undefined,
    },
    price: 18,
    location: {
      id: '1',
      name: 'Preston',
    },
  },
  {
    id: '4',
    invoiceableItem: {
      id: '7',
      type: ItemType.Pizza,
      pizza: {
        id: '3',
        name: 'Margherita',
        toppings: [
          {
            id: '1',
            name: 'Cheese',
            allowExtra: true,
          },
          {
            id: '8',
            name: 'Spinach',
            allowExtra: false,
          },
          {
            id: '9',
            name: 'Ricotta',
            allowExtra: false,
          },
          {
            id: '10',
            name: 'Cherry',
            allowExtra: false,
          },
          {
            id: '11',
            name: 'Tomatoes',
            allowExtra: false,
          },
        ],
      },
      topping: undefined,
    },
    price: 22,
    location: {
      id: '1',
      name: 'Preston',
    },
  },
  {
    id: '5',
    invoiceableItem: {
      id: '5',
      type: ItemType.Pizza,
      pizza: {
        id: '1',
        name: 'Capricciosa',
        toppings: [
          {
            id: '1',
            name: 'Cheese',
            allowExtra: true,
          },
          {
            id: '2',
            name: 'Ham',
            allowExtra: false,
          },
          {
            id: '3',
            name: 'Mushrooms',
            allowExtra: false,
          },
          {
            id: '4',
            name: 'Olives',
            allowExtra: true,
          },
        ],
      },
      topping: undefined,
    },
    price: 25,
    location: {
      id: '2',
      name: 'Southbank',
    },
  },
  {
    id: '6',
    invoiceableItem: {
      id: '8',
      type: ItemType.Pizza,
      pizza: {
        id: '4',
        name: 'Vegetarian',
        toppings: [
          {
            id: '1',
            name: 'Cheese',
            allowExtra: true,
          },
          {
            id: '3',
            name: 'Mushrooms',
            allowExtra: false,
          },
          {
            id: '6',
            name: 'Capsicum',
            allowExtra: true,
          },
          {
            id: '12',
            name: 'Onion',
            allowExtra: false,
          },
          {
            id: '4',
            name: 'Olives',
            allowExtra: true,
          },
        ],
      },
      topping: undefined,
    },
    price: 17,
    location: {
      id: '2',
      name: 'Southbank',
    },
  },
  {
    id: '7',
    invoiceableItem: {
      id: '1',
      type: ItemType.Topping,
      pizza: undefined,
      topping: {
        id: '1',
        name: 'Cheese',
        allowExtra: true,
      },
    },
    price: 1,
    location: {
      id: '2',
      name: 'Southbank',
    },
  },
];

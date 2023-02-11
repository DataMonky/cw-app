import { ItemType } from "./item-type.enum";
import { Pizza } from "./pizzas";
import { Topping } from "./toppings";

export interface InvoiceableItem {
    id: string;
    type: ItemType;
    pizza: Pizza | undefined;
    topping: Topping | undefined;
  }



  export const exampleInvoiceableItems: InvoiceableItem[] = [
    {
      id: '1',
      type: ItemType.Topping,
      pizza: undefined,
      topping:   {
        id: '1',
        name: 'Cheese',
        allowExtra: true,
      }
    },
    {
      id: '2',
      type: ItemType.Topping,
      pizza: undefined,
      topping:   {
        id: '4',
        name: 'Olives',
        allowExtra: true,
      }
    },
    {
      id: '3',
      type: ItemType.Topping,
      pizza: undefined,
      topping:   {
        id: '5',
        name: 'Salami',
        allowExtra: true,
      }
    },
    {
      id: '4',
      type: ItemType.Topping,
      pizza: undefined,
      topping:   {
        id: '6',
        name: 'Capsicum',
        allowExtra: true,
      }
    },
    {
      id: '5',
      type: ItemType.Pizza,
      pizza:  {
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
            }
        ]
      },
      topping: undefined
    },
    {
      id: '6',
      type: ItemType.Pizza,
      pizza:  {
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
              }
        ]
      },
      topping: undefined
    },
    {
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
              }
        ]
      },
      topping: undefined
    },
    {
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
              }
        ]
      },
      topping: undefined
    }
  ];
  
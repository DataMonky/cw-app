import { Topping } from "./toppings";

export interface Pizza {
    id: string;
    name: string;
    toppings: Topping[];
  }

export const examplePizzas: Pizza[] = [
    {
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
    {
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
    {
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
      {
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
      }
  ];
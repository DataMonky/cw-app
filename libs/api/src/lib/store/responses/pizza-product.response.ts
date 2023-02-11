import { ToppingProductResponse } from "./topping-product.response";

export interface PizzaProductResponse {
    id: string;
    name: string;
    toppings: ToppingProductResponse[];
    price: number;
}
import { PurchaseableItem } from "@cw-app/contacts";

export interface PurchaseablePizzaProduct {
    pizza: PurchaseableItem;
    quantity: number;
    toppings: PurchaseableItem[];
}
import { ToppingProductResponse } from '@cw-app/api';
import { ToppingProductViewModel } from './topping-product.vm';

export interface PizzaProductViewModel {
  id: string;
  name: string;
  toppingSummary: string;
  customiseableToppings: ToppingProductViewModel[];
  price: number;
}

export function buildToppingSummary(
  toppingProductResponses: ToppingProductResponse[]
): string {
  const toppingNames = toppingProductResponses.map((topping) => topping.name);
  return toppingNames.join(', ');
}

export function extractCustomiseableToppings(
  toppingProductResponses: ToppingProductResponse[]
): ToppingProductViewModel[] {
  const customiseableToppingCandidates = toppingProductResponses.filter(
    (toppingProductResponse) => toppingProductResponse.allowExtra
  );
  return customiseableToppingCandidates.map((customiseableToppingCandidate) => {
    const toppingProduct: ToppingProductViewModel = {
        id: customiseableToppingCandidate.id,
        name: customiseableToppingCandidate.name,
        price: customiseableToppingCandidate.price
    };
    return toppingProduct;
  });
}

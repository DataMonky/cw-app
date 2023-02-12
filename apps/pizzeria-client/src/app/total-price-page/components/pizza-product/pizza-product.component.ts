import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PurchaseableItem } from '@cw-app/contacts';
import { PurchaseablePizzaProduct } from '../../models';
import {
  PizzaProductViewModel,
  ToppingProductViewModel,
} from '../../view-models';

@Component({
  selector: 'cw-app-pizza-product',
  templateUrl: './pizza-product.component.html',
  styleUrls: ['./pizza-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaProductComponent implements OnInit, OnChanges {
  @Input()
  pizzaProduct: PizzaProductViewModel | null = null;

  @Output() added = new EventEmitter<PurchaseablePizzaProduct>();
  @Output() cancelled = new EventEmitter<void>();

  pizzaQuantity = 0;
  customiseableToppings: ToppingProductViewModel[] = [];
  selectedToppings: ToppingProductViewModel[] = [];

  selectedToppingsFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.selectedToppingsFormGroup = this.fb.group({
      toppings: this.fb.array([]),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes) return;

    if (changes['pizzaProduct'] && this.pizzaProduct) {
      this.customiseableToppings = this.pizzaProduct.customiseableToppings;
    }    
  }
  
  quantitySelected(newQuantity: number) {
    this.pizzaQuantity = newQuantity;
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.toppingsFormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onCancel() {
    this.cancelled.emit();
  }

  onSubmit() {
    if (!this.pizzaProduct) return;

    const purchaseablePizzaProduct: PurchaseablePizzaProduct = {
      pizza: this.getPurchaseablePizza(this.pizzaProduct),
      quantity: this.pizzaQuantity,
      toppings: this.getSelectedPurchaseableToppings()
    }

    this.added.emit(purchaseablePizzaProduct);
  }

  private getPurchaseablePizza(pizzaProduct: PizzaProductViewModel): PurchaseableItem {
    return {
      id: pizzaProduct.id,
      name: pizzaProduct.name,
      unitPrice: pizzaProduct.price
    }
  }
  

  private getSelectedPurchaseableToppings(): PurchaseableItem[] {
    const selectedToppingIds = this.toppingsFormArray.value as string[];
    const selectedToppings = this.customiseableToppings.filter(
      (topping) => selectedToppingIds.find(id => id === topping.id)
    );
    const result = selectedToppings.map(topping => {
      const purchaseableTopping: PurchaseableItem = {
        id: topping.id,
        name: topping.name,
        unitPrice: topping.price
      }
      return purchaseableTopping;
    })

    return result;
  }

  get toppingsFormArray() {
    return this.selectedToppingsFormGroup.get('toppings') as FormArray;
  }
}

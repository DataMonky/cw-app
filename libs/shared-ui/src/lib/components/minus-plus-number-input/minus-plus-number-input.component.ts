import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cw-app-minus-plus-number-input',
  templateUrl: './minus-plus-number-input.component.html',
  styleUrls: ['./minus-plus-number-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinusPlusNumberInputComponent {
  @Input() min = 1;
  @Input() max = -1;

  @Output() selected = new EventEmitter<number>();

  quantity = 1;
  value = 1;

  faMinus = faMinus;
  faPlus = faPlus;  

  plus() {
    if (this.quantity < this.max || this.max < 0)
    {
      this.value++;
      this.quantity = this.value;
      this.selected.emit(this.quantity);
    }
  }

  minus() {
    if (this.quantity > this.min)
    {
      this.value--;
      this.quantity = this.value;
      this.selected.emit(this.quantity);
    }
  }
}

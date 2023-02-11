import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreViewModel } from '../../view-models';

@Component({
  selector: 'cw-app-store-selector',
  templateUrl: './store-selector.component.html',
  styleUrls: ['./store-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreSelectorComponent implements OnInit {
  @Input() stores: StoreViewModel[] = [];

  @Output() selected = new EventEmitter<StoreViewModel>();
  @Output() cleared = new EventEmitter<void>();

  storeSelectionForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
      this.storeSelectionForm = this.fb.group({
          store: [null, Validators.required],
      });
  }

  onChange(value: StoreViewModel) {
    if (value)
      this.selected.emit(value);
  }

  onClear() {
    this.cleared.emit();
  }
}

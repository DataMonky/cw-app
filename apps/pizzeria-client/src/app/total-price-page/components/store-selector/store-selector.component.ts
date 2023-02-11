import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NameValuePair } from '@cw-app/contacts';

@Component({
  selector: 'cw-app-store-selector',
  templateUrl: './store-selector.component.html',
  styleUrls: ['./store-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreSelectorComponent implements OnInit {
  @Input() stores: NameValuePair[] = [];
  @Output() selected = new EventEmitter<NameValuePair>();

  storeSelectionForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
      this.storeSelectionForm = this.fb.group({
          store: [null, Validators.required],
      });
  }

  onChange(value: NameValuePair) {
    if (value)
      this.selected.emit(value);
  }
}

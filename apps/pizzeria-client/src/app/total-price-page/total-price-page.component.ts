import { Component, OnInit } from '@angular/core';
import { NameValuePair } from '@cw-app/contacts';

@Component({
  selector: 'cw-app-total-price-page',
  templateUrl: './total-price-page.component.html',
  styleUrls: ['./total-price-page.component.scss'],
})
export class TotalPricePageComponent implements OnInit {
  stores: NameValuePair[] = [
    { value: '1', name: 'Preston' },
    { value: '2', name: 'Southbank' }
];

  ngOnInit() { 
    console.log('stores: ', this.stores);
  }

  onSelected(store: NameValuePair) {
    console.log('on selected: ', store);
  }
}

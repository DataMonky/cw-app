import { Component } from '@angular/core';
import { NameValuePair } from '@cw-app/contacts';
import { Observable } from 'rxjs';
import { TotalPriceService } from './services/total-price.service';

@Component({
  selector: 'cw-app-total-price-page',
  templateUrl: './total-price-page.component.html',
  styleUrls: ['./total-price-page.component.scss'],
})
export class TotalPricePageComponent {
  stores$: Observable<NameValuePair[]> = this.totalPriceService.getStores();

  constructor(private totalPriceService: TotalPriceService) {}

  onSelected(store: NameValuePair) {
    console.log('on selected: ', store);
  }
}

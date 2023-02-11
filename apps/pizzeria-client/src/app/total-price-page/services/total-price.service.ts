import { map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { StoreApiService } from '@cw-app/api';
import { NameValuePair } from '@cw-app/contacts';

@Injectable({
  providedIn: 'root',
})
export class TotalPriceService {
  constructor(private storeApiService: StoreApiService) {}

  getStores(): Observable<NameValuePair[]> {
    return this.storeApiService.getStores().pipe(
      map((storeResponses) =>
        storeResponses.map((storeResponse) => {
          const store: NameValuePair = {
            value: storeResponse.id,
            name: storeResponse.name,
          };
          return store;
        })
      )
    );
  }
}

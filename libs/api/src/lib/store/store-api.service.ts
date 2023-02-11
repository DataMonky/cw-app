// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StoreResponse } from './responses/store.response';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService {

  // constructor() { }

  getStores(): Observable<StoreResponse[]> {
    const tempStores: StoreResponse[] = [
      { id: '1', name: 'Preston' },
      { id: '2', name: 'Southbank' }
    ];
      return of(tempStores);
  }
}

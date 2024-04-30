import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeApiServiceService {

  constructor() { }
  getData(): Observable<any[]> {
    const data = [
      { id: 1, name: "vishnu" }
    ];
    return of(data);
  }

  datas = ["vishnu", "tharan", "stranger", "mufasa", "pinpulan"];

  getDatafromobser(): Observable<String[]> {
    return of(this.datas);

  }
}
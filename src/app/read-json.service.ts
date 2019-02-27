import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonService {
  constructor(private http: HttpClient) { }
  getJson(): Observable<any> {
   return this.http.get('../assets/global.json');
  }
}

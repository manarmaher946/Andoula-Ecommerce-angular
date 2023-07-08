import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor( private httpClient:HttpClient) { }

  DisplayAllOrders():Observable<any> {

    return this.httpClient.get<any>("http://localhost:5194/api/Order/Orders").pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }
}

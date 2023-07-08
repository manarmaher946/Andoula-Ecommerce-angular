import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor( private httpClient:HttpClient) { }

  ShowOrderDetails(id :any):Observable<any> {

    return this.httpClient.get<any>("http://localhost:5194/api/Order/OrderDetails/"+id).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }
}

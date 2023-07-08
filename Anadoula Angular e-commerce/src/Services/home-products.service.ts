import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeProductsService {

  constructor(private httpClient:HttpClient) { }

  ShowAllProducts():Observable<any> {

    return this.httpClient.get<any>("http://localhost:5194/api/Home/Products").pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }
}

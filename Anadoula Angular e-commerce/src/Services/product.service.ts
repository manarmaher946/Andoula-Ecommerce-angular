import { Injectable } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  constructor(private httpClient: HttpClient) { 

 
  }


  GetAllproduct():Observable<any> {

    return this.httpClient.get<any>("http://localhost:5194/api/Product/products").pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }


  Getproductofsubcategory(id: any):Observable<any> {
    return this.httpClient.get<any>(`http://localhost:5194/api/Product/Discounts/${id}`).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }

  delete(id:any):Observable<any> {
   
    
    return this.httpClient.delete<any>(`http://localhost:5194/api/Product/deleteproduct/${id}`);
  }

}
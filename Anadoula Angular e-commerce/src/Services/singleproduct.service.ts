import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError,catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleproductService {

  constructor(private http: HttpClient) {}


  GetproductbyId(id:any):Observable<any> {
    return this.http.get<any>(`http://localhost:5194/api/SingleProduct/product/${id}`).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }

  AddToCart(data:any):Observable<any> {
    const url = 'http://localhost:5194/api/Order/addproductcart';
    return this.http.post<any>(url, data);
  }
}

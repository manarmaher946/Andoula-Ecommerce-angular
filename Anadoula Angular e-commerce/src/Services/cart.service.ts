import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError,catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  constructor(private http: HttpClient) {}


  GetAllCartItemsbyID(id:any):Observable<any> {

    return this.http.get<any>("http://localhost:5194/api/Cart/CartItems/"+id).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }


  GetCountofItems(id:any):Observable<any> {

    return this.http.get<any>("http://localhost:5194/api/Cart/GetProductCount/"+id).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }

  completeOrder(UpdateAllProductCartsDTO:any){
    return this.http.put<any>("http://localhost:5194/api/Order/updateproductcart",UpdateAllProductCartsDTO).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));
  }


  delete(id:any):Observable<any> {
    console.log(`http://localhost:5194/api/Cart/Delete/${id}`);
    
    return this.http.delete<any>(`http://localhost:5194/api/Cart/Delete/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditDiscountService {

  responseData: any;
  constructor(private http:HttpClient) { }


  EditDiscount(data:FormData):Observable<any> {
    const url = `http://localhost:5194/api/Discount`;
    return this.http.put<any>(url, data);
  }
}

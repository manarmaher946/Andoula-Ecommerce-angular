import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddDiscountService {


  responseData: any;
  constructor(private http:HttpClient) { }


  postDiscount(data:FormData):Observable<any> {
    const url = 'http://localhost:5194/api/Discount';
    return this.http.post<any>(url, data);
  }
}

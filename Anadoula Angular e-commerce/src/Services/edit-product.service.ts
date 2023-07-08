import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {
  responseData: any;
  constructor(private http:HttpClient) { }


  EditProduct(data:FormData):Observable<any> {
    const url = `http://localhost:5194/api/Product/editproduct`;
    return this.http.put<any>(url, data);
  }
}

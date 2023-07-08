import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  responseData: any;
  constructor(private http:HttpClient) { }


  PostProduct(data:FormData):Observable<any> {
    const url = 'http://localhost:5194/api/Product';
    return this.http.post<any>(url, data);
  }

}

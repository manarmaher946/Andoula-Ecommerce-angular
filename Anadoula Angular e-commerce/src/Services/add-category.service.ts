import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCategoryService {


 responseData: any;
  constructor(private http:HttpClient) { }


  postCategory(data:FormData):Observable<any> {
    const url = 'http://localhost:5194/api/Category';
    return this.http.post<any>(url, data);
  }

}

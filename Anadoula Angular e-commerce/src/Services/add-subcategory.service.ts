import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddSubcategoryService {

  
 responseData: any;
 constructor(private http:HttpClient) { }


 postsubCategory(data:FormData):Observable<any> {
   const url = 'http://localhost:5194/api/SubCategory';
   return this.http.post<any>(url, data);
 }

}

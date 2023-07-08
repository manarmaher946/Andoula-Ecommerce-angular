import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddAdminService {

  responseData: any;
  constructor(private http:HttpClient) { }
  


  AddAdmin(data:any):Observable<any> {

    const headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    
    const url = 'http://localhost:5194/api/Admin/adminregister';
    return this.http.post<any>(url, data,{headers});
  }
}

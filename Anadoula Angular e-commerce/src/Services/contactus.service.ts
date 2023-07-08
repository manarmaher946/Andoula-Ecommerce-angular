import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  responseData: any;
  constructor(private http:HttpClient) { }


  postMessage(data:any):Observable<any> {
    const url = 'http://localhost:5194/api/ContactUs';
    return this.http.post<any>(url, data);
  }
}

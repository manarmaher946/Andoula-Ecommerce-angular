import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, catchError, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateorderstatusService {

  
  constructor(private http: HttpClient) {}


  changeorderstatus(obj:any):Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>('http://localhost:5194/api/Order/editorderstatusid',obj,{headers}).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

}
}

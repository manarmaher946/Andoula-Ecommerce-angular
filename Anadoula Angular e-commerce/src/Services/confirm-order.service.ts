import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/auth.service';


AuthService


@Injectable({
  providedIn: 'root'
})
export class ConfirmOrderService {

  constructor(private _HttpClient: HttpClient, private _Router: Router,private auth:AuthService) {}

  confirm(formData: FormData): Observable<any> {
    const jsonString = JSON.stringify(formData);
    console.log(jsonString);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const UserId ={"id" :this.auth.getID()};
    console.log(UserId);
    
    return this._HttpClient.post("http://localhost:5194/api/Order/completeorder" , UserId, {headers});
  }

}

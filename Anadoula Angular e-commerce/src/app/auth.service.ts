import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.saveUserData();
    }
  }

  userData = new BehaviorSubject(null);

  saveUserData() {
    let encodedUserData = JSON.stringify(localStorage.getItem('userToken'));
    this.userData.next(jwtDecode(encodedUserData));
    console.log(this.userData);
  }

  getRole(): string {
    let token: any = localStorage.getItem("userToken");
    this.currentuser = jwtDecode(token);
    var nameIdentifier = this.currentuser['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    return nameIdentifier;
  }

  getToken() {
    return localStorage.getItem("userToken");
  }


  logOut() {
    localStorage.removeItem('userToken');
    this.userData.next(null); 
    this._Router.navigate(['/login']);

  }

  register(formData: FormData): Observable<any> {
    const jsonString = JSON.stringify(formData);
    console.log(jsonString);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._HttpClient.post('http://localhost:5194/api/Account/register', jsonString , {headers});
  }
  

  login(formData: object): Observable<any> {
    return this._HttpClient.post('http://localhost:5194/api/Account/login', formData);
  }

  currentuser: any
  getID(): string {
    let token: any = localStorage.getItem("userToken");
    this.currentuser = jwtDecode(token);
    var nameIdentifier = this.currentuser['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    return nameIdentifier;

  }
  getName(): string {
    let token: any = localStorage.getItem("userToken");
    this.currentuser = jwtDecode(token);
    var nameIdentifier = this.currentuser['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    return nameIdentifier;
  }

  getِApplicationUserById(id: any): Observable<any> {
    return this._HttpClient.get('http://localhost:5292/api/Account/GetApplicationUser/' + id);
  }
}

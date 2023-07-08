import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';



@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor( private AuthService:AuthService,private Router:Router ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.AuthService.userData.getValue() !=null && this.AuthService.getRole() == "User"){
     
      return true; 
    }
    else{
      this.Router.navigate(['/login']);
      return false;
    }
    
  }
}

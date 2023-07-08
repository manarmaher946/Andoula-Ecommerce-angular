import { Component ,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {
  isLogin:boolean=false;
  constructor(private AuthService: AuthService){

  }
  ngOnInit(): void {
    
    this.AuthService.userData.subscribe(()=>{
      if(this.AuthService.userData.getValue()!=null){
        this.isLogin = true;
      }else
      {
        this.isLogin =false;
      }
    })
  
  
 
  
  
  }
  LogOut(){
    this.AuthService.logOut();
  }



}

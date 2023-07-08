import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/Services/product.service';
import { ShowSubcategoryService } from 'src/Services/show-subcategory.service';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit {


  isLogin:boolean=false;

  subcategories:any=[];
  products:any=[];

  errorMessage: any;

  
  constructor(private ShowSubcategoryService:ShowSubcategoryService ,private ProductService:ProductService,
    private AuthService:AuthService){ }

  ngOnInit(): void {
    
 
  this.ShowSubcategoryService.ShowAllSubCategory().subscribe({
    next:(data:any)=>{
      this.subcategories = data.data
    console.log(this.subcategories)

    },
    error:(error:any)=>this.errorMessage = error
  });

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

import { Component } from '@angular/core';

import { ProductService } from 'src/Services/product.service';





@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent {

  products:any=[];
  errorMessage: any;
    constructor(private ProductService:ProductService ){ }

  ngOnInit(): void {
    
 
  this.ProductService.GetAllproduct().subscribe({
    next:(data:any)=>{
      this.products = data.data
    console.log(this.products)

    },
    error:(error:any)=>this.errorMessage = error
  });

}
deleteitem( id:any){
  console.log("start function delete");
  
  this.ProductService.delete(id).subscribe({
    next: (data) => {
     
      
      this.ProductService.GetAllproduct().subscribe({
        next:(data:any)=>{
          this.products = data.data
        console.log(this.products)
    
        },
        error:(error:any)=>this.errorMessage = error
      });
    }
    })
  }





}

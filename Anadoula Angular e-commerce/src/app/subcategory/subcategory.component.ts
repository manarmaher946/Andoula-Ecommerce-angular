import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/Services/product.service';



@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {

  products :any=[]
   errorMessage: any;
  currentDate=Date.now();

  constructor(private ProductService:ProductService ,private ActivatedRoute:ActivatedRoute){}
  ngOnInit() {
    // this.ProductService.Getproductofsubcategory(1).subscribe({
    //   next: (data) => {
    //     this.products = data.data;
    //   },
    //   error: (err) => console.log('Error'),
    // });




    this.ActivatedRoute.params.subscribe((id)=>{
      this.ProductService.Getproductofsubcategory(id['id']).subscribe({
        next: (data) => {
          this.products = data.data;
          console.log(data);
        },
        error: (error) => (this.errorMessage = error),
      });     
    });

  


  //   this.ActivatedRoute.params.subscribe((id)=>{
  //   this.ProductService.Getproductofsubcategory(id['id']).subscribe({
  //     next:(data:any)=>{
  //       this.products = JSON.stringify(data.data)
  //     console.log("sub"+this.products)
  
  //     },
  //     error:(error:any)=>this.errorMessage = error
  //   });
  // });
  
    }
  
}

import { Component ,OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddDiscountService } from 'src/Services/add-discount.service';
import { ProductService } from 'src/Services/product.service';



@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.scss']
})
export class AddDiscountComponent implements OnInit {

  error:string='';
  products:any=[];
  errorMessage:any;
  productId!:number;
  productname:any;
  Id:any;
 
  constructor(private AddDiscountService:AddDiscountService ,private ProductService:ProductService 
    ,private Router:Router){}

  addDiscountform:FormGroup =new FormGroup({

    productId: new FormControl(null,[Validators.required]),
    discountStartDate: new FormControl(null,[Validators.required]),
    discountValue: new FormControl( null,[Validators.required]),
    discountEndDate:new FormControl(null,[Validators.required])
  });


  setID(event:any){
    this.productId = event.target.value;
  }

 
  submitaddDiscountform(addDiscountform:FormGroup){
     console.log(this.addDiscountform.value)
    console.log(this.addDiscountform.controls);
     
    // this.productname = this.addDiscountform.get('productId')?.value;
    // console.log(this.productname);
    // for(var item of this.products){
    //   if(item.name==this.productname)
    //   {
    //     this.Id=item.id;
    //     console.log(item.id);
      
    //     console.log(this.addDiscountform.get('productId')?.value);
    //   }
      this.addDiscountform.get('productId')?.setValue(Number(this.productId));
    // const formData = new FormData();
 
    // formData.append('StartDate', this.addDiscountform.get('discountStartDate')?.value);
    // formData.append('Value', this.addDiscountform.get('discountValue')?.value);
    // formData.append('EndDate', this.addDiscountform.get('discountEndDate')?.value);
    
    // }
    // this.addDiscountform.get('productId')?.setValue(this.Id);
    this.AddDiscountService.postDiscount(addDiscountform.value).subscribe((response)=>{
      if(response.isPassed){
        console.log(response);
        console.log("Record Added Successfully");
        this.Router.navigate(['/showdiscount']);
      }
      else {
        this.error = response.data;
    
      }
      
    })
  }

  ngOnInit(): void {
    this.ProductService.GetAllproduct().subscribe({
      next:(data:any)=>{
        this.products = data.data  
      },
      error:(error:any)=>this.errorMessage = error
    });
  }
}

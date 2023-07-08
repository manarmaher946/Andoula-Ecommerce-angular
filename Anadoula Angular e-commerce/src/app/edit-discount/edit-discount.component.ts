import { Component ,OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditDiscountService } from 'src/Services/edit-discount.service';
import { ProductService } from 'src/Services/product.service';


@Component({
  selector: 'app-edit-discount',
  templateUrl: './edit-discount.component.html',
  styleUrls: ['./edit-discount.component.scss']
})
export class EditDiscountComponent implements OnInit {
   error:string='';
  products:any=[];
  errorMessage:any;
  id:any;

  productname:any;
  ////////////////////////////////////////////
  Id:any=1;
 
  constructor(private EditDiscountService:EditDiscountService ,private ProductService:ProductService 
    ,private ActivatedRoute:ActivatedRoute ,private Router:Router){}

  addDiscountform:FormGroup =new FormGroup({
    productId: new FormControl(null),
    discountStartDate: new FormControl( null),
    discountValue: new FormControl(null),
    discountEndDate: new FormControl(null)
  });


 
  submitaddDiscountform(addDiscountform:FormGroup){
     console.log(this.addDiscountform)

     
    this.productname = this.addDiscountform.get('productId')?.value;
    console.log(this.productname);
    for(var item of this.products){
      if(item.name==this.productname)
      {
        this.Id=item.id;
        console.log(item.id);
      
        console.log(this.addDiscountform.get('productId')?.value);
      }
      this.addDiscountform.get('productId')?.setValue(this.id);
    // const formData = new FormData();
 
    // formData.append('StartDate', this.addDiscountform.get('discountStartDate')?.value);
    // formData.append('Value', this.addDiscountform.get('discountValue')?.value);
    // formData.append('EndDate', this.addDiscountform.get('discountEndDate')?.value);
    
    }
    this.EditDiscountService.EditDiscount(this.addDiscountform.value).subscribe((response)=>{
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
      console.log(this.products)
  
      },
      error:(error:any)=>this.errorMessage = error
    });

    this.ActivatedRoute.paramMap.subscribe((param)=>{
      // (parma:ParamMap)=>{
        this.id=param.get("id");
      this.EditDiscountService.EditDiscount(this.id).subscribe({
        next: (data) => {
          this.products = data.data;
          console.log(data);
        },
        error: (error) => (this.errorMessage = error),
      });     
    });
  
  }

  

}

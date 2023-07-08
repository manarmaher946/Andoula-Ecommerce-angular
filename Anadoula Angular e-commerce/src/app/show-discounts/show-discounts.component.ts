import { Component, OnInit } from '@angular/core';
import { EditDiscountService } from 'src/Services/edit-discount.service';
import { ShowDiscountsService } from 'src/Services/show-discounts.service';


@Component({
  selector: 'app-show-discounts',
  templateUrl: './show-discounts.component.html',
  styleUrls: ['./show-discounts.component.scss']
})
export class ShowDiscountsComponent  implements OnInit{

  Discounts:any=[];
  errorMessage: any;
    constructor(private ShowDiscountsService:ShowDiscountsService ,private EditDiscountService:EditDiscountService){ }

  ngOnInit(): void {
    
 
  this.ShowDiscountsService.ShowAllDiscounts().subscribe({
    next:(data:any)=>{
      this.Discounts = data.data
    console.log(this.Discounts)

    },
    error:(error:any)=>this.errorMessage = error
  });
}
deleteitem( id:any){
  console.log("start function delete");
  
  this.ShowDiscountsService.delete(id).subscribe({
    next: (data) => {
     
      
      this.ShowDiscountsService.ShowAllDiscounts().subscribe({
        next:(data:any)=>{
          this.Discounts = data.data
        console.log(this.Discounts)
    
        },
        error:(error:any)=>this.errorMessage = error
      });
    }
    })
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/Services/order-details.service';
import { UpdateorderstatusService } from '../updateorderstatus.service';



@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  
  
  details:any;
  errorMessage: any;
    constructor(private OrderDetailsService:OrderDetailsService ,private ActivatedRoute:ActivatedRoute ,
      private UpdateorderstatusService:UpdateorderstatusService){ }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((id)=>{
  this.OrderDetailsService.ShowOrderDetails(id['id']).subscribe({
    next:(data:any)=>{
      this.details = data.data
    console.log(this.details)

    },
    error:(error:any)=>this.errorMessage = error
  });
});
}
changestatus(){
  const editOrderDTO = {
    "orderId":this.details.orderId,
    "orderStatusId":4
  }
  var obj=JSON.stringify(editOrderDTO);
  this.UpdateorderstatusService.changeorderstatus(obj).subscribe({
    next:(data:any)=>{
      this.ActivatedRoute.params.subscribe((id)=>{
        this.OrderDetailsService.ShowOrderDetails(id['id']).subscribe({
          next:(data:any)=>{
            this.details = data.data
          console.log(this.details)
      
          },
          error:(error:any)=>this.errorMessage = error
        });
      });

    },
    error:(error:any)=>this.errorMessage = error
  
});
}


}


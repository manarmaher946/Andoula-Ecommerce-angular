import { Component } from '@angular/core';
import { OrderService } from 'src/Services/order.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  Orders:any=[];
  errorMessage: any;
    constructor(private OrderService:OrderService){ }

  ngOnInit(): void {
    
 
  this.OrderService.DisplayAllOrders().subscribe({
    next:(data:any)=>{
      this.Orders = data.data
    console.log(this.Orders)

    },
    error:(error:any)=>this.errorMessage = error
  });

}

}

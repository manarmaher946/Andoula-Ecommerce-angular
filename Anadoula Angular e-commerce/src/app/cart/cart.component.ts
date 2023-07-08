import { ProductCartDTO } from './../ProductCart';
import { Component } from '@angular/core';
import { CartService } from 'src/Services/cart.service';
import { AuthService } from '../auth.service';
import { UpdateDTO } from '../IupdateDTO';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  CartItems: any=[];

  errorMessage: any;
  Count:any;

  Arr:Map<string, number> = new Map<string, number>();
  updatingDTO:UpdateDTO={
    cartId: '',
    ProductCartDTOs: []
  };

  // productCartDTO:ProductCartDTO={
  //   id:1,
  //   productId:1,
  //   quantity:1,
  //   cartId:this.auth.getID()
  // }

  constructor(private auth:AuthService, private CartService:CartService ,private Router:Router){}

  ngOnInit(): void {
    this.CartService.GetAllCartItemsbyID(this.auth.getID()).subscribe({
      next: (data) => {
        this.CartItems = data.data;
        console.log(this.CartItems);
      },
      error: (error) => (this.errorMessage = error),
    });


    this.CartService.GetCountofItems(this.auth.getID()).subscribe({
      next: (data) => {
        this.Count = data;
      },
      error: (error) => (this.errorMessage = error),
    });



  }


  deleteitem( id:any){
    console.log("start function delete");

    this.CartService.delete(id).subscribe({
      next: (data) => {
        console.log(this.CartItems);
        console.log("After Success deleting");

        this.CartService.GetAllCartItemsbyID(this.auth.getID()).subscribe({
          next: (data) => {
            console.log("getting all after delete");

            console.log(data);
            this.CartItems = data.data;
          },
          error: (error) => {
            this.errorMessage = error;
            console.log("getting all after delete error");
          },
        });

        this.CartService.GetCountofItems(this.auth.getID()).subscribe({
          next: (data) => {
            this.Count = data;
            console.log("getting all count after delete");

            console.log("Number of prds: " + data);

          },
          error: (error) => {this.errorMessage = error;
            console.log("getting all count after delete error");
          },
        });
      },
      error: (error) => {this.errorMessage = error;
        console.log(error,"After Success deleting error");
      },
    });
  }

  changeQuantity(id:number,q:number)
  {
    const key = id.toString();
    this.Arr.set(key, q);
    console.log(q);
    for(let i in this.CartItems){
      if(this.CartItems[i].id == id){

        this.CartItems[i].quantity=q;
      }
    }
  }
  completeOrder(){
    if (this.Arr.size !== null && this.Arr.size !== undefined){
    console.log(this.Arr);
    for(var i=0; i<this.CartItems.length; i++){
      var firstKey= this.Arr.entries().next().value[0];
      var firstValue=this.Arr.entries().next().value[1];
      if(this.Arr.size===0){
        if(this.CartItems[i].id==firstKey)
        {
          this.CartItems[i].quantity=firstValue;
          this.Arr.delete(firstKey);
        }
      }
    }
  }

    this.updatingDTO.cartId=this.auth.getID();
    // const j =0;
    console.log("CartItems.count"+this.CartItems.length);

    console.log(this.CartItems);

    for (let ty in this.CartItems) {
      const productCartDTO: ProductCartDTO = { // Create a new instance for each iteration
        id: this.CartItems[ty].id,
        cartId: this.auth.getID(),
        quantity: this.CartItems[ty].quantity,
        productId: this.CartItems[ty].productId
      };

      console.log(productCartDTO);

      this.updatingDTO.ProductCartDTOs.push(productCartDTO);
    }
    // for(var i =0; i < this.CartItems.length;i++){
    //   this.productCartDTO.id=this.CartItems[i].id;
    //   this.productCartDTO.cartId=this.auth.getID();
    //   this.productCartDTO.quantity=this.CartItems[i].quantity;
    //   this.productCartDTO.productId=this.CartItems[i].productId;

    //   this.updatingDTO.ProductCartDTOs.push(this.productCartDTO);
    // }
    console.log(this.updatingDTO.ProductCartDTOs);

    this.CartService.completeOrder(this.updatingDTO).subscribe({
      next: (data) => {
        if(data.isPassed){
          console.log(data);
          console.log("Record Added Successfully");
          this.Router.navigate(['/confirmpayment']);
        }
        else {
          this.errorMessage = data.data;
      
        }
        
        
        console.log(data);
      },
      error: (error) => {this.errorMessage = error;
        console.log("getting all count after delete error");
      },
    });
  }

}
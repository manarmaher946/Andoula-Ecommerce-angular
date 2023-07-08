import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmOrderService } from 'src/Services/confirm-order.service';
import { AuthService } from '../auth.service';
import { CartService } from 'src/Services/cart.service';




@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent  implements OnInit{

  error: string = '';
  submitted: any = '';
  CartItems: any=[];
  
  errorMessage: any;


 confirmForm: FormGroup = new FormGroup({
    address: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    cardNumber: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    zipCode: new FormControl(null, [Validators.required]),
    expirationDate: new FormControl(null, [Validators.required]),
  });


  constructor(public _Router: Router , public _ConfirmOrderService:ConfirmOrderService, private auth:AuthService ,
     private CartService:CartService) { }

  ngOnInit(): void {

    this.CartService.GetAllCartItemsbyID(this.auth.getID()).subscribe({
      next: (data) => {
        this.CartItems = data.data;
      },
      error: (error) => (this.errorMessage = error),
    });
   }


  confirmOrderForm() {

    console.log(this.confirmForm.value)
    this.submitted = true;

    console.log(this.confirmForm.value);

    if (this.confirmForm.valid) {
      this._ConfirmOrderService.confirm(this.confirmForm.value).subscribe((response) => {
        if (response.isPassed) {
          this._Router.navigate(['/home']);
        }
        else {
          this.error = response.data;

        }

      });
    }
  }

}

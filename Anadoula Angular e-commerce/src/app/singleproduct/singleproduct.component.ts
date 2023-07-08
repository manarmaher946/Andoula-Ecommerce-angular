import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleproductService } from 'src/Services/singleproduct.service';
import { AuthService } from '../auth.service';
import { ProductCartDTO } from '../IProductCartDTO';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss'],
})
export class SingleproductComponent {
  constructor(
    private SingleproductService: SingleproductService,
    private ActivatedRoute: ActivatedRoute,
    private auth: AuthService,
    private Router: Router
  ) {}
  id: any;
  productDetails?: any;
  errorMessage: any;
  productId?: number;
  productCart?: ProductCartDTO;
  available: boolean = true;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((id) => {
      this.SingleproductService.GetproductbyId(id['id']).subscribe({
        next: (data) => {
          this.productDetails = data.data;
          console.log(this.productDetails);
          this.productCart = {
            productId: data.data.id,
            quantity: 1,
            cartId: this.auth.getID(),
          };
          console.log(data);
          console.log(this.productCart);
        },
        error: (error) => (this.errorMessage = error),
      });
    });
  }
  AddtoCart(data: any) {
    if (this.productDetails.isAvailable == true) {
      this.SingleproductService.AddToCart(this.productCart).subscribe(
        (response) => {
          if (response.isPassed) {
            console.log(response);
            console.log('Record Added Successfully');
            this.Router.navigate(['/cart']);
          } else {
            console.log(response);
          }
        }
      );
    } else {
      this.Router.navigate(['/notavailable']);
      

    }
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { InformationComponent } from './information/information.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';

import { AddCategoyComponent } from './add-categoy/add-categoy.component';
import { AddsubcategoryComponent } from './addsubcategory/addsubcategory.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShowAdminComponent } from './show-admin/show-admin.component';
import { ShowCategoriesComponent } from './show-categories/show-categories.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ShowSubcategoriesComponent } from './show-subcategories/show-subcategories.component';
import { ShowDiscountsComponent } from './show-discounts/show-discounts.component';
import { OrdersComponent } from './orders/orders.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditDiscountComponent } from './edit-discount/edit-discount.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

import { ContactsComponent } from './contacts/contacts.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { ProductNotAvailableComponent } from './product-not-available/product-not-available.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    InformationComponent,
    SingleproductComponent,
    AdminComponent,
    AddProductComponent,
  
    AddCategoyComponent,
       AddsubcategoryComponent,
       NotfoundComponent,
       ShowAdminComponent,
       ShowCategoriesComponent,
       ShowProductsComponent,
       ShowSubcategoriesComponent,
       ShowDiscountsComponent,
       OrdersComponent,
       AddDiscountComponent,
       SubcategoryComponent,
       UserNavbarComponent,
       EditProductComponent,
       EditDiscountComponent,
       OrderDetailsComponent,

       ContactsComponent,
        PaymentFormComponent,
        ProductNotAvailableComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InformationComponent } from './information/information.component';
import { AddCategoyComponent } from './add-categoy/add-categoy.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { AddsubcategoryComponent } from './addsubcategory/addsubcategory.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShowAdminComponent } from './show-admin/show-admin.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ShowCategoriesComponent } from './show-categories/show-categories.component';
import { ShowSubcategoriesComponent } from './show-subcategories/show-subcategories.component';
import { ShowDiscountsComponent } from './show-discounts/show-discounts.component';
import { OrdersComponent } from './orders/orders.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { EditDiscountComponent } from './edit-discount/edit-discount.component';
import { authGuard } from 'src/Guards/auth.guard';
import { adminAuthGuard } from 'src/Guards/admin-auth.guard';
import { ProductNotAvailableComponent } from './product-not-available/product-not-available.component';

const routes: Routes = [  
  {path:'',component:HomeComponent},
  {path:'singleproduct/:id', canActivate:[authGuard] , component:SingleproductComponent},
  {path:'cart', canActivate:[authGuard] , component:CartComponent},
  {path:'home' ,component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'information', canActivate:[authGuard] ,component:InformationComponent},
  {path:'addcat' , canActivate:[adminAuthGuard] ,component:AddCategoyComponent},
  {path:'addproduct' , canActivate:[adminAuthGuard] ,component:AddProductComponent},
  {path:'admin'  , canActivate:[adminAuthGuard] ,component:AdminComponent},
  {path:'addsubcat'  , canActivate:[adminAuthGuard] ,component:AddsubcategoryComponent},
  {path:'adddiscount'  , canActivate:[adminAuthGuard] ,component:AddDiscountComponent},
  {path:'showadmin'  , canActivate:[adminAuthGuard] ,component:ShowAdminComponent},
  {path:'showproduct'  , canActivate:[adminAuthGuard] ,component:ShowProductsComponent},
  {path:'showcat'  , canActivate:[adminAuthGuard] ,component:ShowCategoriesComponent},
  {path:'showsubcat'  , canActivate:[adminAuthGuard] ,component:ShowSubcategoriesComponent},
  {path:'showdiscount'  , canActivate:[adminAuthGuard] ,component:ShowDiscountsComponent},
  {path:'order'   , canActivate:[adminAuthGuard] ,component:OrdersComponent},
  {path:'contact' , canActivate:[authGuard] ,component:ContactusComponent},
  {path:'subcat/:id'  , canActivate:[authGuard] ,component:SubcategoryComponent},
  {path:'editproduct/:id' , canActivate:[adminAuthGuard] , component:EditProductComponent},
  {path:'orderdetails/:id', canActivate:[adminAuthGuard]  ,  component:OrderDetailsComponent},
  {path:'contacts'  , canActivate:[adminAuthGuard], component:ContactsComponent},
  {path:'confirmpayment' , canActivate:[authGuard], component:PaymentFormComponent},
  {path:'editdiscount/:id'  , canActivate:[adminAuthGuard] ,component:EditDiscountComponent},
  {path:'notavailable', canActivate:[authGuard],component:ProductNotAvailableComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

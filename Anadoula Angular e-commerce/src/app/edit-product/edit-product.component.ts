import { Component ,OnInit} from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditProductService } from 'src/Services/edit-product.service';

import { ShowSubcategoryService } from 'src/Services/show-subcategory.service';




@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  isavailable: boolean = true;
  isnotavailable: boolean = false;
  id:any;
  subcategories:any=[];
  products:any=[];
  errorMessage:any;
  selectedFile!:File;
  constructor(private EditProductService:EditProductService ,private ShowSubcategoryService:ShowSubcategoryService,
     private ActivatedRoute:ActivatedRoute ,private Router:Router){}

  addproductform:FormGroup =new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    imagePath: new FormControl( null),
    price: new FormControl(null),
    isavailable:new FormControl(null),
    description: new FormControl(null),
    subCategoryId:new FormControl(null)
    


  });
  productname:any;
  subcatId:any;

  selectImage(event:any){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    
  }

  submitaddproductform(addproductform:FormGroup){
      console.log(addproductform);

    // this.productname = this.addproductform.get('subCategoryId')?.value;
    // console.log(this.productname);
    // console.log(this.addproductform);
    const formData = new FormData();
    // for(var item of this.subcategories){
      // if(item.name==this.productname)
      // {
      //   this.subcatId=item.id;
      //   console.log(item.id);
      
        // console.log(this.addproductform.get('subCategoryId')?.value);
      // }
      // this.addproductform.get('subCategoryId')?.setValue(this.subcatId);
      // console.log("SUB: "+ this.subcatId);
      
    this.addproductform.get('id')?.setValue(this.id);


    
  
    formData.append('id',this.addproductform.get('id')?.value);
    formData.append('name', this.addproductform.get('name')?.value);
    formData.append('price', this.addproductform.get('price')?.value);
    formData.append('isavailable', this.addproductform.get('isavailable')?.value);
    formData.append('description', this.addproductform.get('description')?.value);
    formData.append('subCategoryId', this.addproductform.controls['subCategoryId'].value);
    formData.append('file', this.selectedFile, this.selectedFile.name);

    
    console.log(this.addproductform.value);
  // }

    this.addproductform.get('subCategoryId')?.setValue(this.subcatId);
    this.EditProductService.EditProduct(formData).subscribe((response)=>{
      if(response.isPassed){
        console.log(response);
        console.log("Record Added Successfully");
        this.Router.navigate(['/showproduct']);
      }
      else {
        this.errorMessage = response.data;
    
      }
      
    })
  }
  ngOnInit(): void {
    this.ShowSubcategoryService.ShowAllSubCategory().subscribe({
      next:(data:any)=>{
        this.subcategories = data.data
      console.log(this.subcategories)
  
      },
      error:(error:any)=>this.errorMessage = error
    });
    

     this.ActivatedRoute.paramMap.subscribe((param)=>{
      // (parma:ParamMap)=>{
        this.id=param.get("id");
      this.EditProductService.EditProduct(this.id).subscribe({
        next: (data) => {
          this.products = data.data;
          
          console.log(data);
        },
        error: (error) => (this.errorMessage = error),
      });     
    });
  
  }



}

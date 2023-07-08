import { Component ,OnInit} from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddProductService } from 'src/Services/add-product.service';
import { ShowSubcategoryService } from 'src/Services/show-subcategory.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
  isavailable: boolean = true;
  isnotavailable: boolean = false;
  error:string='';
  subcategories:any=[];
  errorMessage:any;
  selectedFile!:File;
  constructor(private AddProductService:AddProductService ,private ShowSubcategoryService:ShowSubcategoryService,
     private Router:Router){}
    

  addproductform:FormGroup =new FormGroup({
 
    name: new FormControl(null,[Validators.required]),
    imagePath: new FormControl( null,[Validators.required]),
    price: new FormControl(null,[Validators.required]),
    isAvailable:new FormControl(null),
    description: new FormControl(null,[Validators.required]),
    subCategoryId:new FormControl(null,[Validators.required])

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
      
   

    
  
 
    formData.append('name', this.addproductform.get('name')?.value);
    formData.append('price', this.addproductform.get('price')?.value);
    formData.append('isAvailable', this.addproductform.get('isAvailable')?.value);
    formData.append('description', this.addproductform.get('description')?.value);
    formData.append('subCategoryId', this.addproductform.controls['subCategoryId'].value);
    formData.append('file', this.selectedFile, this.selectedFile.name);

    
    console.log(this.addproductform.value);
  // }

    this.addproductform.get('subCategoryId')?.setValue(this.subcatId);
    this.AddProductService.PostProduct(formData).subscribe((response)=>{
      if(response.isPassed){
        console.log(response);
        console.log("Record Added Successfully");
        this.Router.navigate(['/showproduct']);
      }
      else {
        this.error = response.data;
    
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
  
  }
  


  }

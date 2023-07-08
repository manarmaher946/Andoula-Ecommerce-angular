import { Component,OnInit} from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddSubcategoryService } from 'src/Services/add-subcategory.service';
import { ShowCategoryService } from 'src/Services/show-category.service';



@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.scss']
})
export class AddsubcategoryComponent implements OnInit {
   error:string='';
  categories:any=[];
  errorMessage:any;

  selectedFile!:File;
  constructor(private AddSubcategoryService:AddSubcategoryService , private ShowCategoryService:ShowCategoryService ,
    private Router:Router){}

  addsubcategoryform:FormGroup =new FormGroup({
 
    name: new FormControl(null,[Validators.required]),
    imagePath: new FormControl( null,[Validators.required]),
    categoryId: new FormControl(null,[Validators.required])
  });
  // name:any;
  // catId:any;

  
  selectImage(event:any){
    this.selectedFile = event.target.files[0];
  
  }

  submitaddsubcategoryform(addsubcategoryform:FormGroup){
     console.log(this.addsubcategoryform)
    const formData = new FormData();
 
   
    // this.name = this.addsubcategoryform.get('categoryId')?.value;
    // console.log(this.name);
    // for(var item of this.categories){
    //   if(item.name==this.name)
    //   {
    //     this.catId=item.id;
    //     console.log(item.id);
      
    //     console.log(this.addsubcategoryform.get('categoryId')?.value);
    //   }
      // this.addsubcategoryform.get('categoryId')?.setValue(this.catId);
      formData.append('Name', this.addsubcategoryform.get('name')?.value);
      formData.append('File', this.selectedFile, this.selectedFile.name);
      formData.append('CategoryId', this.addsubcategoryform.controls['categoryId'].value);

   
      console.log(this.addsubcategoryform.value);
    
  
   // }
   
// console.log(this.catId);
//     this.addsubcategoryform.get('categoryId')?.setValue(this.catId);
    console.log(formData)
    this.AddSubcategoryService.postsubCategory(formData).subscribe((response)=>{
      if(response.isPassed){
        console.log(response);
        console.log("Record Added Successfully");
        this.Router.navigate(['/showsubcat']);
      }
      else {
        this.error = response.data;
    
      }
      
    })
  }
  
  
  ngOnInit(): void {


 


    this.ShowCategoryService.ShowAllCategory().subscribe({
      next:(data:any)=>{
        this.categories = data.data
      console.log(this.categories)
      
  
      },
      error:(error:any)=>this.errorMessage = error
    });
    
   
  
   
  }


}

import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AddCategoryService } from 'src/Services/add-category.service';

@Component({
  selector: 'app-add-categoy',
  templateUrl: './add-categoy.component.html',
  styleUrls: ['./add-categoy.component.scss']
})
export class AddCategoyComponent {
  error: string = '';

  selectedFile!:File;
  constructor(private _AddCategoryService:AddCategoryService , private Router:Router){}

  addcategoryform:FormGroup =new FormGroup({
 
    name: new FormControl(null,[Validators.required]),
    imagePath: new FormControl( null,[Validators.required])
  });

  selectImage(event:any){
    this.selectedFile = event.target.files[0];
  }

  submitaddcategoryform(addcategoryform:FormGroup){
     console.log(this.addcategoryform)
    const formData = new FormData();
 
    formData.append('Name', this.addcategoryform.get('name')?.value);
    formData.append('File', this.selectedFile, this.selectedFile.name);

    this._AddCategoryService.postCategory(formData).subscribe((response)=>{
      if(response.isPassed){
        console.log(response);
        console.log("Record Added Successfully");
        this.Router.navigate(['/showcat']);
      }
      else {
        this.error = response.data;
    
      }
    })
  }

  }

 

  


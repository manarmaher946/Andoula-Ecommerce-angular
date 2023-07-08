import { Component ,OnInit } from '@angular/core';
import { ShowSubcategoryService } from 'src/Services/show-subcategory.service';


@Component({
  selector: 'app-show-subcategories',
  templateUrl: './show-subcategories.component.html',
  styleUrls: ['./show-subcategories.component.scss']
})
export class ShowSubcategoriesComponent implements OnInit{
  subcategories:any=[];
  errorMessage: any;
    constructor(private ShowSubcategoryService:ShowSubcategoryService){ }

  ngOnInit(): void {
    
 
  this.ShowSubcategoryService.ShowAllSubCategory().subscribe({
    next:(data:any)=>{
      this.subcategories = data.data
    console.log(this.subcategories)

    },
    error:(error:any)=>this.errorMessage = error
  });

}
deleteitem( id:any){
  console.log("start function delete");
  
  this.ShowSubcategoryService.delete(id).subscribe({
    next: (data) => {
     
      
      this.ShowSubcategoryService.ShowAllSubCategory().subscribe({
        next:(data:any)=>{
          this.subcategories = data.data
        console.log(this.subcategories)
    
        },
        error:(error:any)=>this.errorMessage = error
      });
    }
    })
  }


}

import { Component,OnInit } from '@angular/core';
import { ShowCategoryService } from 'src/Services/show-category.service';


@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrls: ['./show-categories.component.scss']
})
export class ShowCategoriesComponent implements OnInit {

  categories:any=[];
  errorMessage: any;
    constructor(private ShowCategoryService:ShowCategoryService){ }

  ngOnInit(): void {
    
 
  this.ShowCategoryService.ShowAllCategory().subscribe({
    next:(data:any)=>{
      this.categories = data.data
    console.log(this.categories)

    },
    error:(error:any)=>this.errorMessage = error
  });

}
deleteitem( id:any){
  console.log("start function delete");
  
  this.ShowCategoryService.delete(id).subscribe({
    next: (data) => {
     
      
      this.ShowCategoryService.ShowAllCategory().subscribe({
        next:(data:any)=>{
          this.categories = data.data
        console.log(this.categories)
    
        },
        error:(error:any)=>this.errorMessage = error
      });
    }
    })
  }

}



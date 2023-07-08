import { Component } from '@angular/core';
import { AdminsService } from 'src/Services/admins.service';

@Component({
  selector: 'app-show-admin',
  templateUrl: './show-admin.component.html',
  styleUrls: ['./show-admin.component.scss']
})
export class ShowAdminComponent {
  Admins:any=[];
  errorMessage: any;
    constructor(private AdminsService:AdminsService){ }

  ngOnInit(): void {
    
 
  this.AdminsService.DisplayAllAdmins().subscribe({
    next:(data:any)=>{
      this.Admins = data.data
    console.log(this.Admins)

    },
    error:(error:any)=>this.errorMessage = error
  });

}

}

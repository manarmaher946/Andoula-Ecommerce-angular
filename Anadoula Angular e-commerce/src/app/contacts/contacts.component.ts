import { Component } from '@angular/core';
import { ContactsService } from 'src/Services/contacts.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  Messages:any=[];
  errorMessage: any;
    constructor(private ContactsService:ContactsService){ }

  ngOnInit(): void {
    
 
  this.ContactsService.GetallMessages().subscribe({
    next:(data:any)=>{
      this.Messages = data.data
    console.log(this.Messages)

    },
    error:(error:any)=>this.errorMessage = error
  });
  }

  deleteMessage( id:any){
    console.log("start function delete");
    
    this.ContactsService.delete(id).subscribe({
      next: (data) => {
       
        
        this.ContactsService.GetallMessages().subscribe({
          next:(data:any)=>{
            this.Messages = data.data
          console.log(this.Messages)
      
          },
          error:(error:any)=>this.errorMessage = error
        });
      }
      })
    }



}

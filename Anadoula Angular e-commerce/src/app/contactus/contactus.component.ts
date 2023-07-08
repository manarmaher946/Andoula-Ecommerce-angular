import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { ContactusService } from 'src/Services/contactus.service';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  error:string='';
  constructor(private ContactusService:ContactusService , private Router:Router){}

  ContactUsform:FormGroup =new FormGroup({
 
    name: new FormControl(null),
    email: new FormControl( null),
    message: new FormControl(null)
  });


  submitContactUsform(ContactUsform:FormGroup){
     console.log(ContactUsform)


    this.ContactusService.postMessage(ContactUsform.value).subscribe((response)=>{
      if(response.isPassed){
        console.log(response);
        console.log("Record Added Successfully");
        this.Router.navigate(['/home']);
      }
      else {
        this.error = response.data;
    
      }
      
    })
  }


}

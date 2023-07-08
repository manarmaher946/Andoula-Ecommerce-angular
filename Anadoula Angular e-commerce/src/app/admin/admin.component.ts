import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { AddAdminService } from 'src/Services/add-admin.service';
import { AdminsService } from 'src/Services/admins.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  error: string = '';
  submitted: any = '';
  male: boolean = true;
  female: boolean = false;

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    phoneNumber: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$')]),
    birthDate: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    userName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),


  });

  constructor(private Admin: AddAdminService, public _Router: Router) { }

  ngOnInit(): void { }


  submitRegisterForm() {

    console.log(this.registerForm.value)
    this.submitted = true;

    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      this.Admin.AddAdmin(this.registerForm.value).subscribe((response) => {
        if (response.isPassed) {
          this._Router.navigate(['/showadmin']);
        }
        else {
          this.error = response.data;

        }

      });
    }
  }


 
 
}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
    // address: new FormControl(null, [Validators.required]),

  });

  constructor(public _AuthService: AuthService, public _Router: Router) { }

  ngOnInit(): void { }


  submitRegisterForm() {

    console.log(this.registerForm.value)
    this.submitted = true;

    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      this._AuthService.register(this.registerForm.value).subscribe((response) => {
        if (response.isPassed) {
          this._Router.navigate(['/login']);
        }
        else {
          this.error = response.data;

        }

      });
    }
  }


  // welcome()
  // {

  //   this._Router.navigate(['/login']);
  // }

}

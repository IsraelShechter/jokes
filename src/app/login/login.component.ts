import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { LoginDto } from '../model/loginDTO';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  get email() {return this.loginForm.get('email')};
  get password() {return this.loginForm.get('password')};
  isLoginErr = false;

  constructor(private sharedService: SharedService, private dataService: DataService,
    private fb: FormBuilder) {
  }


  onSubmit() {
    this.isLoginErr = false;
    if (this.loginForm.valid) {

      this.dataService.login(new LoginDto(this.email?.value, this.password?.value)).subscribe(res => {
        if (res) {

          this.sharedService.isLoggedIn = true;
        } else {
          this.isLoginErr = true;
        }
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export interface Login {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {}

  onLogin(){
    if(!this.auth.checkAuth()) {
      console.trace("inLogin")
      this.auth.checkCredentials({username: this.loginForm.get(['username'])?.value, password : this.loginForm.get(['password'])?.value})
      .subscribe(() => {
      
          this.auth.setToken();
          this.router.navigate(['/dashboard']);
        
      }, (error)=> {
        alert("Login failed");
      });
    }
  }
}

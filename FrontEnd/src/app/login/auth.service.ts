import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from './login.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  checkAuth() {
    if (sessionStorage.getItem('token')) return true;
    else return false;
  }

  setToken() {
    if (!sessionStorage.getItem('token')) {
      sessionStorage.setItem('token', 'loggendIn');
    }
  }

  checkCredentials(creds: Login) {
    return this.http.post(environment.baseURL + 'login', creds);
  }
}

import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { AuthService } from './login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if(this.authService.checkAuth())
        return true;
      else
        this.router.navigate(['login']);
      return false;
  }
  
}

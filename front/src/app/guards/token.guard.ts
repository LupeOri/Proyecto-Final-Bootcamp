import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class TokenGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (this.authService.isAuthenticate()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  } 

}

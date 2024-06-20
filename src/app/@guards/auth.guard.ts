import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard   {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   
    const currentUser = this.authenticationService.currentUserValue;
   
    if (currentUser) {
        this.authenticationService.token = currentUser.token;
        this.authenticationService.isAuth$.next(true);
        return true;
    }
    this.router.navigate(['/login-page'], { queryParams: { returnUrl: state.url }});
    return false;
}
  
}

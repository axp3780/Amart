import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private authService:AuthService, private router:Router) { }
  
  canActivate(routes: any, state: RouterStateSnapshot){
   

    return this.authService.user$.pipe(map(user => {
      if (user) return true;
  
      this.router.navigate(['/login'], {queryParams:{ returnUrl:state.url }});
      return false;
    }));
  }

}
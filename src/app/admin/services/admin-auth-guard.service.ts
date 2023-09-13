import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth:AuthService) { }


  canActivate(): Observable<boolean>{
    return this.auth.appUser$.pipe(
    map((appUser:AppUser |null)   =>appUser? appUser.isAdmin:false));
    
  }
}

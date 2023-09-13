import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider} from '@angular/fire/auth';
import { Observable, of, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'shared/services/user.service';
import { AppUser } from 'shared/models/app-user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private route:ActivatedRoute, private router:Router, private userService:UserService) { 
    this.user$ = this.afAuth.authState;
  }


//this is to login with google provider using angular/fire
  loginWithGoogle(){
    let returnUrl = this.route.snapshot.queryParamMap.get('retutnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl)
    this.afAuth.signInWithPopup(new GoogleAuthProvider).then((result) => {
      if (result.user){
        this.userService.save(result.user);
      }
      // After logging in, get the returnUrl and navigate to it
      //let returnUrl = localStorage.getItem('returnUrl');
      console.log(returnUrl);
      if (returnUrl) this.router.navigateByUrl(returnUrl);
    });
  }

//this is to logout using AngularFireAuth
  logout(){
    this.afAuth.signOut();
    this.router.navigate(['/']);
  }

  get appUser$(): Observable<AppUser |null >{
    return this.user$.pipe(switchMap(user => user? this.userService.get(user.uid).valueChanges(): of(null)));
  }


}

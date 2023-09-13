import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/compat/database'
import { AppUser } from 'shared/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private database: AngularFireDatabase) { }

  save(user:any){
    this.database.object('/users/'+user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }

  get(uid:string):AngularFireObject<AppUser>{
    return this.database.object('/users/'+ uid);
  }
}

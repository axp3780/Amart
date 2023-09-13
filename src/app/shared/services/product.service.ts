import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product:any){
    this.db.list('/products').push(product);
  }
  getAll() {
    return this.db.list('/products').snapshotChanges()
    .pipe(
      map(changes => 
        changes.map(c => ({ 
          key:c.payload.key as string, 
          ...c.payload.val() as { title: string },
          ...c.payload.val() as {price :number},
          ...c.payload.val() as {category :string},
          ...c.payload.val() as {imageUrl:string},
        }))
      )
    );
}


  get(productId:any){
    return this.db.object('/products/'+productId).snapshotChanges();
  }

  update(productId:any, product:any){
    this.db.object('/products/'+productId).update(product);
  }
  delete(productId:any){
    this.db.object('/products/'+productId).remove();

  }

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService ) { }


  async placeOrder(order:any ){
    let result =  this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrdersForAdmin(){
    return this.db.list('/orders')
  }

  // getOrdersByUser(userId: string) {
  //   return this.db.list('/orders', ref => ref.orderByChild('userId').equalTo(userId)).valueChanges();
  // }


  getOrdersByUser(userId: string): Observable<any[]> {
    return this.db.list('/orders', ref => ref.orderByChild('userId').equalTo(userId)).snapshotChanges().pipe(
        map(changes => 
            changes.map(c => ({ 
                key: c.payload.key, 
                ...c.payload.val() as object 
            }))
        )
    );
}



}

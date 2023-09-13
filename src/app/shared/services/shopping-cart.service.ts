import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Product } from 'shared/models/product';
import { map, take } from 'rxjs/operators';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ShoppingCartService {

  constructor( private db:AngularFireDatabase) { }


  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    if (!cartId) return new Observable(observer => observer.next(new ShoppingCart({})));
    return this.db.object('/shopping-carts/' + cartId).valueChanges().pipe(
        map((cart: any) => new ShoppingCart(cart?.items || {}))
    );
  }

  async clearCart(){
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  async addToCart(product: Product) {
    this.updateItem(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItem(product,-1)
  }






  private async create(){
    try {
        const result = await this.db.list('/shopping-carts/').push({
          dateCreated: new Date().getTime()
        });
        return result;
    } catch (error) {
        console.error("Error creating a new cart:", error);
        throw error;
    }
  }

  private getItem(cartId:string, productId:string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }
    

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');

    if (cartId) return cartId;

    let result = await this.create();
    if (result.key) {
        localStorage.setItem('cartId', result.key);
        return result.key;
    } else {
        console.error("Failed to get cart key from Firebase.");
        throw new Error("Failed to get cart key from Firebase.");
    }
  }

  async updateItem(product: Product,change:number){
    let cartId = await this.getOrCreateCartId();
    
    let item$ = this.getItem(cartId,product.key);
    item$.valueChanges().pipe(take(1)).subscribe((item:any) =>{
      let updatedQunatity = (item? item.quantity :0 )+ change;
      if (updatedQunatity <=0) item$.remove();
      else{
        item$.update({
          title:product.title,
          imageUrl:product.imageUrl,
          price:product.price,
          quantity: updatedQunatity
        });
      }
      
    });
  }
}

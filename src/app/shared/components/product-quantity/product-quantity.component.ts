import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit{

  @Input ('product') product! :Product;
  @Input ('shopping-cart') shoppingCart?: ShoppingCart;
  quantity:number =0;
  originalQuantity: number =0;
  

  constructor(
    private cartService: ShoppingCartService) {
      
     }

     ngOnInit(): void {
      if (this.shoppingCart){
      this.quantity= this.shoppingCart.getQuantity(this.product);
      this.originalQuantity =this.quantity;
      }
     }


    removeFromCart(){
      this.cartService.removeFromCart(this.product);
    }

    addToCart(){
      if(!this.product) {
        console.warn("Product is not defined!");
        return;
      }
      this.cartService.addToCart(this.product);
    }

    quantityChanged(){
      this.updateCart()
      this.originalQuantity=this.quantity;
    }

    updateCart(){
      const diffrence = this.quantity - this.originalQuantity;
      this.cartService.updateItem(this.product, diffrence);
      
    }


}

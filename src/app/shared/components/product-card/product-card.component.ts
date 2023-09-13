import { Component, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input ('product') product! :Product;
  @Input ('show-actions') showActions =true;
  @Input ('shopping-cart') shoppingCart: any;

  constructor( private cartService: ShoppingCartService ) { }

  addToCart(){
    this.cartService.addToCart(this.product);
  }
  
 


}

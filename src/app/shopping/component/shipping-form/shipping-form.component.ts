import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ShippingInfo } from 'shared/models/shippingInfo';
import { Subscription } from 'rxjs';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { Order } from 'shared/models/order';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input ('cart') cart?: ShoppingCart;

  shipping : ShippingInfo= {
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
  }; 
  subscription: Subscription = new Subscription;
  userId:string =''; 

  constructor(  private orderService: OrderService , private authService: AuthService, private router: Router){}

  ngOnInit(){
    this.subscription = this.authService.user$.subscribe(user=> this.userId = user.uid );
  }


  async placeOrder(){
    if (this.cart){ 
      let order = new Order(this.userId, this.shipping, this.cart); 
      let result = await this.orderService.placeOrder(order);
      this.router.navigate(['/order-success', result.key]);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

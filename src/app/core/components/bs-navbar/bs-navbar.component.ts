import { Component, OnInit } from '@angular/core';
import { AppUser } from 'shared/models/app-user';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs';
import { AuthService } from 'shared/services/auth.service';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{
  appUser: AppUser| null =null;
  shoppingCartItemCount: number = 0;
  cart$: Observable<ShoppingCart> = new Observable();


  constructor(private authService: AuthService , private shoppingCartService: ShoppingCartService){ }

  async ngOnInit() {
    this.authService.appUser$.subscribe(appUser=>this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
  }


  logout(){
    this.authService.logout();
  }

}

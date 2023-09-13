import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';
import { ProductFilterComponent } from './component/products/product-filter/product-filter.component';
import { ProductsComponent } from './component/products/products.component';
import { ShippingFormComponent } from './component/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './component/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        ShoppingCartComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        ProductsComponent,
        ProductFilterComponent,
        ShoppingCartSummaryComponent,
        ShippingFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule,
        SharedModule
    ]
})
export class ShoppingModule { }

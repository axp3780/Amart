import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuardService } from 'app/admin/services/admin-auth-guard.service';
import { AuthGaurdService } from 'shared/services/auth-gaurd.service';

import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { LoginComponent } from './core/components/login/login.component';
import { CheckOutComponent } from './shopping/component/check-out/check-out.component';
import { MyOrdersComponent } from './shopping/component/my-orders/my-orders.component';
import { OrderSuccessComponent } from './shopping/component/order-success/order-success.component';
import { ProductsComponent } from './shopping/component/products/products.component';
import { ShoppingCartComponent } from './shopping/component/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'',component:ProductsComponent },
  {path:'login' , component:LoginComponent},
  {path:'products',component:ProductsComponent },
  {path:'shopping-cart',component:ShoppingCartComponent},
  {path:'check-out',component:CheckOutComponent, canActivate:[AuthGaurdService] },
  {path:'order-success/:id',component: OrderSuccessComponent, canActivate:[AuthGaurdService]},
  {path:'my/orders',component: MyOrdersComponent, canActivate:[AuthGaurdService]},
  
  {path:'admin/products/new',component: ProductFormComponent , canActivate:[AuthGaurdService, AdminAuthGuardService]},
  {path:'admin/products/:id',component: ProductFormComponent , canActivate:[AuthGaurdService, AdminAuthGuardService]},
  {path:'admin/products',component: AdminProductsComponent , canActivate:[AuthGaurdService, AdminAuthGuardService]},
  {path:'admin/orders',component: AdminOrdersComponent, canActivate:[AuthGaurdService, AdminAuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

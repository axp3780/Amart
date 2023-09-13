import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from 'app/app-routing.module';



@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTablesModule,
    AppRoutingModule
  ],
  providers:[
    AdminAuthGuardService
  ]
})
export class AdminModule { }

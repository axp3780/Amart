import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';


import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './shopping/component/check-out/check-out.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './shopping/component/my-orders/my-orders.component';
import { OrderSuccessComponent } from './shopping/component/order-success/order-success.component';
import { ProductFilterComponent } from './shopping/component/products/product-filter/product-filter.component';
import { ProductsComponent } from './shopping/component/products/products.component';
import { ShippingFormComponent } from './shopping/component/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping/component/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './shopping/component/shopping-cart/shopping-cart.component';
import { SharedModule } from 'shared/shared.module';
import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomepageComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    LoginComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    FormsModule,
    DataTablesModule,

    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

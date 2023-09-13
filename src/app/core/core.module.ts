import { NgModule } from '@angular/core';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { SharedModule } from 'shared/shared.module';



@NgModule({
  declarations: [
    BsNavbarComponent,
    HomepageComponent,
    LoginComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    BsNavbarComponent
  ]
})
export class CoreModule { }

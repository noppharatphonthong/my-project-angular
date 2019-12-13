import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomePageComponent,
    LoginPageComponent,
    Page1Component,
    Page2Component,
    Page3Component,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports:[
    HomePageComponent,
    LoginPageComponent,
    Page1Component,
    Page2Component,
    Page3Component,
  ]
})
export class PagesModule { }

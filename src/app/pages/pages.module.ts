import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { ComponentPageComponent } from './component-page/component-page.component';
import { ButtonPageComponent } from './component-page/button-page/button-page.component';
import { ComponentModule } from '../component/component.module';
import { FormPageComponent } from './component-page/form-page/form-page.component';
import { StudentsComponent } from './component-page/students/students.component';
import { CostomMaxLength } from '../component/form/validator/CostomMaxLength';
import { CostomMinLength } from '../component/form/validator/CostomMinLength';

@NgModule({
  declarations: [
    CostomMaxLength,
    CostomMinLength,
    HomePageComponent,
    LoginPageComponent,
    ComponentPageComponent,
    ButtonPageComponent,
    FormPageComponent,

    Page1Component,
    Page2Component,
    Page3Component,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  exports:[
    HomePageComponent,
    LoginPageComponent,
    ComponentPageComponent,
    ButtonPageComponent,
    FormPageComponent,

    Page1Component,
    Page2Component,
    Page3Component
  ]
})
export class PagesModule { }

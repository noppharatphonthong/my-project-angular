import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { DefaultLayoutRoutingModule } from './default-layout-routing.module';

// Comment
import { DefaultLayoutComponent } from './default-layout.component';
import { NavbarCostomComponent } from './navbar-costom/navbar-costom.component';
import { SidebarCuttomComponent } from './sidebar-cuttom/sidebar-cuttom.component';



@NgModule({
  declarations: [
    DefaultLayoutComponent,
    NavbarCostomComponent,
    SidebarCuttomComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DefaultLayoutRoutingModule
  ],
  exports:[
    DefaultLayoutComponent,
    NavbarCostomComponent,
    SidebarCuttomComponent,
    DefaultLayoutRoutingModule
  ]
})
export class DefaultLayoutModule { }

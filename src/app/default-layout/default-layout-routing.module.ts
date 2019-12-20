import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ButtonPageComponent } from '../pages/component-page/button-page/button-page.component';
import { Page1Component } from '../pages/page1/page1.component';
import { Page2Component } from '../pages/page2/page2.component';
import { Page3Component } from '../pages/page3/page3.component';
import { FormPageComponent } from '../pages/component-page/form-page/form-page.component';


const routes: Routes = [
  {
    path: 'pages',
    component: DefaultLayoutComponent,
    children: [
      { path: '',redirectTo: '/home',pathMatch: 'full'},
      { path: 'home', component: HomePageComponent }, 
      { path: 'component/button', component: ButtonPageComponent }, 
      { path: 'component/form', component:FormPageComponent }, 
      { path: 'page1', component: Page1Component }, 
      { path: 'page2', component: Page2Component },
      { path: 'page3', component: Page3Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultLayoutRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';


const routes: Routes = [
  { path: '',redirectTo: '/login',pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent }, 
  { path: 'pages', component: DefaultLayoutComponent }, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

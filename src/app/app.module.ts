import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Module
import { AppBootstrapModule } from './app-bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { DefaultLayoutModule } from './default-layout/default-layout.module';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppRoutingModule,
    DefaultLayoutModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

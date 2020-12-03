import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './products/list-products.component';
import { CartComponent } from './cart/cart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateProductComponent } from './products/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    CartComponent,
    WelcomeComponent,
    CreateProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

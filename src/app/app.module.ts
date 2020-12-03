import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMenuItemsComponent } from './products/list-menu-items.component';
import { CartComponent } from './cart/cart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateMenuProductComponent } from './products/create-menu-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMenuItemsComponent,
    CartComponent,
    WelcomeComponent,
    CreateMenuProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

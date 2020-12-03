import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ListProductsComponent } from './products/list-products.component';
import { CreateProductComponent } from './products/create-product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'list', component: ListProductsComponent },
  { path: 'create', component: CreateProductComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

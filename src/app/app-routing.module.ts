import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ListMenuItemsComponent } from './menuItems/list-menu-items.component';
import { CreateMenuProductComponent } from './menuItems/create-menu-product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'list', component: ListMenuItemsComponent },
  { path: 'create', component: CreateMenuProductComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMenuItemsComponent } from './menuItems/list-menu-items.component';

const routes: Routes = [{ path: 'list', component: ListMenuItemsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

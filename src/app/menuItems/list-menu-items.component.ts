import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../model/menuItem.model';
import { MenuItemService } from '../../app/services/menu-item.service';

@Component({
  //selector: 'app-list-menu-items',
  templateUrl: './list-menu-items.component.html',
  styleUrls: ['./list-menu-items.component.css'],
})
export class ListMenuItemsComponent implements OnInit {
  menuItems?: MenuItem[];

  constructor(private service: MenuItemService) {}

  ngOnInit(): void {
    this.menuItems = this.service.getMenuItems();
  }
}

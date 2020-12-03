import { Injectable } from '@angular/core';
import { MenuItem } from '../model/menuItem.model';

@Injectable({
  providedIn: 'root',
})
export class MenuItemService {
  private menuItems: MenuItem[] = [];

  constructor() {
    this.menuItems = [
      {
        id: 1,
        name: 'Aftershave',
        price: 45.15,
        photoPath: 'assets/images/aftershave.jpg',
      },
      {
        id: 2,
        name: 'Headphones',
        price: 110.0,
        photoPath: 'assets/images/headphones.jpg',
      },
      {
        id: 3,
        name: 'Laptop',
        price: 2220.99,
        photoPath: 'assets/images/laptop.jpg',
      },
    ];
  }

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  getMenuItem(id: number): MenuItem {
    return this.menuItems[id];
  }
}

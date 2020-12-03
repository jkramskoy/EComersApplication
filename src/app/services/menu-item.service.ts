import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class MenuItemService {
  private menuItems: Product[] = [];

  constructor() {
    this.menuItems = [
      {
        id: 1,
        name: 'Aftershave',
        price: 45.15,
        photoPath: 'assets/images/aftershave.jpg',
        description:
          'Adidas, famous for its sports wear reaches the height of success with its line of fragrances for men, good not only for sports but also great for casual everyday wear. Adidas Dynamic Pulse is sporty, fun and races your pulse with the high energy that it brings in with aromatic notes from apple, grapefruit, mandarin, mango, flowers, cedar and mint leaves with patchouli, sandalwood and musk. Wear it for a casual date with your loved one or wear it to the gym and proudly stand out in the crowd.',
      },
      {
        id: 2,
        name: 'Headphones',
        price: 110.0,
        photoPath: 'assets/images/headphones.jpg',
        description:
          'Beats Studio3 Wireless headphones deliver a premium listening experience with Pure Active Noise Cancelling (Pure ANC). Beats’ Pure ANC actively blocks external noise and uses real-time audio calibration to preserve clarity, range and emotion. ',
      },
      {
        id: 3,
        name: 'Laptop',
        price: 2220.99,
        photoPath: 'assets/images/laptop.jpg',
        description:
          'Surface Laptop 3 fuels your ideas and reflects your style with a thin, light design, choice of colors,1 2 keyboard finishes, and 2 sizes – a vibrant 13.5” or 15” touchscreen.',
      },
    ];
  }

  getMenuItems(): Product[] {
    return this.menuItems;
  }

  getMenuItem(id: number): Product {
    return this.menuItems[id];
  }
}

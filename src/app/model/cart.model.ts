import { MenuItem } from './menuItem.model';

export class Cart {
  id?: number;
  user_id?: number;
  products?: [MenuItem];
  addToCart(item: MenuItem) {
    this.products?.push(item);
  }
  showProducts() {
    return this.products;
  }
}

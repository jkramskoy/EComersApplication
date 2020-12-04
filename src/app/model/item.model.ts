import { Product } from '../model/product.model';

export class Item {
  product: Product;
  quantity: number;

  constructor(pr: Product, qty: number) {
    this.product = pr;
    this.quantity = qty;
  }
}

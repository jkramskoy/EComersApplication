import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  private API_SERVER = 'https://localhost:5001/product';
  invalidLogin: boolean = true;

  constructor(private http: HttpClient) {}

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_SERVER);
  }

  // constructor() {
  //   this.products = [
  //     {
  //       id: 1,
  //       name: 'Aftershave',
  //       price: 45.15,
  //       photoPath: 'assets/images/aftershave.jpg',
  //       description:
  //         'Adidas, famous for its sports wear reaches the height of success with its line of fragrances for men, good not only for sports but also great for casual everyday wear. Adidas Dynamic Pulse is sporty, fun and races your pulse with the high energy that it brings in with aromatic notes from apple, grapefruit, mandarin, mango, flowers, cedar and mint leaves with patchouli, sandalwood and musk. Wear it for a casual date with your loved one or wear it to the gym and proudly stand out in the crowd.',
  //     },
  //     {
  //       id: 2,
  //       name: 'Headphones',
  //       price: 110.0,
  //       photoPath: 'assets/images/headphones.jpg',
  //       description:
  //         'Beats Studio3 Wireless headphones deliver a premium listening experience with Pure Active Noise Cancelling (Pure ANC). Beats’ Pure ANC actively blocks external noise and uses real-time audio calibration to preserve clarity, range and emotion. ',
  //     },
  //     {
  //       id: 3,
  //       name: 'Laptop',
  //       price: 2220.99,
  //       photoPath: 'assets/images/laptop.jpg',
  //       description:
  //         'Surface Laptop 3 fuels your ideas and reflects your style with a thin, light design, choice of colors,1 2 keyboard finishes, and 2 sizes – a vibrant 13.5” or 15” touchscreen.',
  //     },
  //   ];
  // }
  loadProducts(listProducts: Product[]) {
    this.products = listProducts;
  }

  getProducts(): Product[] {
    return this.products;
  }

  private getSelectedIndex(id: number) {
    for (var i = 0; this.getProduct.length; ++i) {
      if (this.products[i].id == id) {
        return i;
      }
    }

    return -1;
  }

  getProduct(id: number): Product {
    return this.products[this.getSelectedIndex(id)];
  }
  addProduct(pr: Product) {
    this.products.push(pr);
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  //selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  products?: Product[];

  constructor(private service: ProductService) {}

  // ngOnInit(): void {
  //   this.products = this.service.getProducts();
  // }

  ngOnInit(): void {
    this.service.get().subscribe((data: Product[]) => {
      this.products = data;
      this.service.loadProducts(data);
    });
  }

  toCartData(id: number, qty: number): void {
    let itemExists = false;
    let cartData = localStorage.getItem('cartData') || '[]';
    let json = JSON.parse(cartData);

    for (let i = 0; i < json.length; i++) {
      let cartItemObject = JSON.parse(json[i]);
      if (cartItemObject.id == id) {
        let newQ = cartItemObject.qty + qty;
        cartItemObject.qty = newQ;
        itemExists = true;
        json[i] = JSON.stringify(cartItemObject);
      }
    }
    if (!itemExists) {
      json.push(JSON.stringify({ id: id, qty: qty }));
    }

    localStorage.setItem('cartData', JSON.stringify(json));

    //console.log(`local storage has:` + localStorage.getItem('cartData'));
  }

  clearCartData(): void {
    localStorage.setItem('cartData', '');
    console.log(localStorage.getItem('cartData'));
  }

  ifLogin() {
    return !this.service.invalidLogin;
  }
}

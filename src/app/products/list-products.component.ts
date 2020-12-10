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

  ngOnInit(): void {
    this.service.get().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  toCartData(id: number, qty: number): void {
    // debugger;
    let cartData = localStorage.getItem('cartData') || '[]';
    let json = JSON.parse(cartData);

    json.push(JSON.stringify({ id: id, qty: qty }));
    localStorage.setItem('cartData', JSON.stringify(json));

    console.log(localStorage.getItem('cartData'));
  }

  clearCartData(): void {
    localStorage.setItem('cartData', '');
    console.log(localStorage.getItem('cartData'));
  }

  ifLogin() {
    return !this.service.invalidLogin;
  }
}

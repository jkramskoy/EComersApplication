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
    this.products = this.service.getProducts();
  }

  toCartData(id?: number, qty?: number): void {
    let cartData = localStorage.getItem('cartData') || '[]';
    console.log(cartData);
    let json = JSON.parse(cartData);
    console.log(json);

    json.push(JSON.stringify({ id: id, qty: qty }));
    localStorage.setItem('cartData', JSON.stringify(json));

    //console.log(localStorage.getItem('cartData'));
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  products?: Product[];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.products = this.service.getProducts();
  }

  tocart(id?: number, qty?: number): void {
    localStorage.setItem('cartData', JSON.stringify({ id: id, qty: qty }));
    console.log(localStorage.getItem('cartData'));
  }
}

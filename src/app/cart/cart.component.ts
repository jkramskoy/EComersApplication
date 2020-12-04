import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product.model';
import { Item } from '../model/item.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Item[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    let dataSourse = localStorage.getItem('cartData');

    if (dataSourse != null) {
      let product = this.service.getProduct(JSON.parse(dataSourse)['id']); //geting one product
      let q: number = JSON.parse(dataSourse)['qty'];

      let item = new Item(product, q);
      this.items.push(item);
      // console.log(item);
    }
  }
}

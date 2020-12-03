import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { MenuItemService } from '../../app/services/menu-item.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  menuItems?: Product[];
  constructor(private service: MenuItemService) {}

  ngOnInit(): void {
    this.menuItems = this.service.getMenuItems();
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  private API_SERVER = 'https://localhost:5001/product/';
  invalidLogin: boolean = false;
  private status = '';

  constructor(private http: HttpClient) {}

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_SERVER);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(this.API_SERVER + id);
  }

  getProduct(id: number): Product {
    let res: Product = new Product(0, '', 0, '');
    //debugger;
    this.getById(id).subscribe((data: Product) => {
      res.id = data.id;
      res.name = data.name;
      res.price = data.price;
      res.photoPath = data.photoPath;
      res.description = data.description;
    });

    return res;
  }

  post(pr: Product): Observable<Product> {
    const httpHeaders = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post<Product>(
      this.API_SERVER,
      JSON.stringify(pr),
      httpHeaders
    );
  }

  delete(id: number) {
    this.http
      .delete(this.API_SERVER + '/' + id)
      .subscribe(() => (this.status = 'Delete successful'));

    return this.status;
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

  addProduct(pr: Product) {
    this.products.push(pr);
  }
}

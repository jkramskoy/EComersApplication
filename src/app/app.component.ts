import { Component } from '@angular/core';
import { ProductService } from '../app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: ProductService, private router: Router) {}

  logOut() {
    debugger;
    this.service.invalidLogin = true;
    this.router.navigate(['/list']);
  }

  ifLogin() {
    return !this.service.invalidLogin;
  }
}

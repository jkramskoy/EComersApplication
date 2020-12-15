import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../../app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  invalidLogin: boolean = false;

  constructor(
    private http: HttpClient,
    private service: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // "johndoe" && user.Password == "def@123"

  login(form: NgForm) {
    const credentials = JSON.stringify(form.value);

    console.log(JSON.stringify(form.value));

    this.http
      .post('https://localhost:5001/Auth/login', credentials, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (response) => {
          const token = (<any>response).token;
          localStorage.setItem('jwt', token);
          this.invalidLogin = false;
          this.service.invalidLogin = false;

          this.router.navigate(['/list']);
        },
        (err) => {
          this.invalidLogin = true;
          this.service.invalidLogin = true;
        }
      );
  }
}

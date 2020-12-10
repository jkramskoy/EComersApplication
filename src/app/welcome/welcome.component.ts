import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../../app/services/product.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private service: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // "johndoe" && user.Password == "def@123"

  login(form: NgForm) {
    const url = 'https://localhost:5001/Auth/login';
    const body = JSON.stringify(form.value);
    console.log(body);
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http.post(url, body, { headers: header }).subscribe(
      (responce: any) => {
        const token = responce.token;
        //console.log(token);
        this.service.invalidLogin = false;

        this.router.navigate(['/list']);
      },
      (err) => {
        console.log(err.message);
        this.service.invalidLogin = true;
      }
    );
  }
}

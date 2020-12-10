import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //title = 'Angular app Hello Word';

  colSpan = 2;

  title = 'Angular Restaurant Project';
  imagePath: string =
    'https://www.google.com/logos/doodles/2020/december-holidays-day-1-6753651837108829.5-s.png';

  firstName: string = 'Mark';
  lastName: string = 'Smith';

  isDisabled = false;

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

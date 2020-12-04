export class Product {
  id: number;
  name: string;
  price: number;
  photoPath: string;
  description: string = '';

  constructor(id: number, name: string, price: number, path: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.photoPath = path;
  }
}

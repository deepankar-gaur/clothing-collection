import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product 1', 'Men\'s Solid Regular fit T-Shirt', 999, 'https://images-na.ssl-images-amazon.com/images/I/71BsGGcuh8L._UL1500_.jpg'),
    new Product(2, 'Product 2', 'Men Full Sleeve Checkered Casual Shirt', 459, 'https://images-na.ssl-images-amazon.com/images/I/61TWOMB7d7L._UL1100_.jpg'),
    new Product(3, 'Product 3', 'Regular Fit Men\'s Poly Cotton Tshirt', 899, 'https://images-na.ssl-images-amazon.com/images/I/61tZQmRl5oL._UL1232_.jpg'),
    new Product(4, 'Product 4', 'Women\'s Starred Loose Fit Shirt', 1049, 'https://images-na.ssl-images-amazon.com/images/I/61c3VIz5q1L._UL1500_.jpg'),
    new Product(5, 'Product 5', 'Men\'s Regular Fit Casual Shirt', 499,'https://images-na.ssl-images-amazon.com/images/I/91XnuK4BDtL._UL1500_.jpg'),
    new Product(6, 'Product 6', 'Fenoix Men\'s Cotton T-Shirt Hooded Dark Blue', 1299 , 'https://images-na.ssl-images-amazon.com/images/I/81fac2pP2hL._UL1500_.jpg')
  ]

  constructor() { }

  getProducts(): Product[] {
    //TODO: Populate products from an API and return an Observable
    return this.products
  }
}

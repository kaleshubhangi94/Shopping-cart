import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { productsUrl } from 'src/app/config/api';

//const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[] = [
  //   new Product(1,'Rings','Its a toy',100),
  //   new Product(2,'Rings2','Its a toy',150),
  //   new Product(3,'Rings3','Its a toy',200),
  //   new Product(4,'Rings4','Its a toy',300),
  //   new Product(5,'Rings5','Its a toy',50),
  //   new Product(6,'Rings6','Its a toy',400),
  //   new Product(7,'Rings7','Its a toy',500),

  // ];
  constructor(private http:HttpClient) { }
  

  getProducts(): Observable<Product[]> {
    //todo-populate product from API and return observable
    return this.http.get<Product[]>(productsUrl);

  }
}


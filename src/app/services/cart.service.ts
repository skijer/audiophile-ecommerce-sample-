import { Injectable } from '@angular/core';
import { Cart } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  products: Cart[] = [
    { id: 1, name: 'XX99 MARK II', price:2999,quantity:0, img:'H1_1.png'},
    { id: 2, name: 'XX99 MARK I', price: 1750, quantity:0, img:'H2_1.png'},
    { id: 3, name: 'XX59', price: 899, quantity:0, img:'H3_1.png'},
    { id: 4, name: 'ZX9', price: 4500, quantity:0, img:'S1_1.png'},
    { id: 5, name: 'ZX7', price: 3500, quantity:0, img:'S2_1.png'},
    { id: 6, name: 'YX1', price: 599, quantity:0,img:'E1_1.png'},
  ];

  constructor() { }
  
  updateQuantity(productId: number, newQuantity: number): void {
    const productIndex = this.products.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
      this.products[productIndex].quantity = newQuantity;
    }
  }
  getProductList(): Observable<Cart[]> {
    return of(this.products);
  }
}

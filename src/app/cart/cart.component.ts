import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  modalOpen = false;
  cart:any;
  total:number=0;
  i:number=0;
  
  constructor (private cartService: CartService){}
  openModal() {
    this.cartService.getProductList().subscribe(products => {
      this.cart = products;
    });
    for(this.i=0;this.i<6;this.i++){
      this.total=this.total+this.cart[this.i].price*this.cart[this.i].quantity;
    }
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.cartService.updateQuantity(this.cart.id,this.cart.quantity);
  }

  addM(sum:number, id:number){
    this.cart[id-1].quantity=this.cart[id-1].quantity+sum;
    this.total+=this.cart[id-1].price*sum;
  }

}
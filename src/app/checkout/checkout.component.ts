import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
payment:boolean=false;
selectPaymentMethod(v:boolean){
  this.payment=v;
}
cart:any;
total:number=0;
i:number=0;

constructor (private cartService: CartService, private elementRef: ElementRef){}
ngOnInit() {
  this.cartService.getProductList().subscribe(products => {
    this.cart = products;
  });
  for(this.i=0;this.i<6;this.i++){
    this.total=this.total+this.cart[this.i].price*this.cart[this.i].quantity;
  }
}
open() {
  const modal = this.elementRef.nativeElement.querySelector('.modal');
  modal.style.display = 'block';
}
close(){
  const modal = this.elementRef.nativeElement.querySelector('.modal');
  modal.style.display = 'none';
}
}

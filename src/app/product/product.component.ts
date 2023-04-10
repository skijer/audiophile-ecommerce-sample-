import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import { StyleService } from '../services/style.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;
  products: any;
  add:number=1;

  constructor(private route: ActivatedRoute, private styleService: StyleService, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    this.styleService.find(id).subscribe(product => {
      this.product = product;
    });
    this.styleService.getProductList(this.product.id).subscribe(products => this.products = products);
    console.log(this.products);
  }

  reload(n:number){
    this.router.navigate(['/product/'+n]);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        location.reload();
      }
    });
  }
  addM(sum:number){
    this.add=this.add+sum<1?1:this.add+sum;
  }

  updateQ(){
    this.cartService.updateQuantity(this.product.id,this.add);
  }
}

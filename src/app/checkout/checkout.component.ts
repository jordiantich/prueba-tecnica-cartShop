import { Component, OnInit } from '@angular/core';
import { PRODUCTOS } from '../data/mock-products';
import { ProductCart } from '../interfaces/cartProduct';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  products = PRODUCTOS;
  cart:ProductCart[] = [];
  cartNumberOfProducts:number = 0;
  totalPrice:number = 0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.finalPrice();
    this.getData();
  }

  finalPrice(){
    this.cartService.finalPrice();
  }

  getData(){
    this.cart=this.cartService.getCart();
    this.cartNumberOfProducts = this.cartService.cartNumberOfProducts;
    this.totalPrice = this.cartService.totalPrice;
  }

}

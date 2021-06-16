import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/products';
import { PRODUCTOS } from '../data/mock-products';
import { ProductCart } from '../interfaces/cartProduct';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products = PRODUCTOS;
  cart:ProductCart[] = [];

  constructor(private route:Router,
              private cartService:CartService) {}

  ngOnInit(): void {
    this.cart =this.cartService.cart;
  }


  addCart(product:Product){
    this.cartService.addCart(product);
    this.cart = this.cartService.getCart();
  }

  deleteCart(product:Product){
    this.cartService.deleteCart(product);
    this.cart = this.cartService.getCart();
  }


  btnClick(){
    this.route.navigateByUrl("/check")
  }


}

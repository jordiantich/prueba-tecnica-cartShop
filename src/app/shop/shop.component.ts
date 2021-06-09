import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/products';
import { PRODUCTOS } from '../data/mock-products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {


  product?:Product[];
  products = PRODUCTOS;
  selectProduct?:Product[];

  constructor() { }

  ngOnInit(): void {
  }

  addCart(products:Product[]):void{
    console.log(products)
      this.selectProduct = products;
  }

}

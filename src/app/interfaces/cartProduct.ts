export interface ProductCart {
  id:string;
  name:string;
  price:number;
  quantity:number;
  finalPrice?:number;
  finalPriceWithDiscount?:number;
  quantityFree?:number;
}

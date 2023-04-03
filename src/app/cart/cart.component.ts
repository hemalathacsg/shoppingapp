import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import alertify from 'alertifyjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartData: any = [];

  constructor(private productService:ProductService){
  }
  ngOnInit():void{
    this.productService.listCartProducts().subscribe(data=>{
      this.cartData=data;
      console.log(this.cartData);
    })
  }
  purchase(){
    alertify.success("purchased the product from cart successfully.");
  }
  delete(cartProduct:any){
    alertify.success("removed alert message but didnt delte the product");

  }
}

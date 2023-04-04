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
  cartprice:any;
  constructor(private productService:ProductService){
  }
  ngOnInit():void{
    this.productService.listCartProducts().subscribe(data=>{
      this.cartData=data;
    });
    this.productService.totalCartProductsPrice().subscribe(data=>{
      this.cartprice=data;
    });
  }
  purchase(){
    alertify.success("purchased the product from cart successfully.");
  }
  delete(id:number=this.cartData.productId){
    console.log('delete'+id)
   this.productService.delete(id).subscribe(()=>{
    this.productService.listCartProducts().subscribe(data=>{
      this.cartData=data;
      alertify.success("removed the cart product successfully");
    });
   });
  }
}

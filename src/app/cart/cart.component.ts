import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import alertify from 'alertifyjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartData: any = [];
  cartprice: number = 0;
  // router: any;
  
  constructor(private productService:ProductService,private router:Router){
  }
  
  ngOnInit(): void {
    this.productService.listCartProducts().subscribe(data=>{
      this.cartData=data;
    });
    this.productService.totalCartProductsPrice().subscribe(data=>{
      this.cartprice=data;
    });
  }
  
  purchase(): void {
    alertify.success("purchased the product from cart successfully.");
  }
  
  delete(id: number): void {
    console.log('delete ' + id);
    this.productService.delete(id).subscribe(()=>{
      this.productService.listCartProducts().subscribe(data=>{
        this.cartData=data;
        alertify.success("removed the cart product successfully");
      });
    });
  }
  
  incCartProdQuantity(productId: number): void {
    this.productService.incCartProdQuantity(productId).subscribe(
      (response: any) => {
        console.log(response);
        // Reload the product data after updating the quantity
        this.productService.listProducts().subscribe(data => {
          this.cartData = data;
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  
  decCartProdQuantity(productId: number): void {
    this.productService.decCartProdQuantity(productId).subscribe(
      (response: any) => {
        console.log(response);
        // Reload the product data after updating the quantity
        this.productService.listProducts().subscribe(data => {
          this.cartData = data;
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  showProductDetails(productId:number){
    this.router.navigate(['/details',productId])
  }
}

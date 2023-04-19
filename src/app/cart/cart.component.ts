import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import alertify from 'alertifyjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'; // Import the Router module
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartData: any = [];
  cartprice: number = 0;
  // router: any;
  private cartSubscription: Subscription = new Subscription();

  constructor(private productService:ProductService,private router:Router){
  }
  
  ngOnInit(): void {
    this.cartSubscription = this.productService.listCartProducts().subscribe(data => {
      this.cartData = data;
      this.calculateTotalPrice();
    });
  }
  private calculateTotalPrice(): void {
    this.productService.totalCartProductsPrice().subscribe(data => {
      this.cartprice = data;
    });
  }
  
  
  purchase(): void {
    alertify.success("purchased the product from cart successfully.");
  }
  
  delete(productId: number): void {
    console.log('delete ' + productId);
    console.log(typeof productId);
    this.productService.delete(productId).subscribe(()=>{
      this.productService.listCartProducts().subscribe(data=>{
        this.cartData=data;
        alertify.success("removed the cart product successfully");
      });
    });
  }
  
  incCartProdQuantity(productId: number): void {
    console.log(typeof productId);
    this.productService.incCartProdQuantity(productId).subscribe(
      (response: any) => {
        console.log("incCartProdQuantity Respeonse is printing");
        console.log(response);
        // Reload the product data after updating the quantity
        this.productService.listCartProducts().subscribe(data => {
          this.cartData = data;
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  
  decCartProdQuantity(productId: number): void {
    console.log(typeof productId);
    this.productService.decCartProdQuantity(productId).subscribe(
      (response: any) => {
        console.log("decCartProdQuantity Response is printing");
        console.log(response);
        // Reload the product data after updating the quantity
        this.productService.listCartProducts().subscribe(data => {
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
  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }
  
}

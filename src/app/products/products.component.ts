import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import alertify from 'alertifyjs';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productData: any = [];
  prodQuantity:number=1;
  constructor(private productService: ProductService,
    private router:Router
    ) {

  }
  ngOnInit(): void {
    this.productService.listProducts().subscribe(data => {
      this.productData = data;
      console.log(this.productData);
    })
  }
  addToCart(product: any) {
    // console.log(product);
    this.productService.addToCart(product).subscribe(
      (response: any) => {
        console.log(response);
        alertify.success("added to cart successfully.");

      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  purchase(product: any) {
    console.log(product);
    alertify.success("purchased the product successfully.");
  }
  incProdQuantity(productId: number) {
    this.productService.incProdQuantity(productId)
      .pipe(
        switchMap(() => this.productService.listProducts())
      )
      .subscribe(data => {
        this.productData = data;
      }, error => {
        console.log(error);
      });
  }
  
  decProdQuantity(productId: number) {
    this.productService.decProdQuantity(productId)
      .pipe(
        switchMap(() => this.productService.listProducts())
      )
      .subscribe(data => {
        this.productData = data;
      }, error => {
        console.log(error);
      });
  }
  showProductDetails(productId:number){
    this.router.navigate(['/details',productId])
  }

}

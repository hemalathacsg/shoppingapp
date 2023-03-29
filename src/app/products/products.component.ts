import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productData: any = [];
  constructor(private productService:ProductService){

  }
  ngOnInit():void{
    this.productService.listProducts().subscribe(data=>{
      this.productData=data;
      console.log(this.productData);
    })
  }
}

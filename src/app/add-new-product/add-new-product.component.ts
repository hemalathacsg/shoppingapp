import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../_model/product.model';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent {
  product:Product={
    productName:"",
    productDescription:"",
    productDiscountPrice:0,
    productActualPrice:0
  }
  addProduct(productForm:NgForm){
    console.log(this.product);
  }
}
 
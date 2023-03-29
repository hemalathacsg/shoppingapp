// import { HttpErrorResponse } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { ProductService } from '../service/product.service';
// import { Product } from '../_model/product.model';


// @Component({
//   selector: 'app-add-new-product',
//   templateUrl: './add-new-product.component.html',
//   styleUrls: ['./add-new-product.component.scss']
// })
// export class AddNewProductComponent {
//   product:Product={
//     productName:"",
//     productDescription:"",
//     productDiscountPrice:0,
//     productActualPrice:0
//   }
//   //injecting the service u have createdin service.ts
//   constructor(private productService:ProductService){}
//   addProduct(productForm:NgForm){
//     // console.log(this.product);
//     // we are calling subscribe because it is returning a observable
//     //wihtin the subscribe we can call 2 different call back functons. 1st one gets executed 
//     //when u get any response. and2nd one gets executed when if at all we get any error
//     this.productService.addProduct(this.product).subscribe(
//       (response:Product)=>{
//         console.log(response);
//       },
//       (error:HttpErrorResponse)=>{
//         console.log(error);
//       }
//     );
//   }
// }
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { Product } from "../_model/product.model";
import { ProductDataService } from "../service/productData.service";
import { ProductService } from "../service/product.service";
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-new-product',
    templateUrl: './add-new-product.component.html',
    styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent {
    product: Product = {
        productName: "",
        productDescription: "",
        productDiscountPrice: 0,
        productActualPrice: 0
    }

    constructor(private productService: ProductService,
        private formBuilder: FormBuilder ) {
        // this.productService.getOptions().subscribe();
    }

    addProduct(productForm: NgForm) {
        this.productService.addProduct(this.product).subscribe(
            (response: any) => {
                console.log(response);
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            }
        );
    }
}

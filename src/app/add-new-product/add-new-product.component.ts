import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { Product } from "../_model/product.model";
import { ProductDataService } from "../service/productData.service";
import { ProductService } from "../service/product.service";
import { FormBuilder, Validators } from '@angular/forms';
import alertify from 'alertifyjs';

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

    constructor(private productService: ProductService) {
    }

    addProduct(productForm: NgForm) {
        this.productService.addProduct(this.product).subscribe(
            (response: any) => {
                console.log(response);
                alertify.success("added product successfully.");
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            }
        );
    }
}

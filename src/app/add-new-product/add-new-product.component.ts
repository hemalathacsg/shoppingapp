import { Component } from "@angular/core";
import { FormBuilder, NgForm } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { Product } from "../_model/product.model";
import { ProductService } from "../service/product.service";
import alertify from 'alertifyjs';

@Component({
    selector: 'app-add-new-product',
    templateUrl: './add-new-product.component.html',
    styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent {
    product: Product = {
        productId:0,
        productName: "",
        productDescription: "",
        productDiscountPrice: 0,
        productActualPrice: 0,
        quantity:1
        // imageurl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oppo.com%2Fen%2Fsmartphones%2Fseries-find-n%2Ffind-n2-flip%2F&psig=AOvVaw1V_5jTaSIr79K04QkXTsiO&ust=1680677129593000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIiL6avQj_4CFQAAAAAdAAAAABAE"
    }

    constructor(private formBuilder: FormBuilder, private productService: ProductService) {
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

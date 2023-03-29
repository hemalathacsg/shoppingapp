import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Product } from '../_model/product.model';

import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Product } from "../_model/product.model";
import { ProductDataService } from "./productData.service";

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   constructor(private httpClient:HttpClient) { }
//   public addProduct(product:Product){
//     //ITHIN THE POST METHOD IT IS RETURNING PRODUCT TYPE AND INSODE () PASS URL 
//     return this.httpClient.post<Product>("http://localhost:8080/addNewProduct",product);
//   }
// }


@Injectable({
  providedIn: 'root'
})
export class ProductService {



  url='http://localhost:8080/addNewProduct'
  url2='http://localhost:8080/getAllProduct'

  constructor(private httpClient: HttpClient) { }
  
  // public addProduct(product: Product) {
  //   return this.productDataService.addProduct(product);
  // }

  listProducts():Observable<any[]>{
    // console.log("getting alues")
    return this.httpClient.get<any[]>(this.url2);
  }

  public addProduct(product: Product){
    return this.httpClient.post(this.url,product);
  }
}
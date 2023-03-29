// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Product } from "../_model/product.model";

// @Injectable({
//     providedIn: 'root'
//   })
//   export class ProductDataService {
//     constructor(private httpClient: HttpClient) { }
    
//     public addProduct(product: Product) {
//       return this.httpClient.post<Product>("http://localhost:8080/addNewProduct", product);
//     }
//   }
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../_model/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductDataService {
  url='http://localhost:8080/addNewProduct';
    constructor(private httpClient: HttpClient) { }

    // public addProduct(product: Product) {
    //     const headers = new HttpHeaders({
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    //     });
    //     const options = { headers: headers };
    //     return this.httpClient.post<Product>("http://localhost:8080/addNewProduct", product, options);
    // }
  //  sendData(){
  //   return this.httpClient.post(this.url,product)
  //  }
}


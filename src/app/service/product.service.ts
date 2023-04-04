import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Product } from "../_model/product.model";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url='http://localhost:8080/addNewProduct';
  url2='http://localhost:8080/getAllProduct';
  url3='http://localhost:8080/addToCart';
  url4='http://localhost:8080/getAllCartProducts';
  url5='http://localhost:8080/getAllCartProducts/${id}';
  url6='http://localhost:8080/totalCartProductsPrice'
  constructor(private httpClient: HttpClient) { }

  listProducts():Observable<any[]>{
    return this.httpClient.get<any[]>(this.url2);
  }
  listCartProducts():Observable<any[]>{
    return this.httpClient.get<any[]>(this.url4);
  }
  public addProduct(product: Product){
    return this.httpClient.post(this.url,product);
  }
  public addToCart(product:Product){
    return this.httpClient.post(this.url3,product);
  }
  public delete(id:number):Observable<any>{
    // const deleteurl=`${this.url4}/${id}`;
    return this.httpClient.delete(this.url5);
  }
  public totalCartProductsPrice():Observable<any>{
    return this.httpClient.get(this.url6);
  }
}
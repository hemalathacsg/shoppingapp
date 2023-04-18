import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Product } from "../_model/product.model";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:8080/addNewProduct';
  url2 = 'http://localhost:8080/getAllProduct';
  url3 = 'http://localhost:8080/addToCart';
  url4 = `http://localhost:8080/getAllCartProducts`;
  url6 = 'http://localhost:8080/totalCartProductsPrice'
  constructor(private httpClient: HttpClient) { }

  listProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url2);
  }
  listCartProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url4);
  }
  public addProduct(product: Product) {
    return this.httpClient.post(this.url, product);
  }
  public addToCart(product: Product) {
    return this.httpClient.post(this.url3, product);
  }
  public delete(productId: number): Observable<any> {
    console.log("entered product service of delete method")
    const url5 = `http://localhost:8080/deleteCartProduct/${productId}`;

    // const deleteurl=`${this.url4}/${id}`;
    return this.httpClient.delete(url5);
  }
  public totalCartProductsPrice(): Observable<any> {
    return this.httpClient.get(this.url6);
  }
  public incProdQuantity(productId: number): Observable<any> {
    console.log("entered product service of  incProdQuantity method");
    const url7 = `http://localhost:8080/incProdQuantity/${productId}`;
    return this.httpClient.post(url7, {});
  }

  public decProdQuantity(productId: number): Observable<any> {
    console.log("entered product service of  decProdQuantity method");
    const url8 = `http://localhost:8080/decProdQuantity/${productId}`;
    return this.httpClient.post(url8, {});
  }
  public incCartProdQuantity(productId: number): Observable<any> {
    console.log("entered product service of  incCartProdQuantity method");
    const url9 = `http://localhost:8080/incCartProdQuantity/${productId}`;
    return this.httpClient.post(url9, {});
  }

  public decCartProdQuantity(productId: number): Observable<any> {
    console.log("entered product service of  decCartProdQuantity method");
    const url10 = `http://localhost:8080/decCartProdQuantity/${productId}`;
    return this.httpClient.post(url10, {});
  }
  public viewProductDetails(productId:number):Observable<any>
{
  const url11=`http://localhost:8080/viewProductDetails/${productId}`;
  return this.httpClient.get(url11);
}}
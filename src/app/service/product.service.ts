import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Endpoints } from "src/app/_config/endpoints";
import { Observable } from 'rxjs';
import { Product } from '../_shared/model/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getfindAll():Observable<Product[]> {
    return this.http.get<Product[]>(Endpoints.PRODUC );
  }
  getfindsearch(ids:any):Observable<Product[]> {
    return this.http.get<Product[]>(Endpoints.PRODUC+"/sear?ids="+ids);
  }
  post(produc:Product) {
    return this.http.post(Endpoints.PRODUC+"/salva/produto",produc);
  }
  postLink(produc:any): Observable<Object> {
    return this.http.post(Endpoints.PRODUC+"/link",produc);
  }
}

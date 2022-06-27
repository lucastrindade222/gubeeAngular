import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Endpoints } from "src/app/_config/endpoints";
import { TargetMarket } from '../_shared/model/product.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TargetMarketService {

  constructor(private http: HttpClient) {}

  post(targetMarket:TargetMarket) {
    return this.http.post(Endpoints.TARGETMARKET+"/salva/target",targetMarket);
  }
  get():Observable<TargetMarket[]> {
    return this.http.get<TargetMarket[]>(Endpoints.TARGETMARKET);
  }
}

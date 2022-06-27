import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Endpoints } from "src/app/_config/endpoints";
import { Stack } from '../_shared/model/product.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StackService {

  constructor(private http: HttpClient) {}

  post(stack:Stack) {
    return this.http.post(Endpoints.STACK+"/salva/stack",stack);
  }
  get():Observable<Stack[]> {
    return this.http.get<Stack[]>(Endpoints.STACK);
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_shared/model/product.model';
import { ProductService } from 'src/app/service/product.service'; 
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
  providers:[ProductService]
})
export class ListProductComponent implements OnInit {
  product?: Product[];
  constructor(private service : ProductService) { }



  ngOnInit() {
     
    this.findAll();
   }
 
   findAll(){
   
     this.service.getfindAll().subscribe((resposte)=>{
     this.product =resposte;
     })
   }

}

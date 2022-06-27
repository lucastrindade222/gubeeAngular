import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_shared/model/product.model';
import { ProductService } from 'src/app/service/product.service'; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
public ids?:string;
public product?: Product[];
constructor(private service : ProductService) { }
displayedColumns: string[] = ['id', 'name'];
  ngOnInit(): void {
  }
  onSubmit(): void{
    if(this.ids != undefined){
    
     
      this.service.getfindsearch(btoa(this.ids)).subscribe((resposte)=>{
        this.product =resposte;
        })
    }
   
    
    }
}

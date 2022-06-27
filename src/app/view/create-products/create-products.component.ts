import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Product  } from 'src/app/_shared/model/product.model';
import { ProductService } from 'src/app/service/product.service'; 
@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent implements OnInit {
 
 produc:Product={

 }
  constructor(private _snackBar: MatSnackBar, private service:ProductService ) { }

  ngOnInit(): void {
  }

  onSubmit( ):void{

this.service.post(this.produc).subscribe((x) => {
this._snackBar.open("Salvo", "Fechar"); 
 
   
},
(err) => {
  var errorMsg = err.error.msg;
 
  if (err.error.errors) {
    for (const error of err.error.errors) {
      errorMsg += " " + error.message;
    }
  }
  this._snackBar.open("Erro", "Fechar");
   
});

     
  }
  
 
}

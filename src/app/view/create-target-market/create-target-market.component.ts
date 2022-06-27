import { Component, OnInit } from '@angular/core';
import { TargetMarket } from 'src/app/_shared/model/product.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TargetMarketService } from 'src/app/service/target-market.service';

@Component({
  selector: 'app-create-target-market',
  templateUrl: './create-target-market.component.html',
  styleUrls: ['./create-target-market.component.scss']
})
export class CreateTargetMarketComponent implements OnInit {

  targetMarket:TargetMarket={
    
  }
  constructor(private _snackBar: MatSnackBar,private service:TargetMarketService ) { }

  ngOnInit(): void {
  }
   
  onSubmit( ):void{

    this.service.post(this.targetMarket).subscribe((x) => {
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
     
    this._snackBar.open("Salvo", "Fechar");
  }



}

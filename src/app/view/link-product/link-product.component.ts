import { Component, OnInit } from '@angular/core';
import { Stack, TargetMarket } from 'src/app/_shared/model/product.model';
import { TargetMarketService } from 'src/app/service/target-market.service';
import { StackService } from 'src/app/service/stack.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ProductService } from 'src/app/service/product.service'

@Component({
  selector: 'app-link-product',
  templateUrl: './link-product.component.html',
  styleUrls: ['./link-product.component.scss']
})
export class LinkProductComponent implements OnInit {
 
   
  public stack: Stack[] = []
  public targetMarket: TargetMarket[] = []
  displayedColumns: string[] = ['id', 'name'];
  public stackT?:String =""
  public marketT?:String=""
  public productT?:String
  public dat:any
  constructor(private _snackBar: MatSnackBar, private service:ProductService,private stackService: StackService, private targetMarketService: TargetMarketService) { }


  getValue(event: Event): void {

  }
  onSubmit(): void {
  console.log(this.marketT,this.stackT,this.productT)

  this.dat={"stack":this.stackT,"maket":this.marketT,"product":this.productT}

  this.service.postLink(this.dat).subscribe((x) => {
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
 

  ngOnInit() {

    this.findAll();
  }

  findAll() {

    this.stackService.get().subscribe((resposte) => {
      this.stack = resposte;
    })

    this.targetMarketService.get().subscribe((resposte) => {
      this.targetMarket = resposte;
    })

  }


}

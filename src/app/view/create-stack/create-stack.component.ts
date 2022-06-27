import { Component, OnInit } from '@angular/core';
import { Stack } from 'src/app/_shared/model/product.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { StackService } from 'src/app/service/stack.service';  
@Component({
  selector: 'app-create-stack',
  templateUrl: './create-stack.component.html',
  styleUrls: ['./create-stack.component.scss']
})
export class CreateStackComponent implements OnInit {
  stack:Stack={
    
  }
  constructor(private _snackBar: MatSnackBar,private service:StackService ) { }

  ngOnInit(): void {
  }
   
  onSubmit( ):void{
    this.service.post(this.stack).subscribe((x) => {
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

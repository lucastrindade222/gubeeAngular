import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ProductService } from 'src/app/service/product.service'; 
import { Product } from 'src/app/_shared/model/product.model';
 

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  providers:[ProductService]
})


export class MainNavComponent implements OnInit {
  product?: Product[];

  listproduct:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private service : ProductService) {
 
    
  }

  ngOnInit() {
     
   this.findAll();
  }

  findAll(){
  
    this.service.getfindAll().subscribe((resposte)=>{
    this.product =resposte;
    })
  }


}

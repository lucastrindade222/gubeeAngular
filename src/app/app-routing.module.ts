import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './view/main-nav/main-nav.component';
import { ListProductComponent } from './view/list-product/list-product.component';
import { CreateProductsComponent } from './view/create-products/create-products.component';
import { CreateTargetMarketComponent } from './view/create-target-market/create-target-market.component';
import { CreateStackComponent } from './view/create-stack/create-stack.component';
import { LinkProductComponent } from './view/link-product/link-product.component';
import { SearchComponent } from './view/search/search.component';
 
const routes: Routes = [
  {
    path:"",
    component:MainNavComponent,
    children : [
      {path: '', component: ListProductComponent },
      {path: 'createproducts',component: CreateProductsComponent },
      {path: 'targetMarket',component: CreateTargetMarketComponent },
      {path: 'createstack',component: CreateStackComponent },
      {path: 'connectionbetweenproducts',component:LinkProductComponent},
      {path:'sear',component:SearchComponent}

     
      
  
     
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

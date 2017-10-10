import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from './../app-routing/product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule,
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent
  ],
  providers: [
    ProductGuardService,
    ProductService
  ]
})
export class ProductModule { }

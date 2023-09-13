import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription, Subject } from 'rxjs';
import { Product } from 'shared/models/product';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy, OnInit {
  products:Product[] = [];
  filteredProduct: Product[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.dtOptions={
      pagingType:'full_numbers'
    };
    this.loadData();
  }

  constructor(private productService: ProductService) {}

  loadData(){
    this.productService.getAll().subscribe(p => {this.filteredProduct = this.products = p;
    this.dtTrigger.next(null);
      });
  }

  filter(query:string){
    this.filteredProduct = (query) ?
    this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
    this.dtTrigger.next(null);
  }

  ngOnDestroy() {
   
  }

}

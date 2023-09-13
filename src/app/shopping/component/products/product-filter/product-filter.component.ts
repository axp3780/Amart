import { Component, Input, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { CategoryService } from 'shared/services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit{
  categories$:Observable<any>=EMPTY;
  @Input ('category') category:any;

  constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
    this.categories$= this.categoryService.getAll();
  }

}

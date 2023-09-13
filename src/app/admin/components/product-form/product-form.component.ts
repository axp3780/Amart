import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'shared/services/category.service';
import { ProductService } from 'shared/services/product.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$?: Observable<any[]>;
  product:any;
  productData:any={};
  id:any;

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
    ){}

    
  ngOnInit(): void {
    this.categories$ = this.categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.productService.get(this.id).pipe(take(1)).subscribe(p=>{
        this.product =p
        if (this.product && this.product.payload) {
          this.productData = this.product.payload.val();
      } else {
          this.productData = {}; // Default empty object if not found or malformed
      }
      });
    }
    else {
      this.productData = {}; // Default for new product
   }
 
  }

  save(product:any){
    //if we have id, update
    if(this.id){this.productService.update(this.id, product)}
    //else save
    else this.productService.create(product)
      
    this.router.navigate(['admin/products']);
  }

  delete(){
    if(!confirm('Are you sure you want to delete this product')) return;
    
    this.productService.delete(this.id);
    this.router.navigate(['admin/products']);
  }
    
}


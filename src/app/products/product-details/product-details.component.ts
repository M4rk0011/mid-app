import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Get ID from URL
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Product ID from URL:', id); // For debugging
    
    if (id) {
      this.product = this.productService.getProductById(Number(id));
      console.log('Product found:', this.product); // For debugging
    }
    
    this.loading = false;
  }
}
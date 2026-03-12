import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], // Add FormsModule
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  originalProduct: Product | undefined; // For tracking changes
  loading: boolean = true;
  isEditing: boolean = false;
  saveSuccess: boolean = false;
  saveError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Get ID from URL
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Product ID from URL:', id);
    
    if (id) {
      this.product = this.productService.getProductById(Number(id));
      // Create a copy for editing
      if (this.product) {
        this.originalProduct = { ...this.product };
      }
      console.log('Product found:', this.product);
    }
    
    this.loading = false;
  }

  // Toggle edit mode
  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.saveSuccess = false;
    this.saveError = false;
    
    // If canceling edit, restore original product
    if (!this.isEditing && this.originalProduct) {
      this.product = { ...this.originalProduct };
    }
  }

  // ✅ SAVE PRODUCT METHOD
  saveProduct() {
    this.saveSuccess = false;
    this.saveError = false;
    
    if (this.product) {
      try {
        // Call service to update product
        const updated = this.productService.updateProduct(this.product);
        
        if (updated) {
          this.saveSuccess = true;
          this.isEditing = false;
          // Update original product copy
          this.originalProduct = { ...this.product };
          
          // Hide success message after 3 seconds
          setTimeout(() => {
            this.saveSuccess = false;
          }, 3000);
        } else {
          this.saveError = true;
        }
      } catch (error) {
        this.saveError = true;
        console.error('Error saving product:', error);
      }
    }
  }

  // ✅ CANCEL EDIT METHOD
  cancelEdit() {
    this.isEditing = false;
    this.saveSuccess = false;
    this.saveError = false;
    
    // Restore original product
    if (this.originalProduct) {
      this.product = { ...this.originalProduct };
    }
  }

  // ✅ HAS CHANGES METHOD
  hasChanges(): boolean {
    if (!this.product || !this.originalProduct) return false;
    return JSON.stringify(this.product) !== JSON.stringify(this.originalProduct);
  }
}
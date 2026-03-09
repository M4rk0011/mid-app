import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Gaming Laptop', category: 'Electronics', price: 45000, stock: 15, status: 'Available', description: 'High-performance gaming laptop with RTX 3060', rating: 4.5 },
    { id: 2, name: 'Wireless Mouse', category: 'Accessories', price: 800, stock: 0, status: 'Out of Stock', description: 'Ergonomic wireless mouse with USB receiver', rating: 4.2 },
    { id: 3, name: 'Mechanical Keyboard', category: 'Accessories', price: 2500, stock: 5, status: 'Limited', description: 'RGB mechanical keyboard with blue switches', rating: 4.7 },
    { id: 4, name: 'Monitor 24"', category: 'Electronics', price: 8500, stock: 8, status: 'Available', description: 'Full HD IPS monitor with HDMI', rating: 4.3 },
    { id: 5, name: 'USB-C Hub', category: 'Accessories', price: 1200, stock: 20, status: 'Available', description: '7-in-1 USB-C hub with HDMI and USB ports', rating: 4.4 },
    { id: 6, name: 'External SSD', category: 'Storage', price: 3500, stock: 0, status: 'Out of Stock', description: '1TB portable SSD, USB 3.2', rating: 4.8 },
    { id: 7, name: 'Webcam HD', category: 'Electronics', price: 1800, stock: 3, status: 'Limited', description: '1080p webcam with microphone', rating: 4.1 },
    { id: 8, name: 'Headset', category: 'Audio', price: 2200, stock: 12, status: 'Available', description: 'Gaming headset with 7.1 surround sound', rating: 4.5 },
    { id: 9, name: 'Mouse Pad', category: 'Accessories', price: 350, stock: 30, status: 'Available', description: 'Large gaming mouse pad with stitched edges', rating: 4.0 },
    { id: 10, name: 'Laptop Stand', category: 'Accessories', price: 950, stock: 7, status: 'Available', description: 'Adjustable aluminum laptop stand', rating: 4.6 }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
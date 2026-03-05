export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'Available' | 'Out of Stock' | 'Limited';
  description: string;
  imageUrl?: string; // optional
  rating?: number; // optional
}
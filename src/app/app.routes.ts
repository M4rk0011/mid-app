import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Interpolation } from './interpolation';
import { PropertyBinding } from './property-binding';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'interpolation', component: Interpolation },
  { path: 'property-binding', component: PropertyBinding },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'products', component: ProductsComponent }
];
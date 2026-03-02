import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Interpolation } from './interpolation';
import { PropertyBinding } from './property-binding';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page
  { path: 'home', redirectTo: '', pathMatch: 'full' }, // Redirect /home to ''
  { path: 'interpolation', component: Interpolation },
  { path: 'property-binding', component: PropertyBinding }
];
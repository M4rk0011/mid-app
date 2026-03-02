import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface User {
  name?: string | undefined;
  position?: string;
  department?: string;
  details?: {
    role: string | undefined;
  }
}

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './interpolation.html',
  // Remove or comment out this line
  // styleUrls: ['./interpolation.css']
})
export class Interpolation {
  title: string = 'Angular Data Binding Demo';
  studentName: string = 'Maria Santos';
  courseCode: string = 'APPDEV1';
  currentYear: number = new Date().getFullYear();
  roles = ['Admin', 'Editor', 'Viewer'];
  text: string = "{{expression}}";
  curly: string = "{{ }}";
  common: string = "{{ userName }}";
  methods: string = "{{ getStatus() }}";
  dotnot: string = "{{ user.name }}";
  dotnot2: string = "{{ user?.profile?.email }}";
  jpipe: string = "{{ user | json }}";
  isActive: boolean = false;

  user: User = {
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'IT',
    details: { role: 'Admin' }
  };

  countries = [
    { id: 'PH', name: 'Philippines' },
    { id: 'US', name: 'United States' },
    { id: 'JP', name: 'Japan' }
  ];
  selectedCountryId = 'PH';

  skills = ['Angular', 'TypeScript', 'RxJS'];

  projects = [
    { id: 1, name: 'Dashboard' },
    { id: 2, name: 'Mobile App' }
  ];

  getWelcomeMessage(): string {
    return `Welcome, ${this.studentName}! Today we learn data binding.`;
  }
}
import { Routes } from '@angular/router';
import { Certifications } from './certifications/certifications.component';
import { About } from './about/about.component';
import { Projects } from './projects/projects.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'certifications', component: Certifications },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
];

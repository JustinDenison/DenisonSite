import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { Certifications } from './certifications/certifications.component';
import { About } from './about/about.component';
import { Projects } from './projects/projects.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, data: { title: 'Home' } },
  { path: 'certifications', component: Certifications, data: { title: 'Certifications' } },
  { path: 'about', component: About, data: { title: 'About Me' } },
  { path: 'projects', component: Projects, data: { title: 'Projects' } },
];

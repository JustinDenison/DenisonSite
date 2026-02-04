import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  standalone: true,
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class Socials {
  // Edit these values directly in this file to set your links and page summary
  facebook = ''; // e.g. 'https://facebook.com/your-profile'
  instagram = ''; // e.g. 'https://instagram.com/your-profile'
  linkedin = ''; // e.g. 'https://www.linkedin.com/in/your-profile'
  github = ''; // e.g. 'https://github.com/your-username'

  // Add a short description/summary about your social profiles here
  summary = 'Add a short summary about your social profiles here.';
}

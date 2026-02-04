import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

interface SocialProfile {
  name: string;
  url: string;
  icon: string;
  color: string;
  profileImage?: string;
}

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class Socials {
  socials: SocialProfile[] = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/jus.booly',
      icon: 'M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.96 0 1.97.17 1.97.17v2.16h-1.1c-1.1 0-1.44.68-1.44 1.38V12h2.45l-.39 2.9h-2.06v7A10 10 0 0022 12z',
      color: '#1877F2',
      profileImage: '/assets/profiles/facebook.jpg'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jus.booly/',
      icon: 'instagram',
      color: 'linear-gradient(45deg,#f58529,#dd2a7b,#8134af)',
      profileImage: '/assets/profiles/instagram.jpg'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/justin-denison/',
      icon: 'M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.8 2.6 4.8 6V21h-4v-5.3c0-1.3 0-3-1.8-3-1.9 0-2.2 1.5-2.2 2.9V21H9z',
      color: '#0A66C2',
      profileImage: '/assets/profiles/linkedin.jpg'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/JustinDenison',
      icon: 'M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-1.7c-3.3.7-4-1.4-4-1.4-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.8-1.4-2.7-.3-5.6-1.3-5.6-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0C17.8 4.1 18.8 4.4 18.8 4.4c.6 1.7.2 3 .1 3.3.8.9 1.2 1.9 1.2 3.2 0 4.6-2.9 5.6-5.6 5.9.4.3.8.9.8 1.8v2.6c0 .2.2.6.8.5A12 12 0 0012 .5z',
      color: '#161614',
      profileImage: '/assets/profiles/github.jpg'
    }
  ];

  summary = 'Connect with me on social media. Add profile images in the /assets/profiles/ directory (facebook.jpg, instagram.jpg, linkedin.jpg, github.jpg).';
}

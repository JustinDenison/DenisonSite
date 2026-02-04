import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [NgIf],
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class Socials {
  facebook = 'https://www.facebook.com/jus.booly';
  instagram = 'https://www.instagram.com/jus.booly/';
  linkedin = 'https://www.linkedin.com/in/justin-denison/';
  github = 'https://github.com/JustinDenison';

  // Add a short description/summary about your social profiles here
  summary = 'Add a short summary about your social profiles here.';
}

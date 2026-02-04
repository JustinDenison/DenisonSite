import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class Socials implements OnInit {
  facebook = '';
  instagram = '';
  linkedin = '';
  github = '';

  ngOnInit() {
    this.facebook = localStorage.getItem('social:facebook') ?? '';
    this.instagram = localStorage.getItem('social:instagram') ?? '';
    this.linkedin = localStorage.getItem('social:linkedin') ?? '';
    this.github = localStorage.getItem('social:github') ?? '';
  }

  save() {
    localStorage.setItem('social:facebook', this.facebook);
    localStorage.setItem('social:instagram', this.instagram);
    localStorage.setItem('social:linkedin', this.linkedin);
    localStorage.setItem('social:github', this.github);
  }

  clear() {
    this.facebook = '';
    this.instagram = '';
    this.linkedin = '';
    this.github = '';
    this.save();
  }
}

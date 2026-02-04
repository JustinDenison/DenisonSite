import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface SocialProfile {
  name: string;
  assetPath: string;
  description: string;
  html?: SafeHtml;
  loading: boolean;
}

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class Socials implements OnInit {
  profiles: SocialProfile[] = [
    {
      name: 'Facebook',
      assetPath: '/assets/profiles/facebook.html',
      description: 'My Facebook profile',
      loading: true
    },
    {
      name: 'Instagram',
      assetPath: '/assets/profiles/instagram.html',
      description: 'My Instagram profile',
      loading: true
    },
    {
      name: 'LinkedIn',
      assetPath: '/assets/profiles/linkedin.html',
      description: 'My LinkedIn profile',
      loading: true
    },
    {
      name: 'GitHub',
      assetPath: '/assets/profiles/github.html',
      description: 'My GitHub profile',
      loading: true
    }
  ];

  summary = 'Live previews of my social media profiles - scroll through each one!';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadProfiles();
  }

  loadProfiles() {
    this.profiles.forEach((profile) => {
      this.http.get(profile.assetPath, { responseType: 'text' }).subscribe({
        next: (html) => {
          profile.html = this.sanitizer.bypassSecurityTrustHtml(html);
          profile.loading = false;
        },
        error: (error) => {
          console.log(`Failed to load ${profile.name}:`, error);
          profile.loading = false;
          profile.html = this.sanitizer.bypassSecurityTrustHtml(
            `<div style="padding: 2rem; text-align: center; color: #999;">
              Profile not found. Please add ${profile.assetPath}
            </div>`
          );
        }
      });
    });
  }
}

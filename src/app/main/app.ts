import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, RouterLink, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('DenisonSite');
  private navSub?: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.navSub = this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      let rt = this.route;
      while (rt.firstChild) {
        rt = rt.firstChild;
      }
      const pageTitle = rt.snapshot.data?.['title'] ?? '';
      const site = 'DenisonSite';
      const newTitle = pageTitle ? `${pageTitle} — ${site}` : site;
      this.titleService.setTitle(newTitle);
      this.title.set(site);
    });
  }

  ngOnDestroy() {
    this.navSub?.unsubscribe();
  }
}

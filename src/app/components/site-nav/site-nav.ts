import { Component, signal } from '@angular/core';
import { NAV_LINKS } from '../../data/portfolio';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.html',
  styleUrl: './site-nav.css',
})
export class SiteNav {
  readonly nav = NAV_LINKS;
  readonly mobileOpen = signal(false);

  toggleMobile(): void {
    this.mobileOpen.update((open) => !open);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }
}

import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  activeSection = 'home';

  constructor(
    public themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const sections = [
      'home',
      'about',
      'skills',
      'projects',
      'certifications',
      'contact'
    ];

    for (const section of sections) {

      const element = document.getElementById(section);

      if (element) {

        const rect = element.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
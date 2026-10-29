import {
  Inject,
  Injectable,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  private darkMode = true;

  toggleTheme(): void {

    this.darkMode = !this.darkMode;

    if (isPlatformBrowser(this.platformId)) {

      if (this.darkMode) {
        document.body.classList.remove('light-theme');
      } else {
        document.body.classList.add('light-theme');
      }

    }
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}
import { Component, inject, signal, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly lang = inject(LanguageService);
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected readonly links = [
    { id: 'home', key: 'home' as const },
    { id: 'about', key: 'about' as const },
    { id: 'skills', key: 'skills' as const },
    { id: 'education', key: 'education' as const },
    { id: 'projects', key: 'projects' as const },
    { id: 'certifications', key: 'certifications' as const },
    { id: 'contact', key: 'contact' as const },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleLang(): void {
    this.lang.toggleLang();
  }
}

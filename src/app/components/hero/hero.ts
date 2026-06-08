import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-hero',
  imports: [ScrollReveal],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly lang = inject(LanguageService);
}

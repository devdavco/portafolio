import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-certifications',
  imports: [ScrollReveal],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
  protected readonly lang = inject(LanguageService);
  protected readonly placeholders = [1, 2];
}

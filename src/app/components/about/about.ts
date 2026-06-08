import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-about',
  imports: [ScrollReveal],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly lang = inject(LanguageService);
}

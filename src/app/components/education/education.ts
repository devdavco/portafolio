import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-education',
  imports: [ScrollReveal],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  protected readonly lang = inject(LanguageService);
}

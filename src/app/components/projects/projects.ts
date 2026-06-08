import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-projects',
  imports: [ScrollReveal],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly lang = inject(LanguageService);
  protected readonly placeholders = [1, 2, 3];
}

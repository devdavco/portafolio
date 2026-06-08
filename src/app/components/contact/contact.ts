import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-contact',
  imports: [ScrollReveal],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly lang = inject(LanguageService);
  protected readonly email = 'hola@davidcorrales.dev';
  protected readonly linkedin = 'https://www.linkedin.com/in/juandavidcorrales/';
  protected readonly github = 'https://github.com/devdavco';
}

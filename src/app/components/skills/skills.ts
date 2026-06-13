import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { ScrollReveal } from '../../directives/scroll-reveal';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [ScrollReveal],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly lang = inject(LanguageService);

  protected readonly skills: Skill[] = [

    { name: 'Java', icon: 'devicon-java-plain' },
    { name: 'Git / GitHub', icon: 'devicon-git-plain' },
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' }
    //{ name: 'SQL', icon: 'devicon-postgresql-plain' }
  ];
}

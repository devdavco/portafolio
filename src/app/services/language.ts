import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'es' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    education: string;
    projects: string;
    certifications: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    subtitle: string;
    cta: string;
    ctaProjects: string;
  };
  about: {
    title: string;
    text: string;
    location: string;
    interests: string[];
  };
  skills: {
    title: string;
    subtitle: string;
    level: string;
  };
  education: {
    title: string;
    university: string;
    degree: string;
    status: string;
  };
  projects: {
    title: string;
    subtitle: string;
    placeholder: string;
    comingSoon: string;
  };
  certifications: {
    title: string;
    subtitle: string;
    placeholder: string;
    comingSoon: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    connect: string;
  };
  footer: {
    made: string;
  };
}

const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      education: 'Educación',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy David Corrales',
      role: 'Estudiante de Ingeniería Multimedia',
      subtitle:
        'Apasionado por el aprendizaje constante, el deporte y el desarrollo de software.',
      cta: 'Contáctame',
      ctaProjects: 'Ver proyectos',
    },
    about: {
      title: 'Sobre mí',
      text: 'Me gusta el deporte, practico senderismo con regularidad al igual que la calistenia. Me estoy enfocando en aprender Java y estoy finalizando la carrera en Ingeniería Multimedia. Mi interés es estar en constante aprendizaje y vencer cualquier reto que me pueda surgir.',
      location: 'Cali, Colombia',
      interests: ['Senderismo', 'Calistenia', 'Java', 'Aprendizaje continuo'],
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Tecnologías que estoy aprendiendo y practicando',
      level: 'Principiante',
    },
    education: {
      title: 'Educación',
      university: 'Universidad San Buenaventura Cali',
      degree: 'Ingeniería Multimedia',
      status: 'Finalizando carrera',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Algunos de mis trabajos y experimentos',
      placeholder: 'Proyecto próximo',
      comingSoon: 'Próximamente agregaré mis proyectos aquí.',
    },
    certifications: {
      title: 'Certificaciones',
      subtitle: 'Formación y credenciales',
      placeholder: 'Certificación próxima',
      comingSoon: 'Próximamente agregaré mis certificaciones aquí.',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes un proyecto o quieres conectar? Escríbeme.',
      email: 'Enviar correo',
      connect: 'Conecta conmigo',
    },
    footer: {
      made: 'Hecho con Angular por David Corrales',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      education: 'Education',
      projects: 'Projects',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm David Corrales",
      role: 'Multimedia Engineering Student',
      subtitle:
        'Passionate about continuous learning, sports, and software development.',
      cta: 'Contact me',
      ctaProjects: 'View projects',
    },
    about: {
      title: 'About me',
      text: 'I enjoy sports and practice hiking regularly, as well as calisthenics. I am focusing on learning Java and finishing my Multimedia Engineering degree. I am always eager to learn and overcome any challenge that comes my way.',
      location: 'Cali, Colombia',
      interests: ['Hiking', 'Calisthenics', 'Java', 'Continuous learning'],
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies I am learning and practicing',
      level: 'Beginner',
    },
    education: {
      title: 'Education',
      university: 'Universidad San Buenaventura Cali',
      degree: 'Multimedia Engineering',
      status: 'Finishing degree',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Some of my work and experiments',
      placeholder: 'Upcoming project',
      comingSoon: 'I will add my projects here soon.',
    },
    certifications: {
      title: 'Certifications',
      subtitle: 'Training and credentials',
      placeholder: 'Upcoming certification',
      comingSoon: 'I will add my certifications here soon.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a project or want to connect? Reach out.',
      email: 'Send email',
      connect: 'Connect with me',
    },
    footer: {
      made: 'Built with Angular by David Corrales',
    },
  },
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly currentLang = signal<Lang>('es');
  readonly t = computed(() => translations[this.currentLang()]);

  toggleLang(): void {
    this.currentLang.update((lang) => (lang === 'es' ? 'en' : 'es'));
  }

  setLang(lang: Lang): void {
    this.currentLang.set(lang);
  }
}

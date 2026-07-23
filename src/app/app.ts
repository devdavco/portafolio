import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly name = 'David Corrales';
  protected readonly role = 'Estudiante de Ingeniería Multimedia';
  protected readonly year = new Date().getFullYear();

  protected readonly education = {
    degree: 'Ingeniería Multimedia',
    university: 'Universidad San Buenaventura Cali',
    status: 'Finalizando carrera',
    location: 'Cali, Colombia',
  };

  protected readonly learning = ['SAP ABAP', 'Java'];

  protected readonly email = 'hola@davidcorrales.dev';
  protected readonly linkedin = 'https://www.linkedin.com/in/juandavidcorrales/';
  protected readonly github = 'https://github.com/devdavco';
}

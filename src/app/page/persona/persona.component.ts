import { Component, OnInit } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
})
export class PersonaComponent implements OnInit {
  personas: PersonaInterface[] = [];
  tituloTabla: string = 'Lista de Personas';
  columnas: string[] = [];

  ngOnInit(): void {
    this.personas = [
      {
        nombre: 'Juanito Perez',
        fechaNacimiento: new Date('2023-04-05'),
        tipoDocumento: 'Cédula de Ciudadanía',
        numeroDocumento: '2020',
        numeroCelular: 3115568974,
        email: 'correo1@gmail.com',
        peso: '70kg',
      },
      {
        nombre: 'María García',
        fechaNacimiento: new Date('1990-12-15'),
        tipoDocumento: 'Pasaporte',
        numeroDocumento: '123456789',
        numeroCelular: 3009876543,
        email: 'maria.garcia@example.com',
      },
      {
        nombre: 'Pedro López',
        fechaNacimiento: new Date('1985-07-20'),
        tipoDocumento: 'Tarjeta de Identidad',
        numeroDocumento: '78901234',
        numeroCelular: 3151234567,
        email: 'pedro.lopez@example.com',
        peso: '80kg',
      },
      {
        nombre: 'Ana Martínez',
        fechaNacimiento: new Date('1995-08-20'),
        tipoDocumento: 'Cédula de Ciudadanía',
        numeroDocumento: '987654321',
        numeroCelular: 3207654321,
        email: 'ana.martinez@example.com',
      },
    ];

    this.obtenerColumnas(this.personas);
  }

  obtenerColumnas(personas: PersonaInterface[]) {
    if (personas.length > 0) {
      this.columnas = Object.keys(personas[0]);
    }
  }
}

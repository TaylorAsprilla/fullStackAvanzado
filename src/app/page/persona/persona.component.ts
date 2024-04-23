import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {

  personas: string[] = [
    'Juan Pérez',
    'María García',
    'Carlos Martínez',
    'Ana López',
    'Luis Rodríguez',
    'Laura Sánchez',
    'Pedro Fernández',
    'Sofía González',
    'Diego Díaz',
    'Elena Ruiz',
  ];



}

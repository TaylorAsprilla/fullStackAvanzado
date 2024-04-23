import { Component } from '@angular/core';

@Component({
  selector: 'app-nombres',
  standalone: true,
  imports: [],
  templateUrl: './nombres.component.html',
  styleUrl: './nombres.component.css',
})
export class NombresComponent {
  nombres: string[] = [
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

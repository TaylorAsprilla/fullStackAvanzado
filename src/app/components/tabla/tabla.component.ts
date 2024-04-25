import { Component, Input, OnInit, input } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { DatePipe } from '@angular/common';
import { ProductoInterface } from '../../core/interface/producto.interface';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() titulo: string = '';
  @Input() columnas: string[] = [];

  ngOnInit(): void {
    console.log('Personas en el componente hijo', this.data);
  }

  formatearNombreDeColumnas(columna: string): string {
    // Dividir el nombre por mayúsculas y unir con espacios
    return columna.replace(/([a-z])([A-Z])/g, '$1 $2').toLocaleUpperCase();
  }

  isFecha(value: any): boolean {
    return value instanceof Date;
  }
}

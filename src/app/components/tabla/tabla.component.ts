import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  @Input() titulo: string = '';
  @Input() columnas: string[] = [];

  @Output() onInformacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEliminar: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEditar: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.data = changes['data'].currentValue;
    }
  }

  formatearNombreDeColumnas(columna: string): string {
    // Dividir el nombre por mayúsculas y unir con espacios
    return columna.replace(/([a-z])([A-Z])/g, '$1 $2').toLocaleUpperCase();
  }

  isFecha(value: any): boolean {
    return value instanceof Date;
  }

  enviarInformacion(data: any) {
    //Emite el evento con la información de *data*
    this.onInformacion.emit(data);
  }

  eliminar(data: any) {
    this.onEliminar.emit(data);
  }

  editar(data: any) {
    this.onEditar.emit(data);
  }
}

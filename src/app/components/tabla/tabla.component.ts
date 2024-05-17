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

  ngOnInit(): void {
    console.info('Información que llega del padre');
    console.log(this.data);
    console.log(this.titulo);
    console.log(this.columnas);
    // this.columnas.push('acciones');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente hijo', changes);
  }

  formatearNombreDeColumnas(columna: string): string {
    // Dividir el nombre por mayúsculas y unir con espacios
    return columna.replace(/([a-z])([A-Z])/g, '$1 $2').toLocaleUpperCase();
  }

  isFecha(value: any): boolean {
    return value instanceof Date;
  }

  enviarInformacion(data: any) {
    console.log('Data componente hijo', data);
    //Emite el evento con la información de *data*
    this.onInformacion.emit(data);
  }
}

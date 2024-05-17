import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProductoModel } from '../../core/models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private httpClient: HttpClient) {}

  getProductos() {
    return this.httpClient
      .get<{ ok: boolean; productos: ProductoModel[] }>(
        'http://localhost:4000/api/v1/producto'
      )
      .pipe(map((respuesta) => respuesta.productos));
  }
}

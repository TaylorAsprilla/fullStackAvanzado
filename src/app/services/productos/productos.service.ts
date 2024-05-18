import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProductoModel } from '../../core/models/producto.model';
import { environment } from '../../../environments/environment.development';
import { crearProductoInterface } from '../../core/interface/producto.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private httpClient: HttpClient) {}

  getProductos() {
    return this.httpClient
      .get<{ ok: boolean; productos: ProductoModel[] }>(`${base_url}/producto`)
      .pipe(map((respuesta) => respuesta.productos));
  }

  crearProductos(producto: crearProductoInterface) {
    return this.httpClient.post(`${base_url}/producto`, producto);
  }
}

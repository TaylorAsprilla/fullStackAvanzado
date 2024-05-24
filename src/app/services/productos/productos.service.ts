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

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token,
      },
    };
  }

  getProductos() {
    return this.httpClient
      .get<{ ok: boolean; productos: ProductoModel[] }>(
        `${base_url}/producto`,
        this.headers
      )
      .pipe(map((respuesta) => respuesta.productos));
  }

  getUnProducto(id: string) {
    return this.httpClient
      .get<{ ok: boolean; producto: ProductoModel }>(
        `${base_url}/producto/${id}`,
        this.headers
      )
      .pipe(map((respuesta) => respuesta.producto));
  }

  crearProductos(producto: crearProductoInterface) {
    return this.httpClient.post(`${base_url}/producto`, producto, this.headers);
  }

  actualizarProducto(producto: ProductoModel) {
    return this.httpClient.put(
      `${base_url}/producto/${producto._id}`,
      producto,
      this.headers
    );
  }

  eliminarProducto(id: string) {
    return this.httpClient.delete(`${base_url}/producto/${id}`, this.headers);
  }
}

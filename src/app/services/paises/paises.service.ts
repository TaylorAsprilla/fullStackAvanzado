import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map } from 'rxjs';
import { PaisModel } from '../../core/models/pais.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
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

  getPaises() {
    return this.httpClient
      .get<{ ok: boolean; paises: PaisModel[] }>(
        `${base_url}/pais`,
        this.headers
      )
      .pipe(map((respuesta) => respuesta.paises));
  }
}

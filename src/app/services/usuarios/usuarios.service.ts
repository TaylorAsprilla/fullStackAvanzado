import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { LoginInterface } from '../../core/interface/login.interface';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { PATH } from '../../core/enum/path.enum';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private router = inject(Router);

  constructor(private httpClient: HttpClient) {}

  login(login: LoginInterface) {
    return this.httpClient.post(`${base_url}/login`, login).pipe(
      tap((resp: any) => {
        sessionStorage.setItem('token', resp.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');

    //TODO debe navegar al login
    this.router.navigateByUrl(PATH.HOME);
  }

  getUsuarios() {
    return this.httpClient.get(`${base_url}/usuario`);
  }
}

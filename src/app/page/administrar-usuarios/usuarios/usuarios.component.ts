import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { TablaComponent } from '../../../components/tabla/tabla.component';
import { UsuarioModel } from '../../../core/models/usuario.model';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { Router } from '@angular/router';
import { PATH } from '../../../core/enum/path.enum';
import { RolDirective } from '../../../core/directives/rol/rol.directive';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TablaComponent, RolDirective],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit, OnDestroy {
  usuarios: UsuarioModel[] = [];
  columnas: string[] = [];
  informacion: UsuarioModel;

  usuarioSubscription: Subscription;

  private usuarioService = inject(UsuariosService);
  private router = inject(Router);

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  ngOnDestroy(): void {
    this.usuarioSubscription?.unsubscribe();
  }

  cargarUsuarios() {
    this.usuarioSubscription = this.usuarioService
      .getUsuarios()
      .subscribe((resp: any) => {
        this.usuarios = resp.usuarios;
        this.obtenerColumnas(this.usuarios);
      });
  }

  obtenerColumnas(usuarios: UsuarioModel[]) {
    if (usuarios.length > 0) {
      this.columnas = Object.keys(usuarios[0]);
    }
  }

  recibirInformacion(data: UsuarioModel) {
    this.informacion = data;
    Swal.fire({
      title: 'Información',
      html: `<ul>
              <li> <b>Nombre: </b>${this.informacion.nombre}</li>

              <li> <b>Email: </b>${this.informacion.email}</li>

              <li> <b>Tipo de Documento: </b>${this.informacion.tipoDocumento}</li>

              <li> <b>Numero de Documento: </b>${this.informacion.numeroDocumento}</li>
            </ul>`,
      icon: 'success',
    });
  }

  irAcrearUsuarios() {
    this.router.navigateByUrl(`${PATH.CREAR_USUARIOS}/nuevo`);
  }

  editarUsuario(data: UsuarioModel) {
    this.router.navigateByUrl(`${PATH.CREAR_USUARIOS}/${data._id}`);
  }

  eliminarUsuario(data: UsuarioModel) {
    this.usuarioService.eliminarUsuario(data._id).subscribe({
      next: async (res: any) => {
        Swal.fire(
          'Usuario',
          `El usuario ${data.nombre} ha sido eliminado con éxito`,
          'warning'
        );
        await this.cargarUsuarios();
      },
      error: (error) => {
        Swal.fire('Error', `${error.error.msg}`, 'error');
      },
    });
  }
}

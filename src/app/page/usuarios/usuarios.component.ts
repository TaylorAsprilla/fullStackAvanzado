import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { UsuarioModel } from '../../core/models/usuario.model';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit, OnDestroy {
  usuarios: UsuarioModel[] = [];
  columnas: string[] = [];
  informacion: UsuarioModel;

  usuarioSubscription: Subscription;

  usuarioService = inject(UsuariosService);

  ngOnInit(): void {
    this.usuarioSubscription = this.usuarioService
      .getUsuarios()
      .subscribe((resp: any) => {
        this.usuarios = resp.usuarios;
        this.obtenerColumnas(this.usuarios);
      });
  }

  ngOnDestroy(): void {
    this.usuarioSubscription?.unsubscribe();
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
}

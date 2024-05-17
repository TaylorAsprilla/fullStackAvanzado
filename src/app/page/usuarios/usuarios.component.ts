import { Component, OnInit, inject } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { UsuarioModel } from '../../core/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit {
  usuarios: UsuarioModel[] = [];
  columnas: string[] = [];

  usuarioService = inject(UsuariosService);

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((resp: any) => {
      this.usuarios = resp.usuarios;
      console.log('Usuarios de mi api', this.usuarios);
    });

    this.obtenerColumnas(this.usuarios);
  }
  obtenerColumnas(usuarios: UsuarioModel[]) {
    if (usuarios.length > 0) {
      this.columnas = Object.keys(usuarios[0]);
      console.log(this.columnas);
    }
  }
}

import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';

@Directive({
  selector: '[appRol]',
  standalone: true,
})
export class RolDirective implements OnInit {
  private usuario: UsuarioModel;
  private roles: string[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    console.log('Actualizando la vista');
    this.usuario = this.usuariosService.usuario;
    console.log('Actualizando la vista', this.usuario);
    this.actualizarVista();
  }

  @Input('appRol')
  set appRol(valor: string[]) {
    this.roles = valor;
  }

  private actualizarVista(): void {
    this.viewContainer.clear();
    if (this.validarRoles()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private validarRoles(): boolean {
    let tieneRoles: boolean = false;

    if (this.usuario && this.usuario.rol) {
      for (let [index, rol] of this.roles.entries()) {
        if (this.usuario.rol.toUpperCase() === rol) {
          tieneRoles = true;
          return tieneRoles;
        }
      }
    }
    return tieneRoles;
  }
}

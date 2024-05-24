import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuInfoInterface } from '../../core/interface/menu_info.interface';
import { MenuRoutes } from '../../menu/menu';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  menuItems: MenuInfoInterface[] = [];

  private usuarioServices = inject(UsuariosService);

  ngOnInit(): void {
    this.menuItems = MenuRoutes;
  }

  cerrarSesion() {
    this.usuarioServices.logout();
  }
}

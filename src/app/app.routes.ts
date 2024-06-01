import { Routes, CanActivateFn } from '@angular/router';
import { PATH } from './core/enum/path.enum';
import { AcercaDeComponent } from './page/acerca-de/acerca-de.component';
import { ArticuloComponent } from './page/articulo/articulo.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { ImagenesComponent } from './page/imagenes/imagenes.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { NombresComponent } from './page/nombres/nombres.component';
import { PersonaComponent } from './page/persona/persona.component';
import { ProductosComponent } from './page/administrar-productos/productos/productos.component';
import { CrearproductosComponent } from './page/administrar-productos/crearproductos/crearproductos.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { productosResolver } from './core/resolvers/productos/productos.resolver';
import { UsuariosComponent } from './page/administrar-usuarios/usuarios/usuarios.component';
import { CrearUsuariosComponent } from './page/administrar-usuarios/crear-usuarios/crear-usuarios.component';
import { paisesResolver } from './core/resolvers/paises/paises.resolver';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: PATH.HOME,
    title: 'Home',
    canActivate: [authGuard],
    children: [
      {
        path: PATH.HOME,
        title: 'Home',
        component: InicioComponent,
      },
      {
        path: PATH.PERSONA,
        title: 'personas',
        component: PersonaComponent,
      },
      {
        path: PATH.USUARIO,
        title: 'Usuarios',
        component: UsuariosComponent,
      },

      //TODO
      // Editar usuario
      // localhost:4200/191928282

      // Crear Usuario
      // localhost:4200/nuevo
      {
        path: `${PATH.CREAR_USUARIOS}/:id`,
        title: 'Crear Usuarios',
        component: CrearUsuariosComponent,
        resolve: {
          paises: paisesResolver,
        },
      },
      {
        path: PATH.PRODUCTOS,
        title: 'Mis productos',
        component: ProductosComponent,
        resolve: {
          productos: productosResolver,
        },
      },
      {
        path: PATH.CREAR_PRODUCTOS,
        title: 'Crear productos',
        component: CrearproductosComponent,
      },
      {
        path: PATH.IMAGEN,
        title: 'imagenes',
        component: ImagenesComponent,
      },
      {
        path: PATH.NOMBRE,
        title: 'nombres',
        component: NombresComponent,
      },
      {
        path: PATH.ARTICULO,
        title: 'articulos',
        component: ArticuloComponent,
      },
      {
        path: PATH.ACERCADE,
        title: '¿Quienes Somos?',
        component: AcercaDeComponent,
      },
      {
        path: PATH.CONTACTO,
        title: 'contacto',
        component: ContactoComponent,
      },
    ],
  },
];

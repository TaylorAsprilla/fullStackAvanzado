import { PATH } from '../core/enum/path.enum';
import { MenuInfoInterface } from '../core/interface/menu_info.interface';

export const MenuRoutes: MenuInfoInterface[] = [
  {
    path: PATH.HOME,
    title: 'Home',
    icon: 'fa-solid fa-house',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.PERSONA,
    title: 'Persona',
    classCss: '',
    subMenu: [
      {
        path: PATH.IMAGEN,
        title: 'Imagen',
        icon: 'fa-solid fa-user',
        classCss: '',
        subMenu: [],
      },
    ],
  },
  {
    path: PATH.USUARIO,
    title: 'Ver Usuarios',
    icon: '',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.PRODUCTOS,
    title: 'Ver Productos',
    icon: '',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.NOMBRE,
    title: 'Nombre',
    icon: '',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.CONTACTO,
    title: 'Contacto',
    icon: '',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.ACERCADE,
    title: 'Acerca De',
    icon: '',
    classCss: '',
    subMenu: [],
  },
];

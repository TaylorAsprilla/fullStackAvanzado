import { PATH } from '../core/enum/path.enum';
import { MenuInfoInterface } from '../core/interface/menu_info.interface';

export const MenuRoutes: MenuInfoInterface[] = [
  {
    path: PATH.HOME,
    title: 'Home',
    icon: '',
    classCss: '',
    submenu: [],
  },

  {
    path: PATH.PERSONA,
    title: 'Persona',
    icon: '',
    classCss: '',
    submenu: [
      {
        path: PATH.IMAGEN,
        title: 'Imagen',
        icon: '',
        classCss: '',
        submenu: [],
      },
    ],
  },
  {
    path: PATH.IMAGEN,
    title: 'Imagen',
    icon: '',
    classCss: '',
    submenu: [],
  },
  {
    path: PATH.NOMBRE,
    title: 'Nombre',
    icon: '',
    classCss: '',
    submenu: [],
  },
  {
    path: PATH.CONTACTO,
    title: 'Contacto',
    icon: '',
    classCss: '',
    submenu: [],
  },
  {
    path: PATH.ACERCADE,
    title: 'AcercaDe',
    icon: '',
    classCss: '',
    submenu: [],
  },
];

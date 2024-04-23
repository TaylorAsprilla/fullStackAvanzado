export interface MenuInfoInterface {
  path: string;
  title: string;
  icon?: string;
  classCss?: string;
  submenu?: MenuInfoInterface[];
}

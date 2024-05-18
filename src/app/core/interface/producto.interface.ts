export interface ProductoInterface {
  nombre: string;
  sku: string;
  cantidad: number;
  precio: number;
  createAt: Date;
}

export interface crearProductoInterface {
  nombre: string;
  sku: string;
  cantidad: number;
  precio: number;
  distribuidor: distribuidorInterface;
}

export interface distribuidorInterface {
  nit: string;
  razonSocial: string;
  telefono: number;
  direccion: string;
}

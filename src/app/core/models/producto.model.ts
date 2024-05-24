import { distribuidorInterface } from '../interface/producto.interface';

export class ProductoModel {
  constructor(
    public readonly _id: string,
    public nombre: string,
    public sku: string,
    public cantidad: number,
    public precio: number,
    public distribuidor: distribuidorInterface,
    public createdAt: Date,
    public usuario: {
      _id: string;
      nombre: string;
      email: string;
    },
    public opiniones?: {
      comentarios: string;
      calificacion: number;
    }
  ) {}
}

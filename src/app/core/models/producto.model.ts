export class ProductoModel {
  constructor(
    public nombre: string,
    public sku: string,
    public cantidad: number,
    public precio: number,
    public distribuiddor: {
      nit: string;
      razonSocial: string;
      telefono: number;
      direccion: string;
    },
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

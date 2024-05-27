export interface crearUsuarioInterface {
  nombre: string;
  email: string;
  tipoDocumento: string;
  numeroDocumento: string;
  rol?: string;
  numeroCelular?: number;
  peso?: string;
  fechaNacimiento?: Date;
  password?: string;
}

//Crear un componente que tenga un formulario con los campos
// de crearUsuarioInterface

let diaDeLaSemana: number = 3;
let mensaje: string;

switch (diaDeLaSemana) {
  case 1:
    mensaje = "Lunes";
    break;
  case 2:
    mensaje = "Martes";
    break;
  case 3:
    mensaje = "Miércoles";
    break;
  // ... otros casos ...
  default:
    mensaje = "Día no válido";
    break;
}

console.log(mensaje);

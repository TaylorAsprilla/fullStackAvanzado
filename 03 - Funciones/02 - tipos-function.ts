// Funciones con Parámetros y Tipo de Retorno:

// En este ejemplo, la función multiplicar toma dos parámetros (a y b)
// de tipo número y devuelve un resultado de tipo número.

function multiplicar(a: number, b: number): number {
  return a * b;
}

// Funciones con Parámetros Opcionales:

// La función saludar tiene un parámetro opcional saludo que
// puede ser proporcionado o no al llamar la función.

function saludar(nombre: string, saludo?: string): void {
  if (saludo) {
    console.log(`${saludo}, ${nombre}!`);
  } else {
    console.log(`Hola, ${nombre}!`);
  }
}

// Funciones con Parámetros Predeterminados:

// La función obtenerEdad tiene un parámetro edad con un valor predeterminado
// de 30, que se utilizará si no se proporciona un valor al llamar la función.

function obtenerEdad(nombre: string, edad: number = 30): void {
  console.log(`${nombre} tiene ${edad} años.`);
}

// Funciones con Rest Parameters:

// La función sumarVarios utiliza el operador ... para aceptar un número variable de parámetros
//  y realiza la suma de todos ellos.

function sumarVarios(...numeros: number[]): number {
  return numeros.reduce((total, num) => total + num, 0);
}

// Funciones de Flecha (Arrow Functions):
// Las funciones de flecha proporcionan una sintaxis más concisa
// para funciones anónimas y comparten el contexto léxico del código que las rodea.

const duplicar = (x: number): number => x * 2;

const duplicarDos = (x: number): number => {
  console.log("Una impresión", x * 2);
  return x * 2;
};

// Funciones Recursivas:

// Las funciones recursivas se llaman a sí mismas y son útiles para problemas
// que pueden descomponerse en subproblemas más pequeños.

function factorial(n: number): number {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}



// Ejemplo de una función con desestructuración de objetos
type Persona = { nombre: string; edad: number; ciudad: string };

function procesarDatos(a: number, b: number, persona: Persona): void {
  const { nombre, edad, ciudad } = persona;

  console.log("Parámetro a:", a);
  console.log("Parámetro b:", b);
  console.log("Datos de la persona:");
  console.log(`Nombre: ${nombre}`);
  console.log(`Edad: ${edad}`);
  console.log(`Ciudad: ${ciudad}`);
}

const juan: Persona = { nombre: "Juan", edad: 25, ciudad: "Madrid" };

procesarDatos(1, 2, juan);

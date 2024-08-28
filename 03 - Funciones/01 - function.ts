// En TypeScript, una función es una pieza de código que realiza una tarea específica
// cuando es invocada o llamada. Puedes definir funciones de varias maneras en TypeScript,
// y estas funciones pueden tener parámetros,
// un tipo de retorno y lógica interna para realizar operaciones específicas.

// Declaración de una función sin parámetros y sin tipo de retorno
function saludo(): void {
  console.log("¡Hola!");
}

// Llamada a la función
saludo();

// Declaración de una función con parámetros y tipo de retorno
function sumar(a: number, b: number): number {
  return a + b;
}

// Llamada a la función y uso del resultado
const resultado: number = sumar(5, 3);
console.log("La suma es:", resultado);

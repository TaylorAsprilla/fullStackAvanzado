// En TypeScript, una tupla (tuple) es un tipo de dato que permite representar un
// conjunto fijo y ordenado de elementos, donde cada elemento puede tener un tipo diferente.
// A diferencia de los arrays, las tuplas tienen una longitud fija y los tipos de datos de cada
// elemento están definidos en la declaración de la tupla.

let tupla: [number, string, boolean];
let tuplaDos: [edad: number, nombre: string, activo: boolean];

tupla = [10, "Pedro", true];
tuplaDos = [20, "Juan", false];

console.log(tupla[0]); // Imprime 10
console.log(tuplaDos[0]); // Imprime 20
console.log(tuplaDos[1]); // Imprime "Juan"
console.log(tuplaDos[2]); // Imprime false

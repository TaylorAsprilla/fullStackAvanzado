# Métodos Comunes en TypeScript

En TypeScript, existen varios métodos integrados que facilitan la manipulación y el procesamiento de datos. A continuación, se describen algunos de los métodos más comunes utilizados con arrays, objetos y cadenas de texto.

## Métodos de Arrays

Los arrays en TypeScript proporcionan métodos útiles para realizar operaciones sobre sus elementos:

- **`push(elemento)`**: Agrega un elemento al final del array.

  ```typescript
  let numeros = [1, 2, 3];
  numeros.push(4);
  console.log(numeros); // Resultado: [1, 2, 3, 4]
  ```
  
- **`pop()`**: Elimina y retorna el último elemento del array.

  ```typescript
  let numeros = [1, 2, 3];
  let ultimoElemento = numeros.pop();
  console.log(ultimoElemento); // Resultado: 3
  ```
- **`shift()`**: Elimina y retorna el primer elemento del array.

  ```typescript
  let numeros = [1, 2, 3];
  let primerElemento = numeros.shift();
  console.log(primerElemento); // Resultado: 1
  ```
- **`unshift(elemento)`**: Agrega un elemento al inicio del array.

  ```typescript
  let numeros = [2, 3];
  numeros.unshift(1);
  console.log(numeros); // Resultado: [1, 2, 3]
  ```
- **`concat(array)`**: Combina el array actual con otro array o elementos adicionales y retorna un nuevo array.
- **`slice(inicio, fin)`**: Retorna una parte del array, desde el índice `inicio` hasta el índice `fin` (sin incluir).
- **`forEach(funcion)`**: Ejecuta una función por cada elemento del array.
  ```typescript
  let numeros = [1, 2, 3];
  numeros.forEach(num => console.log(num * 2)); // Imprime el doble de cada número
  
  ```
- **`map(funcion)`**: Crea un nuevo array con los resultados de llamar a una función para cada elemento.

  ```typescript
  let numeros = [1, 2, 3];
  let dobles = numeros.map(num => num * 2);
  console.log(dobles); // Resultado: [2, 4, 6]

  ```
- **`filter(funcion)`**: Crea un nuevo array con elementos que pasan una prueba específica.
  ```typescript
  let numeros = [1, 2, 3, 4, 5];
  let pares = numeros.filter(num => num % 2 === 0);
  console.log(pares); // Resultado: [2, 4]

  ```
- **`find(funcion)`**: Retorna el primer elemento que cumple con una condición.
  ```typescript
  let numeros = [1, 2, 3, 4, 5];
  let encontrado = numeros.find(num => num > 3);
  console.log(encontrado); // Resultado: 4

  ```
- **`indexOf(elemento)`**, **`lastIndexOf(elemento)`**: Retorna el índice de la primera/última ocurrencia del elemento.
- **`includes(elemento)`**: Determina si un array incluye un elemento.
- **`every(funcion)`**, **`some(funcion)`**: Verifica si todos/algunos elementos cumplen con una condición.

## Métodos de Objetos

Los objetos en TypeScript proporcionan métodos útiles para trabajar con propiedades:

- **`Object.keys(objeto)`**: Retorna un array de las claves/propiedades de un objeto.
  
  ```typescript
  let persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };
  let propiedades = Object.keys(persona);
  console.log(propiedades); // Resultado: ['nombre', 'edad', 'ciudad']

  ```
- **`Object.values(objeto)`**: Retorna un array de los valores de las propiedades de un objeto.
  
  ```typescript
  let persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };
  let valores = Object.values(persona);
  console.log(valores); // Resultado: ['Juan', 30, 'Madrid']

  ```
- **`Object.entries(objeto)`**: Retorna un array de pares `[clave, valor]` de las propiedades de un objeto.
  
  ```typescript
  let persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };
  let entradas = Object.entries(persona);
  console.log(entradas); // Resultado: [['nombre', 'Juan'], ['edad', 30], ['ciudad', 'Madrid']]

  ```
- **`Object.assign(destino, origen)`**: Copia las propiedades de objetos fuente a un objeto destino.

## Métodos de Cadenas de Texto

Las cadenas de texto en TypeScript tienen métodos para manipular su contenido:

- **`split(separador)`**: Divide una cadena en un array de subcadenas utilizando un separador.

   ```typescript
   let frase = 'Hola Mundo';
  let palabras = frase.split(' ');
  console.log(palabras); // Resultado: ['Hola', 'Mundo']

  ```
- **`trim()`**: Elimina los espacios en blanco al inicio y al final de una cadena.

  ```typescript
  let texto = '   Hola   ';
  let textoLimpio = texto.trim();
  console.log(textoLimpio); // Resultado: 'Hola'

  ```
- **`toUpperCase()`**, **`toLowerCase()`**: Convierten una cadena a mayúsculas o minúsculas.
- 
   ```typescript
   let mensaje = 'Hola Mundo';
   console.log(mensaje.toUpperCase()); // Resultado: 'HOLA MUNDO'
   console.log(mensaje.toLowerCase()); // Resultado: 'hola mundo'
   ```
- **`indexOf(subcadena)`**, **`lastIndexOf(subcadena)`**: Retorna el índice de la primera/última ocurrencia de una subcadena.
- **`startsWith(prefijo)`**, **`endsWith(sufijo)`**: Verifica si una cadena comienza/termina con un prefijo/sufijo dado.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects

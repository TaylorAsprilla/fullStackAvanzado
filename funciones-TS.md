# Tipos de Funciones en TypeScript

En TypeScript, existen varios tipos de funciones que puedes utilizar para definir comportamientos y modularizar el código.
A continuación, se describen algunos tipos comunes de funciones junto con ejemplos de cada una.

## 1. Funciones con Tipado Explícito

Las funciones en TypeScript pueden definirse con un tipado explícito para los parámetros y el tipo de retorno. Esto permite que el compilador realice verificaciones estáticas de tipo.

```typescript
function sumar(a: number, b: number): number {
    return a + b;
}

// Ejemplo de uso
const resultado = sumar(5, 3);  // resultado será de tipo number (8)
```

## 2. Funciones de Flecha (Arrow Functions)

Las funciones de flecha son una forma más concisa de definir funciones en TypeScript, especialmente útiles para funciones anónimas o funciones que necesitan un contexto de `this` léxico.

```typescript
const doble = (x: number): number => x * 2;

// Ejemplo de uso
const resultadoDoble = doble(4);  // resultadoDoble será de tipo number (8)
```

## 3. Funciones con Parámetros Opcionales

Puedes definir parámetros opcionales en una función en TypeScript utilizando el símbolo ? después del nombre del parámetro. Esto permite llamar a la función con o sin ciertos parámetros.

```typescript
function saludar(nombre: string, apellido?: string): string {
    if (apellido) {
        return `Hola, ${nombre} ${apellido}!`;
    } else {
        return `Hola, ${nombre}!`;
    }
}

// Ejemplos de uso
const saludo1 = saludar("Juan");            // "Hola, Juan!"
const saludo2 = saludar("María", "Gómez");  // "Hola, María Gómez!"
```

## 4. Funciones con Valores por Defecto en los Parámetros

Puedes asignar valores por defecto a los parámetros de una función en TypeScript utilizando el operador = en la declaración de los parámetros.

```typescript
function saludar2(nombre: string, mensaje: string = "Hola"): string {
    return `${mensaje}, ${nombre}!`;
}

// Ejemplos de uso
const saludo3 = saludar2("Ana");           // "Hola, Ana!"
const saludo4 = saludar2("Pedro", "Hey");  // "Hey, Pedro!"
```
## 5. Funciones como Parámetros de Otras Funciones (Callbacks)

En TypeScript, puedes pasar funciones como parámetros a otras funciones, lo que se conoce como funciones de callback.

```typescript
function ejecutarDespues(callback: () => void, tiempo: number): void {
    setTimeout(callback, tiempo);
}

// Función callback para imprimir un mensaje
const imprimirMensaje = (): void => {
    console.log("¡Hola desde la función callback!");
};

// Ejemplo de uso
ejecutarDespues(imprimirMensaje, 2000);  // Se ejecutará imprimirMensaje después de 2 segundos
```
## 6. Funciones Genéricas

Las funciones genéricas permiten trabajar con varios tipos de datos de forma flexible al definir una función.

```typescript
function intercambiar<T>(a: T, b: T): [T, T] {
    return [b, a];
}

// Ejemplo de uso
const resultadoIntercambio = intercambiar<string>("hola", "adiós");  // ["adiós", "hola"]

```

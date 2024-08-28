# Angular

## Instalar la CLI de Angular
```
npm install -g @angular/cli
```

## Crea un espacio de trabajo y una aplicación inicial

```
ng new my-app
```

## Ejecutar la aplicación
```
cd my-app
ng s
ng serve --open
```

## Servidor de Desarrollo

Ejecuta `ng serve` para iniciar el servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Code scaffolding

Ejecuta `ng generate component nombre-componente` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class||interface|enum|module`.

## Construcción o build

Ejecuta `ng build` para construir el proyecto. Los archivos de construcción se almacenarán en el directorio `dist/`.

## Ejecución de Pruebas Unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecución de Pruebas End-to-End

Ejecuta `ng e2e` para ejecutar las pruebas end-to-end a través de una plataforma de tu elección. Para usar este comando, primero necesitas agregar un paquete que implemente capacidades de pruebas end-to-end.

## Ayuda Adicional

Para obtener más ayuda sobre Angular CLI, utiliza `ng help` o visita la página de [Angular CLI Overview and Command Reference](https://angular.io/cli).

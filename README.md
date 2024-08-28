# Curso Full Stack Intermedio

### Instalar TypeScript
Si aún no has instalado TypeScript, puedes hacerlo ejecutando el siguiente comando en tu terminal:

```
npm install -g typescript
```
Este comando instalará TypeScript de forma global en tu sistema.

### Compilar el archivo TypeScript a JavaScript
Una vez que has escrito tu archivo TypeScript (por ejemplo, miarchivo.ts), necesitas compilarlo a JavaScript. Utiliza el siguiente comando:

```
tsc miarchivo.ts
```
Este comando generará un archivo JavaScript llamado miarchivo.js en el mismo directorio

### Ejecutar el archivo JavaScript generado:
```
node miarchivo.js
```
Si deseas evitar el paso de compilación manual, puedes usar herramientas como ts-node, que ejecuta directamente archivos TypeScript sin necesidad de compilar previamente.

Primero, instala ts-node de forma global o local en tu proyecto:
```
npm install -g ts-node
# o
npm install --save-dev ts-node
```

Luego, puedes ejecutar tu archivo directamente con ts-node:

```
ts-node miarchivo.ts
```

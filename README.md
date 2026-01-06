# Frontend – Prueba Técnica Angular

En este proyecto implementé la **parte Frontend** de la prueba técnica utilizando **Angular**, aplicando buenas prácticas de desarrollo, una correcta comunicación entre componentes y un manejo adecuado de flujos de datos reactivos con **RxJS**.

La solución está organizada por **ejercicios**, donde cada uno se encuentra encapsulado en componentes independientes. 

En el menú superior se ven todos los ejercicios de la prueba

## Entorno y versiones utilizadas

El proyecto fue desarrollado utilizando **Angular 21**, junto con un stack moderno alineado a las versiones actuales del framework.

Las versiones exactas utilizadas son las siguientes:

### Framework y herramientas principales

- **Angular**: 21.0.0  
  - @angular/core: ^21.0.0  
  - @angular/common: ^21.0.0  
  - @angular/forms: ^21.0.0  
  - @angular/router: ^21.0.0  
  - @angular/platform-browser: ^21.0.0  
  - @angular/platform-server: ^21.0.0  
  - @angular/compiler: ^21.0.0  

- **Angular CLI**: 21.0.4  
- **Angular Build**: 21.0.4  

### Programación reactiva

- **RxJS**: ~7.8.0  

### Server Side Rendering (SSR)

- **@angular/ssr**: ^21.0.4  
- **Express**: ^5.1.0  

### Entorno de desarrollo

- **Node.js**: compatible con Node 20  
- **npm**: 10.9.2  

### Dependencias de desarrollo

- @angular/compiler-cli: ^21.0.0  
- @types/node: ^20.17.19  
- @types/express: ^5.0.1  
- jsdom: ^27.1.0  
- vitest: ^4.0.8  

## Requisitos

- Node.js 20+
- npm 10+

## Notas técnicas

- El proyecto utiliza **Angular 21 con builders modernos** (`@angular/build`).
- La aplicación está configurada para **Server Side Rendering (SSR)**.
- Se emplea una arquitectura basada en componentes desacoplados y flujos reactivos con RxJS.
- Los estilos están configurados usando **SCSS**.

## Navegación

La aplicación está organizada por rutas para cada ejercicio:

- `/usuarios` → Ejercicio 2 (listado de usuarios)
- `/configuracion` → Ejercicios 1 y 3
- `/rxjs` → Ejercicio 4
- `/flexbox` → Ejercicio 5


## Decisiones técnicas

- Separación por features para mejorar escalabilidad.
- Servicios dedicados para consumo de APIs.
- Comunicación entre componentes usando `@Input` y `@Output`.
- Uso de RxJS para evitar lógica imperativa y suscripciones anidadas.
- Tipado estricto con TypeScript.

## Scripts disponibles

- `npm start` → Ejecuta la aplicación en modo desarrollo
- `npm run build` → Genera el build de producción
- `npm test` → Ejecuta pruebas unitarias


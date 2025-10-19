
// Clase 11 (Unidad 2): Módulos en JavaScript

// Este es el archivo: main.js
// Este es nuestro script principal, que importará y utilizará la funcionalidad de otros módulos.

console.log("Módulo 'main.js' cargado.");

// --- IMPORTACIONES ---

// 1. Importar exportaciones nombradas
// Se usa la sintaxis de desestructuración `{}` para especificar qué se quiere importar.
import { sumar, restar } from './utils.js';

// 2. Importar una exportación por defecto
// Se le puede dar cualquier nombre al importarlo (aunque es buena práctica usar un nombre relacionado).
import multiplicacion from './utils.js';

// Se pueden combinar ambas importaciones en una sola línea:
// import multiplicacion, { sumar, restar } from './utils.js';

// 3. Importar con un alias
// Es útil para evitar colisiones de nombres.
import { PI as constantePI } from './constants.js';

// 4. Importar todo como un objeto (Namespace Import)
// Importa todas las exportaciones nombradas de un módulo en un solo objeto.
import * as Constantes from './constants.js';


// --- USO DE LAS IMPORTACIONES ---

console.log("\n--- Usando las funciones importadas de utils.js ---");
const resultadoSuma = sumar(10, 5);
console.log("10 + 5 =", resultadoSuma);

const resultadoResta = restar(10, 5);
console.log("10 - 5 =", resultadoResta);

const resultadoMultiplicacion = multiplicacion(10, 5);
console.log("10 * 5 =", resultadoMultiplicacion);


console.log("\n--- Usando las constantes importadas de constants.js ---");

// Usando el alias
console.log("Valor de PI con alias:", constantePI);

// Usando el objeto que contiene todo
console.log("URL de la API:", Constantes.URL_API);
console.log("Color primario:", Constantes.Colores.primario);


// --- Manipulación del DOM para confirmar que todo funciona ---

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h2>Módulos ES6 Cargados Correctamente</h2>
    <p>El resultado de sumar 20 + 22 es: <strong>${sumar(20, 22)}</strong></p>
    <p>El valor de PI importado es: <strong>${constantePI}</strong></p>
    <p>La URL de la API es: <strong>${Constantes.URL_API}</strong></p>
  `;
});

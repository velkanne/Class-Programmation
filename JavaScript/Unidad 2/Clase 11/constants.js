
// Clase 11 (Unidad 2): Módulos en JavaScript

// Este es el archivo: constants.js
// Su propósito es exportar valores constantes que pueden ser necesitados en diferentes partes de una aplicación.

console.log("Módulo 'constants.js' cargado.");

// --- EXPORTACIONES NOMBRADAS (NAMED EXPORTS) ---
// Podemos exportar múltiples valores desde un módulo usando la palabra clave `export`.

export const PI = 3.14159;

export const URL_API = "https://api.example.com/v1";

export const Colores = {
  primario: "#007bff",
  secundario: "#6c757d",
  error: "#dc3545"
};

// También se pueden agrupar las exportaciones al final del archivo:
/*
const MI_CONSTANTE = 123;
const OTRA_CONSTANTE = "abc";
export { MI_CONSTANTE, OTRA_CONSTANTE };
*/

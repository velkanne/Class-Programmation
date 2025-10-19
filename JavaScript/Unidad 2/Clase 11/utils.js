
// Clase 11 (Unidad 2): Módulos en JavaScript

// Este es el archivo: utils.js
// Su propósito es agrupar funciones de utilidad que pueden ser reutilizadas.

console.log("Módulo 'utils.js' cargado.");

// --- EXPORTACIONES NOMBRADAS (NAMED EXPORTS) ---
// Exportamos funciones que queremos que estén disponibles para otros módulos.

export function sumar(a, b) {
  return a + b;
}

export const restar = (a, b) => {
  return a - b;
};

// --- EXPORTACIÓN POR DEFECTO (DEFAULT EXPORT) ---
// Un módulo puede tener UNA SOLA exportación por defecto.
// Es útil para exportar la "funcionalidad principal" del módulo.
// No necesita un nombre al ser exportada.

function multiplicar(a, b) {
  return a * b;
}

export default multiplicar;

// También se puede exportar por defecto una clase, un objeto, etc.
/*
export default class Usuario {
  // ...
}
*/

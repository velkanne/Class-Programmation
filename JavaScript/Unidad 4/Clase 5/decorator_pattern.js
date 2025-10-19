

// Clase 5 (Unidad 4): Patrones de Diseño - Decorator (Decorador)

// --- El Patrón Decorator ---
// Propósito: Añadir dinámicamente nuevas funcionalidades a un objeto sin alterar su clase (o la de otros objetos
// de la misma clase). El patrón Decorator es una alternativa flexible a la herencia para extender la funcionalidad.

// El patrón envuelve un objeto "componente" con uno o más objetos "decoradores" que tienen la misma interfaz
// que el componente, pero añaden su propio comportamiento antes o después de delegar la llamada al objeto envuelto.

// Casos de Uso:
// - Añadir responsabilidades a objetos individuales de forma dinámica y transparente.
// - Cuando la herencia es impráctica debido a la gran cantidad de combinaciones de extensiones posibles.
// - Modificar la funcionalidad de un objeto de una librería externa sin cambiar su código.

console.log("--- Implementación del Patrón Decorator (Funcional) ---");

// --- 1. El Componente Base ---
// Este es el objeto original al que queremos añadirle funcionalidades.

class CafeSimple {
  costo() {
    return 5; // Costo base del café
  }

  descripcion() {
    return "Café simple";
  }
}

// --- 2. Los Decoradores ---
// Son funciones que toman un objeto café y le "añaden" una nueva capa de funcionalidad.

// Decorador para añadir leche
function conLeche(cafe) {
  const costoOriginal = cafe.costo();
  cafe.costo = function() {
    return costoOriginal + 2; // Añade el costo de la leche
  };

  const descOriginal = cafe.descripcion();
  cafe.descripcion = function() {
    return `${descOriginal}, con leche`;
  };

  console.log("(Decorador: Leche añadida)");
  return cafe;
}

// Decorador para añadir azúcar
function conAzucar(cafe) {
  const costoOriginal = cafe.costo();
  cafe.costo = function() {
    return costoOriginal + 1; // Añade el costo del azúcar
  };

  const descOriginal = cafe.descripcion();
  cafe.descripcion = function() {
    return `${descOriginal}, con azúcar`;
  };

  console.log("(Decorador: Azúcar añadida)");
  return cafe;
}

// Decorador para añadir caramelo
function conCaramelo(cafe) {
  const costoOriginal = cafe.costo();
  cafe.costo = function() {
    return costoOriginal + 3;
  };

  const descOriginal = cafe.descripcion();
  cafe.descripcion = function() {
    return `${descOriginal}, con caramelo`;
  };

  console.log("(Decorador: Caramelo añadido)");
  return cafe;
}


// --- 3. Uso de los Decoradores ---
// Podemos "apilar" los decoradores para combinar sus funcionalidades.

console.log("Preparando un café simple:");
let miCafe = new CafeSimple();
console.log(`- Descripción: ${miCafe.descripcion()}`);
console.log(`- Costo: $${miCafe.costo()}`);

console.log("\nPreparando un café con leche y azúcar:");
// Empezamos con un café simple
let cafeConTodo = new CafeSimple();
// Lo envolvemos con el decorador de leche
cafeConTodo = conLeche(cafeConTodo);
// Lo envolvemos con el decorador de azúcar
cafeConTodo = conAzucar(cafeConTodo);

console.log(`- Descripción: ${cafeConTodo.descripcion()}`);
console.log(`- Costo: $${cafeConTodo.costo()}`);

console.log("\nPreparando un capuccino (café, leche, caramelo):");
let capuccino = new CafeSimple();
capuccino = conLeche(capuccino);
capuccino = conCaramelo(capuccino);

console.log(`- Descripción: ${capuccino.descripcion()}`);
console.log(`- Costo: $${capuccino.costo()}`);


// --- Nota sobre la sintaxis de Decoradores (`@`) ---
// JavaScript tiene una propuesta experimental (actualmente en Stage 3) para una sintaxis de decoradores
// que hace esto mucho más limpio, especialmente para las clases. Se vería algo así:

/*
  @conLeche
  @conAzucar
  class MiCafePersonalizado extends CafeSimple {}
*/

// Sin embargo, la implementación funcional mostrada arriba es la forma estándar de aplicar el patrón
// en JavaScript hoy en día y es un excelente ejemplo de composición de funciones.

// Beneficios:
// - Flexibilidad: Se pueden añadir o quitar responsabilidades en tiempo de ejecución.
// - Evita la explosión de subclases: No necesitamos crear `CafeConLeche`, `CafeConAzucar`,
//   `CafeConLecheYAzucar`, etc.
// - Composición: Fomenta la creación de pequeñas funciones que hacen una sola cosa bien.


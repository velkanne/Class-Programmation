

// Clase 4 (Unidad 4): Patrones de Diseño - Module y Revealing Module

// Antes de que ES6 introdujera los módulos nativos (`import`/`export`), los desarrolladores de JavaScript
// usaban patrones basados en closures para emular la modularidad. El más importante de ellos es el Patrón Módulo.
// Su objetivo es la encapsulación: agrupar y proteger un conjunto de variables y funciones.

// --- El Patrón Módulo (Module Pattern) ---
// Utiliza una IIFE (Immediately Invoked Function Expression) para crear un ámbito privado.
// Todo lo que se declara dentro de la IIFE es privado, a menos que se exponga explícitamente.

console.log("--- Patrón Módulo ---");

const CarritoDeCompras = (function() {
  // --- Miembros Privados ---
  // Estas variables y funciones no son accesibles desde fuera del módulo.
  const _items = [];

  function _calcularTotal() {
    return _items.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }

  console.log("(Módulo CarritoDeCompras inicializado)");

  // --- API Pública ---
  // Devolvemos un objeto. Solo los miembros de este objeto serán públicos.
  return {
    agregarItem: function(item) {
      // Este método público tiene acceso a los miembros privados gracias al closure.
      _items.push(item);
      console.log(`Item '${item.nombre}' agregado.`);
    },

    obtenerTotal: function() {
      const total = _calcularTotal();
      console.log(`El total del carrito es: $${total.toFixed(2)}`);
      return total;
    },

    obtenerItems: function() {
      return [..._items]; // Devolvemos una copia para no exponer el array privado original
    }
  };
})();

// --- Uso del Módulo ---
console.log("\nUsando el módulo CarritoDeCompras:");

CarritoDeCompras.agregarItem({ nombre: "Libro", precio: 25.50, cantidad: 1 });
CarritoDeCompras.agregarItem({ nombre: "Cuaderno", precio: 5.75, cantidad: 2 });

CarritoDeCompras.obtenerTotal();

// No podemos acceder a los miembros privados directamente.
// console.log(CarritoDeCompras._items); // undefined
// CarritoDeCompras._calcularTotal(); // TypeError: CarritoDeCompras._calcularTotal is not a function


// --- El Patrón Módulo Revelador (Revealing Module Pattern) ---
// Es una ligera variación del Patrón Módulo que hace el código un poco más limpio.
// La idea es definir toda la lógica en el ámbito privado y, al final, "revelar" solo lo que se quiere hacer público.

console.log("\n--- Patrón Módulo Revelador ---");

const MiGps = (function() {
  // --- Todos los miembros se definen primero como privados ---
  let _latitud = 0;
  let _longitud = 0;

  function obtenerCoordenadasActuales() {
    // Lógica para obtener coordenadas...
    _latitud = -33.45694;
    _longitud = -70.64827;
  }

  function mostrarPosicion() {
    console.log(`Posición actual: Lat ${_latitud}, Lon ${_longitud}`);
  }

  // --- API Pública Revelada ---
  // Al final, devolvemos un objeto que mapea los nombres públicos deseados
  // a los miembros privados correspondientes.
  return {
    iniciar: obtenerCoordenadasActuales,
    dondeEstoy: mostrarPosicion
  };
})();

// --- Uso del Módulo Revelador ---
console.log("\nUsando el módulo MiGps:");
MiGps.iniciar();
MiGps.dondeEstoy();


// --- Conclusión ---
// Pros:
// - Proporciona una excelente encapsulación y ayuda a evitar la contaminación del ámbito global.
// - Permite crear un estado privado real antes de la introducción de los campos privados de clase (`#`).

// Contras:
// - Si se modifica un miembro público (ej. `CarritoDeCompras.agregarItem = null;`), se puede romper el módulo.
// - No es tan fácil de analizar estáticamente como los módulos ES6, lo que puede dificultar la optimización (tree-shaking).
// - Hoy en día, los Módulos ES6 (`import`/`export`) son la forma estándar y preferida de lograr la modularidad en JavaScript.
//   Sin embargo, entender el Patrón Módulo es clave para comprender la historia de JS y el poder de los closures.




// Clase 10: El Comportamiento de `this`

// La palabra clave `this` es una de las más poderosas y, a la vez, más confusas de JavaScript.
// Su valor se determina por el "contexto de ejecución", es decir, CÓMO se llama a la función.

// --- 1. `this` en el Contexto Global ---
// Fuera de cualquier función, `this` se refiere al objeto global.
// En un navegador, el objeto global es `window`.
// En Node.js, es `global` o `globalThis`.

console.log("--- `this` en el Contexto Global ---");
console.log(this); // En un navegador, esto mostraría el objeto `window`.


// --- 2. `this` en una Función Regular ---
// El comportamiento depende de si el código está en "modo estricto" o no.

console.log("\n--- `this` en una Función Regular ---");

function mostrarThis() {
  // "use strict"; // Descomenta esta línea para ver el cambio
  console.log(this);
}

mostrarThis();
// Modo no estricto (por defecto en scripts de navegador): `this` es el objeto global (`window`).
// Modo estricto (`"use strict";`): `this` es `undefined`. Esto previene errores comunes.


// --- 3. `this` en un Método de Objeto (El caso más común e intuitivo) ---
// Cuando una función es llamada COMO MÉTODO de un objeto, `this` se refiere al objeto a la izquierda del punto.

console.log("\n--- `this` en un Método de Objeto ---");

const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  descripcion: function() {
    // Aquí, `this` es el objeto `coche`.
    return `Este coche es un ${this.marca} ${this.modelo}.`;
  }
};

console.log(coche.descripcion()); // "Este coche es un Toyota Corolla."

// ¡CUIDADO! El valor de `this` se pierde si el método se asigna a otra variable y se llama desde allí.
const miDescripcion = coche.descripcion;
// console.log(miDescripcion()); // En modo no estricto, `this` sería `window`, y `window.marca` no existe. Daría "Este coche es un undefined undefined."
                                // En modo estricto, daría un error porque `this` sería `undefined`.


// --- 4. `this` en una Función Flecha (Arrow Function) ---
// Las funciones flecha son especiales: NO tienen su propio `this`.
// En su lugar, "heredan" el `this` del contexto en el que fueron CREADAS (lo que se conoce como `this` léxico).

console.log("\n--- `this` en una Función Flecha ---");

const taller = {
  nombre: "Taller Rápido",
  coches: ["Mazda", "Ford", "Nissan"],

  listarCoches() {
    console.log(`Coches en el ${this.nombre}:`); // `this` aquí es `taller`.

    // Si usáramos una función regular aquí, `this` se perdería (sería `window` o `undefined`).
    // this.coches.forEach(function(coche) {
    //   console.log(`- ${coche} (Taller: ${this.nombre})`); // `this.nombre` sería undefined
    // });

    // Con una función flecha, `this` se hereda del contexto de `listarCoches`.
    this.coches.forEach(coche => {
      // Este `this` es el mismo que el de `listarCoches`, es decir, el objeto `taller`.
      console.log(`- ${coche} (Taller: ${this.nombre})`);
    });
  }
};

taller.listarCoches();


// --- 5. Manipulación Manual de `this`: `call`, `apply` y `bind` ---
// Estos métodos nos permiten establecer explícitamente el valor de `this` para una función.

console.log("\n--- `call`, `apply`, `bind` ---");

const persona1 = { nombre: "Alicia" };
const persona2 = { nombre: "Roberto" };

function saludar(saludo, puntuacion) {
  console.log(`${saludo}, soy ${this.nombre}${puntuacion}`);
}

// `call()`: Llama a la función inmediatamente, estableciendo `this` y pasando los argumentos uno por uno.
saludar.call(persona1, "Hola", "!"); // `this` será `persona1`

// `apply()`: Similar a `call`, pero los argumentos se pasan como un array.
saludar.apply(persona2, ["Qué tal", "..."]); // `this` será `persona2`

// `bind()`: NO llama a la función. En su lugar, crea una NUEVA función que, cuando sea llamada,
// tendrá el valor de `this` permanentemente establecido. Muy útil para callbacks y eventos.
const saludarComoAlicia = saludar.bind(persona1);

// Ahora podemos llamar a `saludarComoAlicia` en cualquier momento, y `this` siempre será `persona1`.
saludarComoAlicia("Adiós", ".");

// Usando `bind` para solucionar el problema del método `coche.descripcion`
const descripcionEnlazada = coche.descripcion.bind(coche);
console.log("Descripción con `bind`:", descripcionEnlazada());

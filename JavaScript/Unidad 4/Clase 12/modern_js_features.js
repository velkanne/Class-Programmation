

// Clase 12 (Unidad 4): JavaScript Moderno y Futuro

// JavaScript es un lenguaje en constante evolución, estandarizado por ECMA International a través del comité TC39.
// Cada año se lanzan nuevas características. Un desarrollador senior debe mantenerse al día con las últimas
// adiciones y estar al tanto de las propuestas que darán forma al futuro del lenguaje.

// --- Características Recientes y Notables (Ya estandarizadas) ---

// --- 1. Campos de Clase Privados (`#`) (ES2022) ---
// Proporciona una forma nativa y verdaderamente privada de declarar campos en una clase.

console.log("--- Campos de Clase Privados (#) ---");

class Contador {
  // `#conteo` es un campo privado. No se puede acceder a él desde fuera de la clase.
  #conteo = 0;

  incrementar() {
    this.#conteo++;
  }

  obtenerValor() {
    return this.#conteo;
  }
}

const miContador = new Contador();
miContador.incrementar();
console.log("Valor del contador:", miContador.obtenerValor()); // 1
// console.log(miContador.#conteo); // SyntaxError: Private field '#conteo' must be declared in an enclosing class


// --- 2. Top-Level `await` (ES2022) ---
// Permite usar la palabra clave `await` en el nivel superior de un módulo ES6, sin necesidad de envolverlo en una función `async`.
// NOTA: Para ejecutar esto, el archivo debe ser tratado como un módulo (ej. `<script type="module">` en HTML o en un entorno de Node.js con "type": "module" en package.json).

console.log("\n--- Top-Level await ---");

async function obtenerDatos() {
  return new Promise(resolve => setTimeout(() => resolve("Datos cargados"), 1000));
}

// try {
//   const datos = await obtenerDatos(); // Esto funcionaría en un módulo ES6
//   console.log("Datos obtenidos con top-level await:", datos);
// } catch (e) {
//   console.error(e);
// }
console.log("(Ejemplo de Top-Level await comentado para compatibilidad en entornos no modulares)");


// --- 3. `Promise.allSettled()` (ES2020) ---
// A diferencia de `Promise.all` que falla si una sola promesa es rechazada, `Promise.allSettled` espera a que
// TODAS las promesas se "asienten" (sean cumplidas o rechazadas) y devuelve un array con el estado de cada una.

console.log("\n--- Promise.allSettled() ---");

const promesaExitosa = Promise.resolve("Éxito");
const promesaFallida = Promise.reject("Fallo");
const promesas = [promesaExitosa, promesaFallida];

Promise.allSettled(promesas)
  .then(resultados => {
    console.log("Resultados de allSettled:", resultados);
    // Cada resultado es un objeto: { status: 'fulfilled', value: ... } o { status: 'rejected', reason: ... }
  });


// --- 4. Operadores de Asignación Lógica (`&&=`, `||=`, `??=`) (ES2021) ---
// Son una forma abreviada de combinar una operación lógica con una asignación.

console.log("\n--- Operadores de Asignación Lógica ---");

let a = { duracion: 0 };
let b = { duracion: 20 };

// `||=` asigna solo si el valor de la izquierda es "falsy".
a.duracion ||= 10; // a.duracion es 0 (falsy), entonces se le asigna 10.
b.duracion ||= 10; // b.duracion es 20 (truthy), no se le asigna nada.
console.log("a.duracion con ||=", a.duracion); // 10
console.log("b.duracion con ||=", b.duracion); // 20

let c = { usuario: "Ana" };
let d = { usuario: null };

// `??=` asigna solo si el valor de la izquierda es `null` o `undefined`.
c.usuario ??= "Invitado"; // c.usuario es "Ana", no se asigna nada.
d.usuario ??= "Invitado"; // d.usuario es null, se le asigna "Invitado".
console.log("c.usuario con ??=", c.usuario); // "Ana"
console.log("d.usuario con ??=", d.usuario); // "Invitado"

let e = { activo: true };
// `&&=` asigna solo si el valor de la izquierda es "truthy".
e.activo &&= false; // e.activo es true, se le asigna false.
console.log("e.activo con &&=", e.activo); // false


// --- Un Vistazo al Futuro: Propuestas de TC39 ---

// El comité TC39 trabaja constantemente en nuevas propuestas. Algunas interesantes en etapas avanzadas son:

// **Pipeline Operator (`|>`):** Permite encadenar llamadas a funciones de una forma más legible.
// Propuesta: `let resultado = valorInicial |> funcionA |> funcionB;`
// Equivalente a: `let resultado = funcionB(funcionA(valorInicial));`

// **Temporal:** Un nuevo y robusto API para manejar fechas y horas, diseñado para reemplazar el problemático objeto `Date`.
// Propuesta: `Temporal.Now.plainDateISO()` podría devolver un objeto de fecha mucho más fácil de manejar.

// **Decorators:** La sintaxis de decoradores (`@miDecorador`) que vimos en la lección de TypeScript está en camino
// de ser estandarizada para JavaScript, lo que permitirá patrones de metaprogramación mucho más limpios.

console.log("\nEl viaje de aprender JavaScript nunca termina. ¡Sigue explorando las nuevas propuestas de TC39!");

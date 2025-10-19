

// Clase 4 (Unidad 3): Conceptos de Programación Funcional en JavaScript

// La programación funcional (FP) es un paradigma de programación que trata la computación como la evaluación
// de funciones matemáticas y evita cambiar el estado y los datos mutables.
// JavaScript, al ser un lenguaje multiparadigma, tiene muchas características que se prestan a un estilo funcional.

// --- 1. Funciones Puras (Pure Functions) ---
// Una función pura es aquella que cumple dos condiciones:
// a) Para la misma entrada, siempre devuelve la misma salida.
// b) No tiene "efectos secundarios" (side effects), es decir, no modifica nada fuera de su propio ámbito
//    (no cambia variables globales, no escribe en la consola, no modifica el DOM, etc.).

console.log("--- Funciones Puras ---");

// Función IMPURA: depende de una variable externa y la modifica (efecto secundario).
let factor = 2;
function multiplicarImpuro(numero) {
  factor++; // Modifica una variable externa
  return numero * factor;
}
console.log("Impuro:", multiplicarImpuro(5)); // 15 (factor se vuelve 3)
console.log("Impuro:", multiplicarImpuro(5)); // 20 (factor se vuelve 4)

// Función PURA: su resultado solo depende de sus argumentos.
function multiplicarPuro(numero, factor) {
  return numero * factor;
}
console.log("Puro:", multiplicarPuro(5, 2)); // 10
console.log("Puro:", multiplicarPuro(5, 2)); // 10 (Siempre el mismo resultado para la misma entrada)


// --- 2. Inmutabilidad ---
// La inmutabilidad es el principio de no cambiar las estructuras de datos, sino crear copias con los cambios.
// Esto evita efectos secundarios y hace que el flujo de datos sea más predecible.

console.log("\n--- Inmutabilidad ---");

const persona = { nombre: "Ana", edad: 28 };

// Forma MUTABLE (mala práctica en FP)
function cumpleaniosMutable(p) {
  p.edad++; // Modifica el objeto original
  return p;
}
// cumpleaniosMutable(persona);
// console.log("Original modificado:", persona); // { nombre: 'Ana', edad: 29 }

// Forma INMUTABLE (buena práctica en FP)
function cumpleaniosInmutable(p) {
  // Usamos el operador spread para crear un nuevo objeto
  return { ...p, edad: p.edad + 1 };
}
const personaActualizada = cumpleaniosInmutable(persona);
console.log("Objeto original (inmutable):", persona); // No ha cambiado
console.log("Nuevo objeto:", personaActualizada);

// Los métodos de array como `map`, `filter` y `reduce` son ejemplos de inmutabilidad,
// ya que devuelven un nuevo array en lugar de modificar el original.


// --- 3. Funciones de Primera Clase y de Orden Superior (Higher-Order Functions) ---
// En JavaScript, las funciones son "ciudadanos de primera clase", lo que significa que pueden ser tratadas como cualquier otro valor:
// - Pueden ser asignadas a variables.
// - Pueden ser pasadas como argumentos a otras funciones.
// - Pueden ser devueltas por otras funciones.

// Una Función de Orden Superior (HOF) es una función que hace al menos una de las dos últimas cosas.

console.log("\n--- Funciones de Orden Superior (HOF) ---");

// `crearMultiplicador` es una HOF porque DEVUELVE una función.
function crearMultiplicador(factor) {
  // La función devuelta "recuerda" el `factor` gracias a un closure (clausura).
  return function(numero) {
    return numero * factor;
  };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log("Duplicar 7:", duplicar(7)); // 14
console.log("Triplicar 7:", triplicar(7)); // 21

// `map`, `filter`, `reduce` son HOFs porque TOMAN una función como argumento.


// --- 4. Composición de Funciones (Function Composition) ---
// Es el proceso de combinar múltiples funciones simples para crear una más compleja.
// La salida de una función se convierte en la entrada de la siguiente.

console.log("\n--- Composición de Funciones ---");

const texto = "  programación funcional es genial  ";

const trim = str => str.trim();
const toUpperCase = str => str.toUpperCase();
const split = separator => str => str.split(separator);
const join = separator => arr => arr.join(separator);

// Composición manual
const resultadoManual = toUpperCase(trim(texto));
console.log("Composición manual:", resultadoManual);

// Una función de utilidad `compose` para hacerlo más declarativo.
// Se ejecuta de derecha a izquierda.
const compose = (...fns) => (valorInicial) => fns.reduceRight((acc, fn) => fn(acc), valorInicial);

const transformarTexto = compose(
  join("-"),
  split(" "),
  toUpperCase,
  trim
);

const resultadoCompuesto = transformarTexto(texto);
console.log("Con función compose:", resultadoCompuesto); // "PROGRAMACIÓN-FUNCIONAL-ES-GENIAL"


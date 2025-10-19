
// Clase 6 (Unidad 3): Iteradores y Generadores

// ES6 introdujo un nuevo protocolo de iteración que permite que cualquier objeto pueda definir su propio
// comportamiento de iteración. Los bucles `for...of`, el operador spread (`...`), y la desestructuración
// de arrays utilizan este protocolo.

// --- 1. El Protocolo de Iteración ---
// a) Iterable: Es un objeto que sabe cómo ser recorrido. Para ser iterable, un objeto debe implementar
//    un método llamado `[Symbol.iterator]`.
// b) Iterator: Es el objeto que realiza la iteración. Debe tener un método `next()` que devuelve un
//    objeto con dos propiedades: `value` (el valor actual) y `done` (un booleano que es `true` si la iteración ha terminado).

console.log("--- Iterables Nativos ---");

const miArray = [10, 20, 30];
// Los arrays, strings, maps y sets son iterables por defecto.

// Obtenemos el iterador del array
const iteradorArray = miArray[Symbol.iterator]();

console.log(iteradorArray.next()); // { value: 10, done: false }
console.log(iteradorArray.next()); // { value: 20, done: false }
console.log(iteradorArray.next()); // { value: 30, done: false }
console.log(iteradorArray.next()); // { value: undefined, done: true }

// El bucle `for...of` usa este protocolo automáticamente.
console.log("\nUsando for...of:");
for (const valor of miArray) {
  console.log(valor);
}

// --- 2. Creando un Objeto Iterable Personalizado ---
console.log("\n--- Iterable Personalizado ---");

const rangoNumeros = {
  de: 1,
  hasta: 5,

  // Hacemos que este objeto sea iterable implementando `[Symbol.iterator]`
  [Symbol.iterator]: function() {
    let actual = this.de;
    const ultimo = this.hasta;

    // El método debe devolver un objeto iterador (con un método `next`)
    return {
      next: () => {
        if (actual <= ultimo) {
          return { value: actual++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

// Ahora podemos usar `for...of` y el operador spread en nuestro objeto.
console.log("Recorriendo nuestro iterable personalizado:");
for (const num of rangoNumeros) {
  console.log(num);
}

console.log("Usando el operador spread:", [...rangoNumeros]);


// --- 3. Generadores (Generator Functions) ---
// Los generadores son una forma mucho más sencilla de crear iteradores.
// Se definen con `function*` y usan la palabra clave `yield` para "pausar" la ejecución y devolver un valor.

console.log("\n--- Generadores ---");

// La misma funcionalidad de `rangoNumeros`, pero con un generador.
function* generadorDeRango(de, hasta) {
  console.log("\n(El generador comienza)");
  let actual = de;
  while (actual <= hasta) {
    // `yield` devuelve un valor y pausa la función. La próxima vez que se llame a `.next()`,
    // la función se reanudará desde este punto.
    yield actual++;
  }
  console.log("(El generador ha terminado)");
}

// Una función generadora, cuando se llama, no ejecuta su cuerpo. En su lugar, devuelve un objeto iterador.
const iteradorConGenerador = generadorDeRango(1, 3);

console.log("Llamando a .next() por primera vez:");
console.log(iteradorConGenerador.next()); // Se ejecuta hasta el primer yield

console.log("Llamando a .next() por segunda vez:");
console.log(iteradorConGenerador.next()); // Se reanuda y se ejecuta hasta el segundo yield

console.log("Llamando a .next() por tercera vez:");
console.log(iteradorConGenerador.next());

console.log("Llamando a .next() por cuarta vez:");
console.log(iteradorConGenerador.next()); // Se ejecuta el resto de la función

// Podemos usarlo directamente en un bucle `for...of`
console.log("\nUsando el generador en un bucle for...of:");
for (const num of generadorDeRango(10, 12)) {
  console.log(num);
}


// --- 4. `yield*` para Delegar ---
// `yield*` permite a un generador delegar la iteración a otro generador o a cualquier objeto iterable.

console.log("\n--- yield* ---");

function* generador1() {
  yield 1;
  yield 2;
}

function* generador2() {
  yield 3;
  yield 4;
}

function* generadorCombinado() {
  yield* generador1();
  yield* [5, 6]; // También funciona con cualquier iterable
  yield* generador2();
}

console.log("Valores del generador combinado:", [...generadorCombinado()]);

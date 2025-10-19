

// Clase 10 (Unidad 3): Métodos de Array Avanzados

// A partir de ES2019, se han añadido varios métodos útiles a los arrays que simplifican
// operaciones comunes que antes requerían más código.

// --- 1. `Array.prototype.flat(depth)` ---
// Crea un nuevo array con todos los elementos de sub-arrays concatenados recursivamente
// hasta la profundidad (`depth`) especificada.

console.log("--- .flat() ---");

const arrayAnidado = [1, 2, [3, 4]];
// Por defecto, la profundidad es 1
console.log("Array anidado:", arrayAnidado);
console.log("Aplanado (depth 1):", arrayAnidado.flat()); // [1, 2, 3, 4]

const arrayMasAnidado = [1, [2, [3, [4, 5]]]];
console.log("\nArray más anidado:", arrayMasAnidado);
console.log("Aplanado (depth 2):", arrayMasAnidado.flat(2)); // [1, 2, 3, [4, 5]]

// Para aplanar completamente un array de profundidad desconocida, se puede usar `Infinity`.
console.log("Aplanado completo (Infinity):", arrayMasAnidado.flat(Infinity)); // [1, 2, 3, 4, 5]


// --- 2. `Array.prototype.flatMap(callback)` ---
// Es una combinación de `map()` seguido de `flat()` con profundidad 1. Es más eficiente
// que llamar a ambos métodos por separado.

console.log("\n--- .flatMap() ---");

const frases = ["hola mundo", "javascript es genial"];

// Con map + flat
const palabrasMapFlat = frases.map(frase => frase.split(' ')).flat();
console.log("Con map + flat:", palabrasMapFlat);

// Con flatMap (más directo y eficiente)
const palabrasFlatMap = frases.flatMap(frase => frase.split(' '));
console.log("Con flatMap:", palabrasFlatMap);

// Ejemplo: duplicar cada número y devolverlo en un array aplanado
const numeros = [1, 2, 3];
const numerosDuplicados = numeros.flatMap(n => [n, n * 2]);
console.log("flatMap para duplicar:", numerosDuplicados); // [1, 2, 2, 4, 3, 6]


// --- 3. `Array.prototype.at(index)` ---
// Permite acceder a un elemento de un array usando un índice. La principal ventaja es que
// acepta índices negativos para acceder a los elementos desde el final del array.

console.log("\n--- .at() ---");

const miArray = ['a', 'b', 'c', 'd', 'e'];

// Forma tradicional de obtener el último elemento
console.log("Último elemento (tradicional):", miArray[miArray.length - 1]); // 'e'

// Con .at()
console.log("Último elemento (con .at(-1)):", miArray.at(-1)); // 'e'
console.log("Penúltimo elemento (con .at(-2)):", miArray.at(-2)); // 'd'
console.log("Primer elemento (con .at(0)):", miArray.at(0)); // 'a'


// --- 4. `Object.fromEntries(iterable)` ---
// Aunque no es un método de array, trabaja directamente con iterables. Transforma una lista
// de pares clave-valor (como un array de arrays `[[key, value], ...]`) en un objeto.
// Es la operación inversa a `Object.entries()`.

console.log("\n--- Object.fromEntries() ---");

const entradas = [['nombre', 'Ana'], ['edad', 25], ['ciudad', 'Lima']];
const objeto = Object.fromEntries(entradas);
console.log("Objeto creado desde entradas:", objeto);

// Caso de uso: filtrar las propiedades de un objeto
const producto = {
  id: 1, 
  nombre: "Laptop",
  precio: 1200,
  stock: null
};

// Queremos crear un nuevo objeto solo con las propiedades que tienen un valor definido (no null).
const productoFiltrado = Object.fromEntries(
  Object.entries(producto).filter(([clave, valor]) => valor !== null)
);
console.log("Producto filtrado:", productoFiltrado);


// --- 5. `findLast()` y `findLastIndex()` ---
// Similares a `find()` y `findIndex()`, pero buscan desde el final del array hacia el principio.

console.log("\n--- .findLast() y .findLastIndex() ---");

const calificaciones = [8, 9, 10, 7, 6, 10, 8];

// Encontrar la última calificación que es un 10
const ultimo10 = calificaciones.findLast(cal => cal === 10);
console.log("Última calificación de 10:", ultimo10); // 10

// Encontrar el índice de la última calificación que es un 10
const indiceUltimo10 = calificaciones.findLastIndex(cal => cal === 10);
console.log("Índice de la última calificación de 10:", indiceUltimo10); // 5

// Encontrar el último número par
const ultimoPar = calificaciones.findLast(cal => cal % 2 === 0);
console.log("Último número par:", ultimoPar); // 8

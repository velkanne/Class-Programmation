
// Clase 7 (Unidad 3): Map, Set, WeakMap y WeakSet

// ES6 introdujo nuevas estructuras de datos que ofrecen más flexibilidad y rendimiento para ciertos casos de uso
// en comparación con los objetos y arrays tradicionales.

// --- 1. Map ---
// Un `Map` es una colección de pares clave-valor donde CUALQUIER tipo de valor (tanto objetos como valores primitivos)
// puede ser usado como clave. Esto es una gran ventaja sobre los `Object`, que solo pueden tener strings o Symbols como claves.

console.log("--- Map ---");

const miMapa = new Map();

// Claves de diferentes tipos
const claveString = "una clave";
const claveObjeto = { a: 1 };
const claveFuncion = () => {};

// `set(clave, valor)`: Añade o actualiza un elemento.
miMapa.set(claveString, "Valor para un string");
miMapa.set(claveObjeto, "Valor para un objeto");
miMapa.set(claveFuncion, "Valor para una función");

console.log("Tamaño del mapa (`.size`):", miMapa.size); // 3

// `get(clave)`: Obtiene el valor asociado a una clave.
console.log("Obteniendo valor con clave de objeto:", miMapa.get(claveObjeto));

// `has(clave)`: Comprueba si una clave existe.
console.log("¿El mapa tiene la clave de función?", miMapa.has(claveFuncion)); // true

// `delete(clave)`: Elimina un elemento.
miMapa.delete(claveString);
console.log("Tamaño después de borrar:", miMapa.size); // 2

// Iteración sobre un Map
console.log("\nIterando sobre el mapa:");
// `forEach`
miMapa.forEach((valor, clave) => {
  console.log(`- Clave: ${String(clave)}, Valor: ${valor}`);
});

// `for...of` (devuelve un array [clave, valor])
for (const [clave, valor] of miMapa) {
  console.log(`(for...of) Clave: ${clave} -> Valor: ${valor}`);
}

// `clear()`: Vacía el mapa por completo.
miMapa.clear();
console.log("Tamaño después de clear():", miMapa.size); // 0


// --- 2. Set ---
// Un `Set` es una colección de valores ÚNICOS. Un valor en un `Set` solo puede ocurrir una vez.
// Es muy eficiente para comprobar si un elemento existe en la colección.

console.log("\n--- Set ---");

const miSet = new Set();

// `add(valor)`: Añade un nuevo elemento. Si el elemento ya existe, no hace nada.
miSet.add(1);
miSet.add(5);
miSet.add("Hola");
miSet.add({ a: 1 });
miSet.add(5); // Este valor ya existe, será ignorado.

console.log("Set resultante:", miSet);
console.log("Tamaño del set (`.size`):", miSet.size); // 4

// `has(valor)`: Comprueba si un valor existe.
console.log("¿El set tiene el valor 'Hola'?", miSet.has("Hola")); // true
console.log("¿El set tiene el valor 2?", miSet.has(2)); // false

// `delete(valor)`: Elimina un elemento.
miSet.delete(1);
console.log("Set después de borrar el 1:", miSet);

// Caso de uso común: Eliminar duplicados de un array
const arrayConDuplicados = [1, 2, 3, 2, 4, 5, 1, 5, 6];
const arraySinDuplicados = [...new Set(arrayConDuplicados)];
console.log("\nArray original:", arrayConDuplicados);
console.log("Array sin duplicados:", arraySinDuplicados);


// --- 3. WeakMap y WeakSet ---
// Son versiones "débiles" de Map y Set. La principal diferencia es cómo manejan las referencias a los objetos,
// lo que tiene implicaciones en la recolección de basura (garbage collection).

// Principales características:
// 1. Solo pueden almacenar OBJETOS como claves (WeakMap) o valores (WeakSet). No aceptan primitivos.
// 2. Las referencias que mantienen son "débiles". Si un objeto almacenado en un WeakMap/WeakSet
//    no tiene ninguna otra referencia en el programa, el recolector de basura puede eliminarlo de la memoria.
// 3. No son iterables. No tienen `.size`, `.forEach()`, `.keys()`, etc. Esto se debe a la naturaleza impredecible
//    de la recolección de basura.

console.log("\n--- WeakMap y WeakSet ---");

// a) WeakMap
// Útil para asociar datos adicionales a un objeto sin impedir que sea recolectado por el garbage collector.
let weakMap = new WeakMap();
let elementoDOM = { id: "mi-boton" }; // Simula un elemento del DOM

weakMap.set(elementoDOM, { clicks: 10 });
console.log("Datos asociados en WeakMap:", weakMap.get(elementoDOM));

// Si en algún momento `elementoDOM` se elimina del DOM y todas las referencias a él desaparecen...
// elementoDOM = null;
// ...el recolector de basura eventualmente eliminará tanto el objeto como la entrada en el WeakMap,
// previniendo fugas de memoria (memory leaks).

// b) WeakSet
// Útil para registrar objetos y saber si ya han sido procesados, por ejemplo.
let weakSet = new WeakSet();
let objetoProcesado = { data: "..." };

weakSet.add(objetoProcesado);
console.log("¿El objeto ya fue procesado (en WeakSet)?", weakSet.has(objetoProcesado));

// El caso de uso es más de nicho, generalmente relacionado con la optimización y el manejo de memoria en aplicaciones complejas.

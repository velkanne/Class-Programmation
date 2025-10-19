

// Clase 7: Arrays (Arreglos)

// Un array es una estructura de datos que nos permite almacenar una colección de elementos (números, strings, objetos, otros arrays, etc.) en una sola variable.
// Los arrays en JavaScript son de tamaño dinámico y pueden contener elementos de diferentes tipos.

// --- 1. Creación de Arrays ---
console.log("--- Creación de Arrays ---");

// Forma literal (la más común y recomendada)
const frutas = ["Manzana", "Banana", "Naranja"];
const numeros = [1, 2, 3, 4, 5];
const mixto = ["Hola", 100, true, null, { a: 1, b: 2 }];
const vacio = [];

console.log("Array de frutas:", frutas);
console.log("Array mixto:", mixto);

// --- 2. Acceso y Modificación de Elementos ---
// Los elementos de un array se acceden mediante su "índice", que es su posición en el array.
// ¡IMPORTANTE! El primer elemento siempre tiene el índice 0.

console.log("\n--- Acceso y Modificación ---");
console.log("La primera fruta es:", frutas[0]); // Manzana
console.log("La tercera fruta es:", frutas[2]); // Naranja

// Modificar un elemento
console.log("Array original:", frutas);
frutas[1] = "Plátano"; // Cambiamos "Banana" por "Plátano"
console.log("Array modificado:", frutas);

// --- 3. Propiedad `length` ---
// La propiedad `length` nos dice cuántos elementos hay en el array.
console.log("\n--- Propiedad length ---");
console.log("El array de frutas tiene", frutas.length, "elementos.");

// `length` también nos sirve para acceder al último elemento
const ultimoElemento = frutas[frutas.length - 1];
console.log("El último elemento es:", ultimoElemento);

// --- 4. Métodos Comunes de Arrays (Mutadores - Modifican el array original) ---
console.log("\n--- Métodos Mutadores ---");
const colores = ["Rojo", "Verde", "Azul"];
console.log("Array de colores original:", colores);

// `push()`: Añade uno o más elementos al FINAL del array.
colores.push("Amarillo");
console.log("Después de push('Amarillo'):", colores);

// `pop()`: Elimina el ÚLTIMO elemento del array y lo devuelve.
const colorEliminado = colores.pop();
console.log("Después de pop():", colores);
console.log("Elemento eliminado:", colorEliminado);

// `unshift()`: Añade uno o más elementos al INICIO del array.
colores.unshift("Morado");
console.log("Después de unshift('Morado'):", colores);

// `shift()`: Elimina el PRIMER elemento del array y lo devuelve.
colores.shift();
console.log("Después de shift():", colores);

// `splice()`: Un método muy potente para añadir, eliminar o reemplazar elementos en cualquier posición.
// Sintaxis: splice(índice_inicio, cantidad_a_eliminar, elemento1, elemento2, ...)
const animales = ["Perro", "Gato", "Pájaro", "Pez"];
console.log("\nArray de animales original:", animales);
// Eliminar "Pájaro"
const eliminados = animales.splice(2, 1);
console.log("Después de splice(2, 1):", animales, "- Eliminado:", eliminados);
// Añadir "Conejo" y "Hamster" en la posición 1 sin eliminar nada
animales.splice(1, 0, "Conejo", "Hamster");
console.log("Después de splice(1, 0, ...):", animales);

// --- 5. Métodos Comunes de Arrays (No Mutadores - Devuelven un nuevo array) ---
console.log("\n--- Métodos No Mutadores ---");
const letras1 = ["a", "b", "c"];
const letras2 = ["d", "e", "f"];

// `concat()`: Une dos o más arrays y devuelve un nuevo array.
const letrasCombinadas = letras1.concat(letras2);
console.log("letras1:", letras1); // No cambia
console.log("letras2:", letras2); // No cambia
console.log("Resultado de concat():", letrasCombinadas);

// `slice()`: Devuelve una copia superficial de una porción del array.
// Sintaxis: slice(índice_inicio, índice_fin (no incluido))
const subseccion = letrasCombinadas.slice(1, 4);
console.log("Resultado de slice(1, 4):", subseccion); // ['b', 'c', 'd']

// `join()`: Une todos los elementos de un array en un string, usando un separador.
const stringFrutas = frutas.join(", ");
console.log("\nResultado de join(', '):", stringFrutas);


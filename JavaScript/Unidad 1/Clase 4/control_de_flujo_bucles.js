

// Clase 4: Control de Flujo - Bucles (Loops)

// Los bucles nos permiten ejecutar un bloque de código repetidamente mientras se cumpla una condición.
// Son fundamentales para tareas repetitivas, como recorrer listas de datos.

// --- 1. Bucle `for` ---
// Es el bucle más común. Se compone de tres partes separadas por punto y coma:
// 1. Inicialización: Se ejecuta una vez, antes de que el bucle comience.
// 2. Condición: Se evalúa antes de cada iteración. Si es `true`, el bloque de código se ejecuta.
// 3. Expresión final (o incremento/decremento): Se ejecuta al final de cada iteración.

console.log("--- Bucle for ---");
// Este bucle imprimirá los números del 0 al 4.
for (let i = 0; i < 5; i++) {
  console.log("Iteración número:", i);
}

// Usando `for` para recorrer un array (una lista de elementos)
const frutas = ["Manzana", "Banana", "Cereza", "Dátil"];
console.log("\nRecorriendo un array de frutas:");
for (let i = 0; i < frutas.length; i++) {
  console.log(`- ${frutas[i]}`);
}

// --- 2. Bucle `while` ---
// Ejecuta un bloque de código mientras una condición especificada sea verdadera.
// La condición se comprueba *antes* de cada iteración.

console.log("\n--- Bucle while ---");
let contador = 0;

while (contador < 5) {
  console.log("Contador (while):", contador);
  contador++; // ¡CUIDADO! Es crucial modificar la variable de la condición para evitar bucles infinitos.
}

// --- 3. Bucle `do...while` ---
// Similar a `while`, pero con una diferencia clave: el bloque de código se ejecuta
// al menos una vez, porque la condición se comprueba *después* de la iteración.

console.log("\n--- Bucle do...while ---");
let numero = 5;

do {
  console.log("Número (do...while):", numero);
  numero++;
} while (numero < 5); // La condición (5 < 5) es falsa, pero el bloque ya se ejecutó una vez.


// --- 4. `break` y `continue` ---
// Son sentencias que nos dan más control sobre el comportamiento de los bucles.

// `break`: Termina el bucle actual inmediatamente.
console.log("\n--- Uso de break ---");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Se encontró el 5. Terminando el bucle con break.");
    break; // El bucle se detiene aquí y no continuará hasta 9.
  }
  console.log("Número:", i);
}

// `continue`: Salta la iteración actual y pasa a la siguiente.
console.log("\n--- Uso de continue ---");
// Imprimir solo los números pares del 0 al 9.
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) { // Si el número no es par (el residuo de dividir por 2 es distinto de 0)
    continue; // Salta esta iteración y no ejecuta el console.log de abajo.
  }
  console.log("Número par:", i);
}


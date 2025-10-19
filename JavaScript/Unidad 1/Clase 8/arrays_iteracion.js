

// Clase 8: Métodos de Iteración de Arrays (Funcionales)

// JavaScript moderno ofrece métodos muy poderosos para trabajar con arrays de una manera más declarativa y funcional.
// Estos métodos no modifican el array original, sino que (en su mayoría) devuelven uno nuevo.
// Toman una función (callback) como argumento, que se ejecuta para cada elemento del array.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const productos = [
  { id: 1, nombre: "Laptop", categoria: "Tecnología", precio: 1200 },
  { id: 2, nombre: "Teclado", categoria: "Tecnología", precio: 80 },
  { id: 3, nombre: "Silla", categoria: "Hogar", precio: 150 },
  { id: 4, nombre: "Mouse", categoria: "Tecnología", precio: 25 },
  { id: 5, nombre: "Mesa", categoria: "Hogar", precio: 300 },
];

// --- 1. `forEach()` ---
// Ejecuta una función para cada elemento del array. No devuelve nada (undefined).
// Es un reemplazo moderno para el bucle `for` cuando no necesitas `break` o `continue`.

console.log("--- forEach() ---");
console.log("Mostrando cada número:");
numeros.forEach(function(numero) {
  console.log(`- Número ${numero}`);
});
// Con arrow function (más común)
numeros.forEach(numero => console.log(`- Arrow: ${numero}`));


// --- 2. `map()` ---
// Crea un NUEVO array con los resultados de llamar a una función para cada elemento del array.
// Es ideal para transformar datos.

console.log("\n--- map() ---");
// Crear un array con el doble de cada número
const dobles = numeros.map(numero => numero * 2);
console.log("Array original:", numeros);
console.log("Array de dobles:", dobles);

// Crear un array solo con los nombres de los productos
const nombresDeProductos = productos.map(producto => producto.nombre);
console.log("Nombres de productos:", nombresDeProductos);


// --- 3. `filter()` ---
// Crea un NUEVO array con todos los elementos que pasen una prueba (una función que devuelve `true` o `false`).
// Es ideal para seleccionar un subconjunto de datos.

console.log("\n--- filter() ---");
// Crear un array solo con los números pares
const pares = numeros.filter(numero => numero % 2 === 0);
console.log("Array de pares:", pares);

// Crear un array con productos de la categoría "Tecnología"
const productosTecnologicos = productos.filter(producto => producto.categoria === "Tecnología");
console.log("Productos de Tecnología:", productosTecnologicos);


// --- 4. `reduce()` ---
// Aplica una función a un "acumulador" y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor.
// Es extremadamente versátil.
// Sintaxis: array.reduce((acumulador, elementoActual) => { ... }, valorInicialDelAcumulador)

console.log("\n--- reduce() ---");
// Sumar todos los números del array
const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("La suma de todos los números es:", sumaTotal);

// Calcular el costo total de todos los productos
const costoTotal = productos.reduce((total, producto) => total + producto.precio, 0);
console.log("El costo total de los productos es:", costoTotal);


// --- 5. `find()` ---
// Devuelve el PRIMER elemento del array que cumple con una condición. Si no encuentra ninguno, devuelve `undefined`.

console.log("\n--- find() ---");
// Encontrar el primer número mayor que 5
const primerNumeroMayorA5 = numeros.find(numero => numero > 5);
console.log("Primer número mayor a 5:", primerNumeroMayorA5); // 6

// Encontrar el producto con id = 3
const productoBuscado = productos.find(producto => producto.id === 3);
console.log("Producto con id 3:", productoBuscado);


// --- 6. `some()` y `every()` ---
// Devuelven un booleano (true/false) basado en una condición.

console.log("\n--- some() y every() ---");
// `some()`: Comprueba si AL MENOS UN elemento del array cumple la condición.
const hayProductosCaros = productos.some(producto => producto.precio > 1000);
console.log("¿Hay algún producto que cueste más de 1000?", hayProductosCaros); // true

// `every()`: Comprueba si TODOS los elementos del array cumplen la condición.
const todosSonBaratos = productos.every(producto => producto.precio < 2000);
console.log("¿Todos los productos cuestan menos de 2000?", todosSonBaratos); // true

const todosSonTecnologia = productos.every(producto => producto.categoria === "Tecnología");
console.log("¿Todos los productos son de Tecnología?", todosSonTecnologia); // false


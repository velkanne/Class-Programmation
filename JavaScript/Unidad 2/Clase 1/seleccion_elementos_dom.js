

// Clase 1 (Unidad 2): Selección de Elementos del DOM

// El DOM (Document Object Model) es una interfaz que representa nuestro documento HTML como un árbol de objetos.
// JavaScript puede manipular este árbol para cambiar dinámicamente el contenido, la estructura y el estilo de la página.
// Para poder manipular un elemento, primero debemos seleccionarlo.

// NOTA: Este script se carga con el atributo `defer` en el HTML, lo que garantiza
// que se ejecute solo después de que todo el documento HTML ha sido cargado y analizado.
// Esto es crucial para asegurar que los elementos que queremos seleccionar ya existan.

console.log("--- Empezando la selección de elementos del DOM ---");

// --- 1. `getElementById()` ---
// Selecciona UN ÚNICO elemento por su atributo `id`. Los IDs deben ser únicos en todo el documento.
// Es el método más rápido y eficiente para seleccionar un elemento específico.
console.log("\n--- getElementById ---");

const tituloPrincipal = document.getElementById("titulo-principal");
// `tituloPrincipal` es ahora un objeto que representa la etiqueta <h1>
console.log("Elemento por ID 'titulo-principal':", tituloPrincipal);
// Podemos acceder a sus propiedades, como su contenido de texto.
console.log("Contenido del título:", tituloPrincipal.textContent);


// --- 2. `getElementsByClassName()` ---
// Selecciona TODOS los elementos que tienen una clase específica.
// Devuelve una `HTMLCollection`, que es un objeto similar a un array (pero no es un array).
console.log("\n--- getElementsByClassName ---");

const itemsImportantes = document.getElementsByClassName("importante");
console.log("Elementos por clase 'importante':", itemsImportantes);
// Para trabajar con los elementos, normalmente se recorre la colección.
for (let i = 0; i < itemsImportantes.length; i++) {
  console.log(`- Elemento importante ${i + 1}:`, itemsImportantes[i].textContent);
}


// --- 3. `getElementsByTagName()` ---
// Selecciona TODOS los elementos que corresponden a un nombre de etiqueta (tag).
// También devuelve una `HTMLCollection`.
console.log("\n--- getElementsByTagName ---");

const todosLosParrafos = document.getElementsByTagName("p");
console.log("Todos los elementos <p>:", todosLosParrafos);
console.log(`Se encontraron ${todosLosParrafos.length} párrafos en la página.`);


// --- MÉTODOS MODERNOS (RECOMENDADOS) ---

// --- 4. `querySelector()` ---
// Es un método muy versátil que devuelve el PRIMER elemento que coincide con un selector CSS especificado.
// Si no encuentra ninguno, devuelve `null`.
console.log("\n--- querySelector (Recomendado) ---");

// Seleccionar por ID (igual que getElementById)
const tituloConQuery = document.querySelector("#titulo-principal");
console.log("Seleccionado por ID con querySelector:", tituloConQuery);

// Seleccionar por clase (devuelve solo el primero que encuentra)
const primerImportante = document.querySelector(".importante");
console.log("El primer elemento con clase 'importante':", primerImportante);

// Seleccionar por etiqueta (devuelve solo la primera)
const primerParrafo = document.querySelector("p");
console.log("El primer párrafo:", primerParrafo);

// Seleccionar con selectores más complejos
const itemImportanteEnLista = document.querySelector("#lista-items .importante");
console.log("Item importante dentro de la lista:", itemImportanteEnLista);


// --- 5. `querySelectorAll()` ---
// Similar a `querySelector`, pero devuelve TODOS los elementos que coinciden con el selector CSS.
// Devuelve una `NodeList`, que es también similar a un array y se puede recorrer con `forEach`.
console.log("\n--- querySelectorAll (Recomendado) ---");

const todosLosItems = document.querySelectorAll(".item");
console.log("Todos los elementos con clase 'item':", todosLosItems);

// La NodeList devuelta por querySelectorAll SÍ tiene el método `forEach`.
console.log("Recorriendo los items con forEach:");
todosLosItems.forEach((item, index) => {
  console.log(`- Item ${index + 1}: ${item.textContent}`);
});

// Seleccionar todos los párrafos dentro de divs
const parrafosEnDivs = document.querySelectorAll("div > p");
console.log("\nPárrafos directamente dentro de un div:", parrafosEnDivs);


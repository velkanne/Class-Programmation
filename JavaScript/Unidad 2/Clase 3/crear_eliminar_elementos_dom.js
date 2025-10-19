

// Clase 3 (Unidad 2): Creación y Eliminación de Elementos del DOM

// JavaScript no solo puede modificar elementos existentes, sino también crear nuevos elementos desde cero y añadirlos
// a la página, o eliminar los que ya no se necesiten. Esto es la base de las aplicaciones web dinámicas.

// --- Selección de Elementos de Interfaz ---
const inputTexto = document.querySelector("#input-texto");
const btnAnadir = document.querySelector("#btn-anadir");
const btnAnadirArriba = document.querySelector("#btn-anadir-arriba");
const contenedor = document.querySelector("#contenedor-dinamico");
const listaTareas = document.querySelector("#lista-tareas");

// --- 1. Creación de Nuevos Elementos ---
console.log("--- Creación de Elementos ---");

function anadirElemento(posicion = 'final') {
  const texto = inputTexto.value;

  // Paso 1: Validar que haya texto
  if (texto.trim() === "") {
    alert("Por favor, escribe algo en el campo de texto.");
    return; // Detiene la ejecución de la función
  }

  // Paso 2: Crear el nuevo elemento en memoria
  // `createElement()` crea un nodo de elemento del tipo especificado.
  const nuevoDiv = document.createElement("div");

  // Paso 3: Configurar el elemento (añadir clases, contenido, etc.)
  nuevoDiv.classList.add("nuevo-item");
  nuevoDiv.textContent = texto;

  // Añadir un botón de eliminar a cada nuevo div
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "X";
  btnEliminar.style.marginLeft = "10px";
  btnEliminar.style.cursor = "pointer";
  btnEliminar.addEventListener("click", function() {
    // `this` se refiere al botón, `this.parentElement` es el `nuevoDiv`
    this.parentElement.remove();
  });
  nuevoDiv.appendChild(btnEliminar);

  // Paso 4: Añadir el elemento al DOM para que sea visible
  if (posicion === 'inicio') {
    // `prepend()`: Añade el nuevo nodo al PRINCIPIO del contenedor.
    contenedor.prepend(nuevoDiv);
  } else {
    // `appendChild()`: Añade el nuevo nodo al FINAL del contenedor.
    contenedor.appendChild(nuevoDiv);
  }

  // Limpiar el input para el siguiente uso
  inputTexto.value = "";
  inputTexto.focus();
}

// Asignar la función a los eventos de los botones
btnAnadir.addEventListener("click", () => anadirElemento('final'));
btnAnadirArriba.addEventListener("click", () => anadirElemento('inicio'));

console.log("Puedes usar los botones para añadir elementos al contenedor azul.");


// --- 2. Eliminación de Elementos ---
console.log("\n--- Eliminación de Elementos ---");

// a) Método Moderno: `element.remove()`
// Es la forma más sencilla y recomendada. El propio elemento se elimina a sí mismo.

const itemParaEliminar = listaTareas.children[1]; // El segundo <li> ("Tarea 2")
itemParaEliminar.classList.add("a-eliminar"); // Añadimos una clase para que sea más visible

itemParaEliminar.addEventListener("click", function() {
  console.log(`Eliminando el elemento: "${this.textContent}" con .remove()`);
  this.remove(); // El elemento se auto-elimina del DOM.
});

console.log("Haz clic en 'Tarea 2' para eliminarla usando el método .remove().");

// b) Método Antiguo: `parentElement.removeChild(element)`
// Antes de `remove()`, la única forma era que el nodo "padre" eliminara a uno de sus "hijos".
// Aún es útil saberlo por si se encuentra en código antiguo o por compatibilidad con navegadores muy viejos.

const primerItem = listaTareas.children[0];
// Para eliminar el primer item con el método antiguo, haríamos:
// listaTareas.removeChild(primerItem);
// console.log("El primer item fue eliminado con removeChild().");


// Otros métodos para insertar elementos (menos comunes pero útiles):
// `element.before(nuevoElemento)`: Inserta `nuevoElemento` justo antes de `element`.
// `element.after(nuevoElemento)`: Inserta `nuevoElemento` justo después de `element`.

const tarea3 = listaTareas.children[2];
if (tarea3) {
  const nuevoAntes = document.createElement('p');
  nuevoAntes.textContent = "(Insertado con .before())";
  tarea3.before(nuevoAntes);
}

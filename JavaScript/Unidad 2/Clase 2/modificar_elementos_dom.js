

// Clase 2 (Unidad 2): Modificación de Elementos del DOM

// Una vez que hemos seleccionado un elemento, podemos cambiar casi todo sobre él:
// su contenido, sus atributos, sus estilos y sus clases CSS.

console.log("--- Empezando la modificación de elementos del DOM ---");

// --- 1. Cambiar el Contenido de un Elemento ---
console.log("\n--- Cambiando Contenido ---");

const titulo = document.querySelector("#titulo");
const contenidoDiv = document.querySelector("#contenido");

// `textContent`: Devuelve o establece el contenido de texto de un nodo y todos sus descendientes.
// Es rápido y seguro, ya que no interpreta el HTML.
console.log("textContent original del título:", titulo.textContent);
titulo.textContent = "¡Título Modificado con textContent!";

// `innerHTML`: Devuelve o establece la sintaxis HTML que describe los descendientes del elemento.
// ¡CUIDADO! Usar `innerHTML` con contenido que no controlas puede ser un riesgo de seguridad (XSS - Cross-Site Scripting),
// porque el navegador interpretará y ejecutará cualquier script que se inserte.
console.log("innerHTML original del div:", contenidoDiv.innerHTML);
contenidoDiv.innerHTML = "<p>Este es un <em>párrafo nuevo</em> insertado con <strong>innerHTML</strong>.</p>";


// --- 2. Modificar Atributos ---
console.log("\n--- Modificando Atributos ---");

const logo = document.querySelector("#logo");

// `getAttribute()`: Obtiene el valor actual de un atributo.
const srcActual = logo.getAttribute("src");
console.log("El atributo 'src' de la imagen es:", srcActual);

// `setAttribute()`: Establece el valor de un atributo. Si el atributo no existe, lo crea.
logo.setAttribute("src", "./logo_nuevo.svg");
logo.setAttribute("alt", "Nuevo logo de la empresa (modificado)");
console.log("El nuevo 'src' es:", logo.getAttribute("src"));

// `removeAttribute()`: Elimina un atributo de un elemento.
// logo.removeAttribute("alt");


// --- 3. Modificar Estilos en Línea (Inline Styles) ---
// Se puede acceder a los estilos en línea de un elemento a través de su propiedad `style`.
// Las propiedades CSS con guiones (ej. `background-color`) se escriben en camelCase (ej. `backgroundColor`).
console.log("\n--- Modificando Estilos ---");

const cajaEstilos = document.querySelector("#caja-estilos");

// Ejemplo interactivo: cambiar estilos con eventos de ratón
cajaEstilos.addEventListener("mouseover", () => {
  cajaEstilos.style.backgroundColor = "#e0f7fa";
  cajaEstilos.style.color = "#00796b";
  cajaEstilos.style.fontWeight = "bold";
  cajaEstilos.style.border = "2px solid #00796b";
});

cajaEstilos.addEventListener("mouseout", () => {
  cajaEstilos.style.backgroundColor = ""; // Vuelve al estilo original de la hoja de estilos
  cajaEstilos.style.color = "";
  cajaEstilos.style.fontWeight = "";
  cajaEstilos.style.border = "";
});


// --- 4. Manipular Clases CSS con `classList` (Método preferido para cambiar estilos) ---
// En lugar de manipular estilos directamente, es mejor práctica definir clases en CSS y añadirlas o quitarlas con JavaScript.
console.log("\n--- Manipulando Clases con classList ---");

const itemParaResaltar = document.querySelectorAll("#lista-clases .item")[1];
const mensajeSecreto = document.querySelector("#mensaje-secreto");
const btnRevelar = document.querySelector("#btn-revelar");

// `classList.add()`: Añade una o más clases.
itemParaResaltar.classList.add("texto-grande");
console.log("Clases del item 2 después de add():", itemParaResaltar.classList);

// `classList.remove()`: Elimina una o más clases.
// `classList.toggle()`: Si la clase existe, la elimina. Si no existe, la añade. Ideal para interruptores.
itemParaResaltar.addEventListener("click", () => {
  itemParaResaltar.classList.toggle("resaltado");
  console.log("Clases del item 2 al hacer clic:", itemParaResaltar.classList);
});

// Ejemplo con el botón para mostrar/ocultar
btnRevelar.addEventListener("click", () => {
  mensajeSecreto.classList.remove("oculto");
  btnRevelar.classList.add("oculto"); // Ocultamos el propio botón
});



// Clase 4 (Unidad 2): Eventos y su Manejo

// Los eventos son acciones que ocurren en la página web, como un clic de un usuario, la carga de una página,
// el envío de un formulario, o el movimiento del ratón. JavaScript nos permite "escuchar" estos eventos
// y ejecutar código en respuesta, haciendo la página interactiva.

// --- 1. `addEventListener()` --- 
// Es el método moderno y recomendado para registrar un "escuchador de eventos" en un elemento.
// Sintaxis: elemento.addEventListener('tipo_de_evento', funcion_a_ejecutar);

console.log("--- Manejo de Eventos ---");

// a) Evento `click`
const btnClick = document.querySelector("#btn-click");
const outputClick = document.querySelector("#output-click");

function alHacerClick() {
  outputClick.textContent = `¡Botón clickeado a las ${new Date().toLocaleTimeString()}!`;
}

btnClick.addEventListener("click", alHacerClick);

// b) Eventos de Ratón: `mouseover` y `mouseout`
const cajaEventos = document.querySelector("#caja-eventos");

cajaEventos.addEventListener("mouseover", () => {
  cajaEventos.style.backgroundColor = "#cce5ff";
  cajaEventos.style.borderColor = "#007bff";
  cajaEventos.textContent = "¡Ratón encima!";
});

cajaEventos.addEventListener("mouseout", () => {
  cajaEventos.style.backgroundColor = "#e9f5ec";
  cajaEventos.style.borderColor = "#28a745";
  cajaEventos.textContent = "Pasa el ratón sobre mí";
});

// --- 2. El Objeto `event` ---
// Cuando un evento ocurre, el navegador pasa automáticamente un objeto `event` a la función manejadora.
// Este objeto contiene información valiosa sobre el evento.

// a) Eventos de Teclado y `event.target`
const inputNombre = document.querySelector("#nombre");
const outputTeclado = document.querySelector("#output-teclado");

inputNombre.addEventListener("keyup", (event) => {
  // `event.target` es el elemento que originó el evento (en este caso, el input).
  // `event.target.value` nos da el valor actual del input.
  outputTeclado.textContent = `Escribiendo: ${event.target.value}`;
  // `event.key` nos dice qué tecla se presionó.
  console.log(`Tecla presionada: ${event.key}`);
});

// b) Evento `submit` y `event.preventDefault()`
const formulario = document.querySelector("#mi-formulario");
const outputForm = document.querySelector("#output-form");
const link = document.querySelector("#link-ejemplo");

formulario.addEventListener("submit", (event) => {
  // `preventDefault()` cancela el comportamiento por defecto del evento.
  // Para un formulario, el comportamiento por defecto es recargar la página.
  event.preventDefault();

  const nombre = inputNombre.value;
  outputForm.textContent = `Formulario enviado. ¡Hola, ${nombre}! (La página no se recargó gracias a preventDefault).`;
  console.log("Evento de submit capturado:", event);
});

// También podemos prevenir la navegación de un enlace
link.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Navegación prevenida. No irás a Google.");
});


// --- 3. Propagación de Eventos (Event Bubbling) ---
// Cuando un evento ocurre en un elemento, primero se ejecuta el manejador en ese elemento,
// luego en su padre, luego en el padre del padre, y así sucesivamente hasta llegar a `window`.
// Esto se llama "burbujeo" (bubbling).

const padre = document.querySelector("#padre");
const hijo = document.querySelector("#hijo");

padre.addEventListener("click", () => {
  console.log("¡Evento capturado en el PADRE!");
});

hijo.addEventListener("click", (event) => {
  console.log("¡Evento capturado en el HIJO!");
  // `event.stopPropagation()` detiene el burbujeo, por lo que el evento no llegará al padre.
  // event.stopPropagation(); 
});

// Al hacer clic en el div "Hijo", verás en la consola que se dispara primero el evento del hijo
// y LUEGO el del padre. Esto es event bubbling en acción.

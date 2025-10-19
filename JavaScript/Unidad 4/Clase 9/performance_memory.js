
// Clase 9 (Unidad 4): Optimización de Rendimiento y Gestión de Memoria

// Un desarrollador senior no solo escribe código que funciona, sino que también se preocupa de que sea
// eficiente, rápido y que no consuma más recursos de los necesarios. Esta clase cubre conceptos clave
// sobre la gestión de memoria en JavaScript y técnicas comunes de optimización.

// --- 1. Gestión de Memoria en JavaScript ---

// JavaScript utiliza un sistema de gestión de memoria automático conocido como Recolección de Basura (Garbage Collection - GC).

// - Memory Heap (Montón de Memoria): Donde se almacenan los objetos, arrays y funciones.
// - Call Stack (Pila de Llamadas): Donde se almacenan las referencias a las funciones en ejecución.

// El Recolector de Basura (GC) se encarga de liberar memoria que ya no está en uso. El algoritmo más común es "Mark-and-Sweep" (Marcar y Limpiar):
// 1. El GC empieza desde un conjunto de objetos "raíz" (como el objeto global `window`).
// 2. Recorre todos los objetos a los que se puede llegar desde estas raíces y los marca como "alcanzables".
// 3. Todos los objetos que no fueron marcados son considerados "basura" y la memoria que ocupan es liberada.

// **Fugas de Memoria (Memory Leaks)**
// Ocurren cuando se almacena memoria que ya no se necesita, pero que el GC no puede liberar porque cree que todavía está en uso.

// Causa 1: Variables Globales Accidentales
function crearVariableGlobal() {
  // Sin `let`, `const` o `var`, `miVariable` se convierte en una propiedad del objeto global (`window`).
  // miVariable = new Array(1000000).join('*'); // El GC no la limpiará hasta que la página se cierre.
}

// Causa 2: Closures que retienen referencias
function crearClosureGrande() {
  const datosGrandes = new Array(1000000).join('x');
  // Esta función interna mantiene una referencia a `datosGrandes`
  return function() { 
    // Si este closure se mantiene vivo (ej. como un event listener), `datosGrandes` nunca será liberado.
    return datosGrandes.length;
  };
}
// const miClosureConDatos = crearClosureGrande();

// Causa 3: Referencias a nodos del DOM eliminados
// let boton = document.getElementById('mi-boton');
// boton.addEventListener('click', () => console.log('click'));
// // Si eliminamos el botón del DOM...
// boton.remove();
// // ...pero la variable `boton` todavía existe, el objeto del botón y su listener no pueden ser recolectados.
// // Solución: boton = null;


// --- 2. Técnicas de Optimización de Rendimiento ---

// a) Minimizar la Manipulación del DOM
// El acceso y la manipulación del DOM son operaciones lentas. Es mejor agruparlas.

// Mal: Múltiples escrituras en el DOM (causa múltiples "reflows" y "repaints")
/*
for (let i = 0; i < 100; i++) {
  document.body.innerHTML += `<div>${i}</div>`;
}
*/

// Bien: Usar un DocumentFragment para construir en memoria y luego añadir al DOM una sola vez.
/*
const fragmento = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.textContent = i;
  fragmento.appendChild(div);
}
document.body.appendChild(fragmento); // Solo una escritura al DOM
*/

// b) Delegación de Eventos (Event Delegation)
// En lugar de añadir un listener a cada uno de 100 botones, añade un solo listener al contenedor padre.
/*
const contenedor = document.getElementById('contenedor-botones');
contenedor.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    console.log(`Botón clickeado: ${event.target.textContent}`);
  }
});
*/

// c) Debounce y Throttle
// Técnicas para controlar la frecuencia con la que se ejecuta una función.

// **Debounce**: Agrupa una ráfaga de eventos en una sola ejecución. Útil para barras de búsqueda.
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
// const busquedaDebounced = debounce(() => console.log("Haciendo petición a la API..."), 500);
// inputBusqueda.addEventListener('keyup', busquedaDebounced);

// **Throttle**: Asegura que una función se ejecute como máximo una vez cada cierto intervalo. Útil para eventos de scroll o resize.
function throttle(func, limit) {
  let enEspera = false;
  return function(...args) {
    if (!enEspera) {
      func.apply(this, args);
      enEspera = true;
      setTimeout(() => {
        enEspera = false;
      }, limit);
    }
  };
}
// window.addEventListener('scroll', throttle(() => console.log("¡Scroll!"), 200));

// d) Carga Diferida (Lazy Loading) y División de Código (Code Splitting)
// En lugar de cargar todo el JavaScript de tu aplicación de una vez, cárgalo solo cuando se necesite.
// La forma moderna de hacer esto es con importaciones dinámicas, que devuelven una promesa.

/*
const botonCargarModulo = document.getElementById('cargar-modulo');

botonCargarModulo.addEventListener('click', () => {
  import('./miModuloPesado.js')
    .then(modulo => {
      modulo.funcionPrincipal();
    })
    .catch(err => console.error("Error al cargar el módulo:", err));
});
*/

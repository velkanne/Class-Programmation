

// Clase 12 (Unidad 3): El Motor y el Entorno de Ejecución de JavaScript

// Esta es una clase conceptual. No hay código ejecutable más allá de los ejemplos para ilustrar el Event Loop.
// El objetivo es entender CÓMO se ejecuta nuestro código "detrás de cámaras".

// --- 1. El Motor de JavaScript (JavaScript Engine) ---

// Un motor de JS es un programa que ejecuta código JavaScript. Cada navegador tiene el suyo.
// - V8: Usado en Google Chrome, Opera, Edge y Node.js (el más conocido).
// - SpiderMonkey: Usado en Firefox.
// - JavaScriptCore: Usado en Safari.

// El trabajo del motor se puede resumir en los siguientes pasos:

// a) Parseo (Parsing): El motor lee el código fuente y lo convierte en una estructura de datos que entiende,
//    llamada Árbol de Sintaxis Abstracta (AST - Abstract Syntax Tree).

// b) Compilación JIT (Just-In-Time): JavaScript es un lenguaje interpretado, pero los motores modernos
//    usan una mezcla de interpretación y compilación para ser más rápidos.
//    - Intérprete: Empieza a ejecutar el código del AST casi inmediatamente. Es rápido para empezar.
//    - Optimizador/Compilador: Mientras el código se ejecuta, un "Profiler" observa qué partes del código
//      se ejecutan con frecuencia ("hot code"). Estas partes se pasan a un compilador, que las traduce
//      a código máquina altamente optimizado. La próxima vez que se necesite ese código, se usa la versión
//      compilada, que es mucho más rápida.

// c) Ejecución: El motor gestiona dos componentes clave para ejecutar el código:
//    - Memory Heap (Montón de Memoria): Una gran región de memoria donde se almacenan los objetos, arrays, etc.
//    - Call Stack (Pila de Llamadas): Una estructura de datos que registra en qué punto del programa estamos.
//      Cuando se llama a una función, se añade a la cima de la pila. Cuando la función retorna, se quita de la pila.

function funcionA() {
  console.log("Entra en A");
  funcionB();
  console.log("Sale de A");
}

function funcionB() {
  console.log("Entra en B");
  // throw new Error("¡Error!"); // Si hay un error, la pila se "desenrolla"
  console.log("Sale de B");
}

// Al llamar a funcionA():
// 1. `funcionA` se añade a la pila. [funcionA]
// 2. `funcionA` llama a `funcionB`. `funcionB` se añade a la pila. [funcionA, funcionB]
// 3. `funcionB` termina. Se quita de la pila. [funcionA]
// 4. `funcionA` termina. Se quita de la pila. [] -> Pila vacía.


// --- 2. El Entorno de Ejecución (Runtime Environment) ---

// El motor de JS no funciona solo. Se ejecuta dentro de un "entorno de ejecución", como un navegador o Node.js.
// Este entorno le da al motor superpoderes, proporcionando APIs que no son parte del lenguaje JavaScript en sí.

// Entorno del Navegador:
// - APIs del DOM (document, window)
// - APIs de comunicación (fetch, XMLHttpRequest)
// - APIs de temporizadores (setTimeout, setInterval)

// Entorno de Node.js:
// - API de sistema de archivos (fs)
// - API de red (http)
// - API de procesos (process)


// --- 3. El Modelo de Concurrencia: Event Loop, Callback Queue y Microtask Queue ---

// JavaScript es de un solo hilo (tiene una sola Pila de Llamadas). ¿Cómo maneja operaciones asíncronas como `setTimeout` o `fetch`?
// Aquí es donde entra el Entorno de Ejecución.

// - Callback Queue (o Task Queue): Cuando una operación asíncrona de una Web API (como `setTimeout`) termina,
//   su función de callback NO se ejecuta inmediatamente. Se coloca en esta cola.

// - Microtask Queue: Es una cola especial para los callbacks de las Promesas (`.then`, `.catch`, `.finally`) y `async/await`.
//   ¡IMPORTANTE! La Microtask Queue tiene MAYOR prioridad que la Callback Queue.

// - Event Loop (Bucle de Eventos): Es un proceso que constantemente hace una pregunta:
//   "¿Está la Pila de Llamadas (Call Stack) vacía?"
//   - Si la pila NO está vacía, espera.
//   - Si la pila SÍ está vacía, hace lo siguiente:
//     1. Revisa la Microtask Queue. Si hay tareas, las ejecuta TODAS hasta que la cola esté vacía.
//     2. Después de vaciar la Microtask Queue, revisa la Callback Queue. Si hay tareas, ejecuta UNA (la más antigua) y la pone en la Pila de Llamadas.
//     3. Repite el ciclo.

console.log("\n--- Demostración del Event Loop ---");

console.log("1. Inicio del script (Síncrono)");

// `setTimeout` es una Web API. Su callback irá a la Callback Queue.
setTimeout(() => {
  console.log("4. Callback de setTimeout (de la Callback Queue)");
}, 0); // Aunque el tiempo sea 0, debe pasar por la cola.

// `Promise.resolve()` crea una promesa que se resuelve inmediatamente.
// Su callback `.then()` irá a la Microtask Queue.
Promise.resolve().then(() => {
  console.log("3. Callback de Promesa (de la Microtask Queue)");
});

console.log("2. Fin del script (Síncrono)");

// Orden de ejecución esperado:
// 1. "1. Inicio del script (Síncrono)"
// 2. "2. Fin del script (Síncrono)"
//    (En este punto, la Pila de Llamadas está vacía. El Event Loop se activa).
// 3. "3. Callback de Promesa (de la Microtask Queue)" (Las microtareas tienen prioridad).
// 4. "4. Callback de setTimeout (de la Callback Queue)" (Se ejecuta después de las microtareas).


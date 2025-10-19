

// Clase 5 (Unidad 2): JavaScript Asíncrono - Callbacks

// JavaScript es un lenguaje de un solo hilo (single-threaded), lo que significa que solo puede hacer una cosa a la vez.
// Sin embargo, muchas tareas (como pedir datos a un servidor) pueden tardar. Si el código se bloqueara esperando,
// la página entera se congelaría. El asincronismo resuelve este problema.

// --- 1. Código Síncrono vs. Asíncrono ---

console.log("--- Síncrono vs. Asíncrono ---");

// a) Síncrono (Synchronous): Las tareas se ejecutan en orden, una después de la otra.
console.log("Paso 1: Inicio del script síncrono.");

function segundaTareaSincrona() {
  console.log("Paso 2: Ejecutando la segunda tarea.");
}

segundaTareaSincrona();

console.log("Paso 3: Fin del script síncrono.");

// b) Asíncrono (Asynchronous): Algunas tareas se inician ahora pero se completan más tarde.
// `setTimeout` es una función asíncrona que ejecuta un código después de un cierto tiempo (en milisegundos).

console.log("\nPaso A: Inicio del script asíncrono.");

setTimeout(() => {
  // Esta función se pone en una "cola" y no se ejecuta hasta que la pila de llamadas principal esté vacía.
  console.log("Paso B: La tarea asíncrona (setTimeout) ha terminado después de 2 segundos.");
}, 2000); // 2000 milisegundos = 2 segundos

console.log("Paso C: El script principal continúa sin esperar a setTimeout.");

// La salida en la consola será: A, C, y luego, 2 segundos después, B.


// --- 2. ¿Qué es un Callback? ---
// Un "callback" (llamada de vuelta) es una función que se pasa como argumento a otra función,
// con la intención de que se ejecute más tarde, cuando una operación (generalmente asíncrona) se complete.

console.log("\n--- Callbacks para Operaciones Asíncronas ---");

// Simularemos una función que pide datos de un usuario a un servidor.
function obtenerDatosDeUsuario(id, callback) {
  console.log(`\nPidiendo datos para el usuario con ID: ${id}...`);
  
  // Simulamos la demora de la red con setTimeout
  setTimeout(() => {
    // Datos que "recibimos" del servidor
    const usuario = {
      id: id,
      nombre: "Maria",
      email: "maria@example.com"
    };
    
    // Una vez que tenemos los datos, llamamos al callback y se los pasamos.
    console.log("¡Datos recibidos!");
    callback(usuario);
  }, 1500);
}

// Así es como usamos la función `obtenerDatosDeUsuario`
// Le pasamos el ID y una función (el callback) que se encargará de procesar los datos cuando lleguen.

obtenerDatosDeUsuario(123, (datosDelUsuario) => {
  console.log("Callback ejecutado. Mostrando los datos:");
  console.log(`Nombre: ${datosDelUsuario.nombre}`);
  console.log(`Email: ${datosDelUsuario.email}`);
});


// --- 3. El Problema: "Callback Hell" o "Pyramid of Doom" ---
// ¿Qué pasa si necesitamos hacer varias llamadas asíncronas en secuencia?
// Por ejemplo: obtener un usuario, luego sus posts, y luego los comentarios del primer post.

function obtenerPosts(usuarioId, callback) {
  setTimeout(() => {
    console.log(`\nObteniendo posts para el usuario ${usuarioId}...`);
    const posts = [ { id: 'post1', texto: 'Hola mundo' }, { id: 'post2', texto: 'Mi segundo post' } ];
    callback(posts);
  }, 1000);
}

function obtenerComentarios(postId, callback) {
  setTimeout(() => {
    console.log(`Obteniendo comentarios para el post ${postId}...`);
    const comentarios = [ { user: 'Ana', texto: '¡Buen post!' }, { user: 'Luis', texto: 'Interesante.' } ];
    callback(comentarios);
  }, 1000);
}

// Esto nos lleva a anidar callbacks uno dentro de otro...

obtenerDatosDeUsuario(456, (usuario) => {
  console.log(`\n--- Callback Hell ---`);
  console.log(`Usuario obtenido: ${usuario.nombre}`);
  
  obtenerPosts(usuario.id, (posts) => {
    console.log(`Posts obtenidos: ${posts.length}`);
    const primerPost = posts[0];
    
    obtenerComentarios(primerPost.id, (comentarios) => {
      console.log(`Comentarios del primer post: ${comentarios.length}`);
      console.log("Comentarios:", comentarios);
      console.log("Fin del Callback Hell.");
      // Y si tuviéramos que hacer otra llamada... la pirámide seguiría creciendo.
    });
  });
});

// Este anidamiento excesivo hace que el código sea difícil de leer, mantener y depurar.
// Este problema es la principal motivación para la introducción de Promesas y Async/Await, que veremos a continuación.

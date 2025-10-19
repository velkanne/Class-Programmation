

// Clase 7 (Unidad 2): JavaScript Asíncrono - Async/Await

// `async/await` es una sintaxis más moderna (introducida en ES2017) que nos permite trabajar con promesas
// de una manera que se ve y se siente como código síncrono. Es "azúcar sintáctico" sobre las promesas,
// lo que significa que no reemplaza a las promesas, sino que las hace más fáciles de usar.

// --- 1. La palabra clave `async` ---
// Al declarar una función con `async`, esta automáticamente devuelve una promesa.

console.log("--- Funciones Async ---");

async function miFuncionAsync() {
  return "¡Hola desde una función async!"; // Este valor se envuelve en una promesa resuelta.
}

// Para obtener el valor, debemos usar `.then()` como con cualquier otra promesa.
miFuncionAsync().then(resultado => console.log(resultado));


// --- 2. La palabra clave `await` ---
// `await` solo se puede usar DENTRO de una función `async`.
// Pausa la ejecución de la función `async` y espera a que una promesa se resuelva o se rechace.
// Luego, reanuda la ejecución y devuelve el valor resuelto de la promesa.

console.log("\n--- Usando await ---");

function crearPromesaConRetraso(valor, retraso) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`(Promesa resuelta con valor: ${valor})`);
      resolve(valor);
    }, retraso);
  });
}

async function ejecutarTareas() {
  console.log("Inicio de la ejecución de tareas.");

  // En lugar de .then(), asignamos el resultado de la promesa a una variable.
  const resultado1 = await crearPromesaConRetraso("Tarea 1 completada", 2000);
  console.log(`Resultado recibido: ${resultado1}`);

  const resultado2 = await crearPromesaConRetraso("Tarea 2 completada", 1000);
  console.log(`Resultado recibido: ${resultado2}`);

  console.log("Todas las tareas han finalizado.");
  return "FIN";
}

// Llamamos a la función async. El código fuera de ella sigue ejecutándose.
console.log("Llamando a ejecutarTareas()...");
ejecutarTareas().then(msg => console.log(msg));
console.log("La llamada a ejecutarTareas() no bloquea el hilo principal.");


// --- 3. Manejo de Errores con `try...catch` ---
// Para manejar promesas rechazadas con `await`, usamos los bloques `try...catch` tradicionales de JavaScript.

console.log("\n--- Manejo de Errores con try...catch ---");

function crearPromesaQueFalla() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("¡La operación falló intencionalmente!"));
    }, 1500);
  });
}

async function ejecutarConPosibleError() {
  try {
    console.log("Intentando ejecutar una operación que puede fallar...");
    const resultado = await crearPromesaQueFalla();
    // Esta línea nunca se ejecutará si la promesa es rechazada.
    console.log("Éxito:", resultado);
  } catch (error) {
    // Si la promesa es rechazada, el control salta a este bloque `catch`.
    console.error("Error capturado:", error.message);
  }
}

// ejecutarConPosibleError();


// --- 4. Reescribiendo el Ejemplo de la Clase Anterior con Async/Await ---
// Las funciones de la clase anterior que devuelven promesas (obtenerUsuario, etc.) no necesitan cambios.

function obtenerUsuario(id) { return new Promise(r => setTimeout(() => { console.log(`(1) Obteniendo usuario ${id}...`); r({ id: id, nombre: "Juan" }); }, 500)); }
function obtenerPosts(u) { return new Promise(r => setTimeout(() => { console.log(`(2) Obteniendo posts de ${u.nombre}...`); r([ { id: 'post1' }, { id: 'post2' } ]); }, 500)); }
function obtenerComentarios(p) { return new Promise(r => setTimeout(() => { console.log(`(3) Obteniendo comentarios de ${p.id}...`); r([ { user: 'Pedro' } ]); }, 500)); }


async function obtenerTodaLaInfo() {
  console.log("\n--- Secuencia con Async/Await ---");
  try {
    const usuario = await obtenerUsuario(777);
    const posts = await obtenerPosts(usuario);
    const comentarios = await obtenerComentarios(posts[0]);

    console.log("\n--- ¡Toda la secuencia ha terminado con éxito! ---");
    console.log("Usuario:", usuario);
    console.log("Posts:", posts);
    console.log("Comentarios:", comentarios);

  } catch (error) {
    console.error("Ocurrió un error en la secuencia:", error.message);
  }
}

// La diferencia en legibilidad es enorme. El código parece síncrono y es mucho más fácil de seguir.
obtenerTodaLaInfo();

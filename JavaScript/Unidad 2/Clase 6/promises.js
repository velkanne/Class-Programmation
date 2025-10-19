

// Clase 6 (Unidad 2): JavaScript Asíncrono - Promesas (Promises)

// Las Promesas son un objeto que representa la eventual finalización (o fallo) de una operación asíncrona.
// Fueron introducidas en ES6 para solucionar el problema del "Callback Hell" y mejorar la legibilidad del código asíncrono.

// --- 1. ¿Qué es una Promesa? ---
// Una promesa es como un "recibo" o una "promesa de un valor futuro". Puede estar en uno de estos tres estados:
// - `pending` (pendiente): Estado inicial, la operación aún no se ha completado.
// - `fulfilled` (cumplida): La operación se completó con éxito. La promesa tiene un valor.
// - `rejected` (rechazada): La operación falló. La promesa tiene una razón (un error).

console.log("--- Creando una Promesa ---");

const miPromesa = new Promise((resolve, reject) => {
  // Dentro de la promesa, ejecutamos nuestra lógica asíncrona (ej. un setTimeout, una llamada a una API).
  console.log("Iniciando la operación asíncrona de la promesa...");
  
  const exito = true; // Cambia a `false` para simular un error

  setTimeout(() => {
    if (exito) {
      // Si la operación es exitosa, llamamos a `resolve` con el resultado.
      resolve("¡Operación completada con éxito!");
    } else {
      // Si la operación falla, llamamos a `reject` con el error.
      reject(new Error("¡Algo salió mal!"));
    }
  }, 2000);
});


// --- 2. Consumiendo una Promesa: `.then()`, `.catch()` y `.finally()` ---
// Para obtener el valor de una promesa, usamos estos métodos.

console.log("\n--- Consumiendo la Promesa ---");

miPromesa
  .then((resultado) => {
    // El bloque `.then()` se ejecuta si la promesa se CUMPLE (fulfilled).
    // El `resultado` es lo que se pasó a la función `resolve()`.
    console.log("Éxito:", resultado);
  })
  .catch((error) => {
    // El bloque `.catch()` se ejecuta si la promesa se RECHAZA (rejected).
    // El `error` es lo que se pasó a la función `reject()`.
    console.error("Error:", error.message);
  })
  .finally(() => {
    // El bloque `.finally()` se ejecuta SIEMPRE, ya sea que la promesa se cumpla o se rechace.
    // Es útil para tareas de limpieza, como ocultar un spinner de carga.
    console.log("La promesa ha finalizado (ya sea con éxito o con error).");
  });

console.log("El código principal no se bloquea, la promesa está 'pendiente'...");


// --- 3. Encadenamiento de Promesas (Chaining) ---
// La verdadera magia de las promesas es que `.then()` y `.catch()` devuelven una nueva promesa,
// lo que nos permite encadenar operaciones asíncronas de forma legible, evitando el Callback Hell.

console.log("\n--- Encadenamiento de Promesas ---");

function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`(1) Obteniendo usuario ${id}...`);
      resolve({ id: id, nombre: "Juan" });
    }, 1000);
  });
}

function obtenerPosts(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`(2) Obteniendo posts de ${usuario.nombre}...`);
      // Simulamos un posible error
      if (usuario.nombre === "Juan") {
        resolve([ { id: 'post1', texto: 'Mi primer post' }, { id: 'post2', texto: 'Mi segundo post' } ]);
      } else {
        reject(new Error("No se pudieron encontrar los posts."));
      }
    }, 1000);
  });
}

function obtenerComentarios(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`(3) Obteniendo comentarios de ${post.id}...`);
      resolve([ { user: 'Pedro', texto: '¡Genial!' } ]);
    }, 1000);
  });
}

// Así se ve la secuencia que antes era un "Callback Hell":
obtenerUsuario(777)
  .then(usuario => {
    // El valor devuelto en un `.then` se pasa como argumento al siguiente `.then`.
    return obtenerPosts(usuario);
  })
  .then(posts => {
    console.log("Posts encontrados:", posts.length);
    const primerPost = posts[0];
    return obtenerComentarios(primerPost);
  })
  .then(comentarios => {
    console.log("Comentarios encontrados:", comentarios);
    console.log("¡Toda la secuencia ha terminado con éxito!");
  })
  .catch(error => {
    // Un solo `.catch` al final puede manejar cualquier error que ocurra en la cadena.
    console.error("\n--- Ocurrió un error en la cadena de promesas ---");
    console.error(error.message);
  });

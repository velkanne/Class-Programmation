

// Clase 12 (Unidad 2): Manejo de Errores (Error Handling)

// Los errores son una parte inevitable de la programación. Un buen manejo de errores evita que la aplicación
// se bloquee por completo y permite ofrecer una mejor experiencia al usuario, mostrando mensajes amigables
// o intentando una acción de recuperación.

// --- 1. El Bloque `try...catch` (Para código síncrono) ---
// Se utiliza para "intentar" ejecutar un bloque de código que podría fallar.
// Si ocurre un error dentro del bloque `try`, la ejecución salta inmediatamente al bloque `catch`.

console.log("--- Bloque try...catch ---");

try {
  console.log("Intentando ejecutar código...");
  // Forzamos un error: `funcionQueNoExiste` no está definida.
  funcionQueNoExiste();
  // Esta línea nunca se ejecutará si ocurre un error arriba.
  console.log("Esta línea no se ve si hay un error.");
} catch (error) {
  // El bloque `catch` recibe un objeto `error` con información sobre lo que salió mal.
  console.error("¡Se ha producido un error!");
  console.error("Nombre del error:", error.name); // Ej: "ReferenceError"
  console.error("Mensaje del error:", error.message); // Ej: "funcionQueNoExiste is not defined"
  // console.error("Stack trace:", error.stack); // Muestra la pila de llamadas hasta el error
}

console.log("El programa continúa después del bloque try...catch.");


// --- 2. El Bloque `finally` ---
// El bloque `finally` se ejecuta SIEMPRE después de `try` y `catch`, sin importar si hubo un error o no.
// Es ideal para código de "limpieza", como cerrar una conexión a una base de datos o un archivo.

console.log("\n--- Bloque finally ---");

try {
  console.log("En el try de finally.");
  // const resultado = 10 / 0; // En JS, esto da Infinity, no un error.
  // throw new Error("Forzando otro error"); // Descomenta para ver el `finally` con error.
} catch (error) {
  console.error("Error capturado en el segundo ejemplo:", error.message);
} finally {
  console.log("Este bloque (finally) se ejecuta siempre.");
}


// --- 3. La Sentencia `throw` (Lanzar Errores Personalizados) ---
// Podemos crear y lanzar nuestros propios errores cuando algo en nuestra lógica no sale como esperamos.

console.log("\n--- Sentencia throw ---");

function dividir(a, b) {
  if (b === 0) {
    // Lanzamos un nuevo objeto Error. Esto detiene la ejecución de la función.
    throw new Error("No se puede dividir por cero.");
  }
  return a / b;
}

try {
  const resultado = dividir(10, 0);
  console.log("Resultado:", resultado);
} catch (error) {
  console.error("Error de división:", error.message);
}


// --- 4. Manejo de Errores en Código Asíncrono ---
// El manejo de errores en código asíncrono es ligeramente diferente.

// a) Con Promesas: Usamos el método `.catch()`
console.log("\n--- Errores con Promesas ---");

new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("La promesa falló")), 1000);
})
  .then(resultado => {
    console.log("Esto no se ejecuta.");
  })
  .catch(error => {
    console.error("Error en la promesa capturado con .catch():", error.message);
  });


// b) Con `async/await`: Usamos `try...catch`
// `async/await` nos permite usar la misma sintaxis `try...catch` que en el código síncrono, lo cual es una gran ventaja.
console.log("\n--- Errores con Async/Await ---");

const ejecutarPromesaQueFalla = async () => {
  try {
    console.log("Esperando una promesa que va a fallar...");
    await new Promise((resolve, reject) => setTimeout(() => reject(new Error("Falló dentro de async/await")), 1500));
  } catch (error) {
    console.error("Error capturado en async/await:", error.message);
  }
};

ejecutarPromesaQueFalla();

console.log("El script principal sigue su curso mientras se resuelven las promesas...");



// Clase 10 (Unidad 4): Web Workers

// Este es el script principal: main.js

console.log("Script principal cargado.");

// --- Selección de Elementos del DOM ---
const btnIniciarWorker = document.querySelector("#btn-iniciar-worker");
const btnCambiarFondo = document.querySelector("#btn-cambiar-fondo");
const output = document.querySelector("#output");

// --- Comprobación y Creación del Worker ---

// Es una buena práctica comprobar si el navegador soporta Web Workers.
if (window.Worker) {
  console.log("El navegador soporta Web Workers.");

  // 1. Creamos una nueva instancia del Worker, pasándole la ruta al script del worker.
  const miWorker = new Worker("worker.js");

  // 2. Escuchamos el evento `click` para iniciar la tarea en el worker.
  btnIniciarWorker.addEventListener("click", () => {
    output.textContent = "Iniciando cálculo pesado en el worker...";
    btnIniciarWorker.disabled = true;

    // 3. Enviamos un mensaje al worker usando `postMessage()`.
    // Podemos enviar cualquier objeto que sea "clonable" (strings, números, objetos, arrays, etc.).
    miWorker.postMessage({ 
      comando: "iniciar_calculo",
      numero: 10_000_000_000 // Un número grande para que el cálculo tarde
    });
    console.log("Mensaje enviado al worker para que inicie el cálculo.");
  });

  // 4. Escuchamos los mensajes que el worker nos envía de vuelta.
  miWorker.onmessage = function(event) {
    console.log(`Mensaje recibido del worker:`, event.data);

    if (event.data.comando === "calculo_terminado") {
      output.textContent = `¡Cálculo terminado! Resultado: ${event.data.resultado}`;
      btnIniciarWorker.disabled = false;
    }
  };

  // También podemos escuchar errores que ocurran en el worker.
  miWorker.onerror = function(error) {
    console.error("Error recibido del worker:", error.message);
    output.textContent = `Error en el worker: ${error.message}`;
    btnIniciarWorker.disabled = false;
  };

  // Para terminar un worker desde el hilo principal:
  // miWorker.terminate();

} else {
  console.log("Tu navegador no soporta Web Workers.");
  output.textContent = "Este navegador no soporta Web Workers.";
  btnIniciarWorker.disabled = true;
}

// --- Demostración de que la UI no se bloquea ---

// Este botón funciona perfectamente mientras el worker está ocupado,
// demostrando que el hilo principal está libre.
btnCambiarFondo.addEventListener("click", () => {
  const colorActual = document.body.style.backgroundColor;
  if (colorActual === 'lightblue') {
    document.body.style.backgroundColor = "lightgreen";
  } else {
    document.body.style.backgroundColor = "lightblue";
  }
  console.log("¡El fondo cambió! El hilo principal está libre.");
});

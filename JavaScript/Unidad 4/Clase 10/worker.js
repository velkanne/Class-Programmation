
// Clase 10 (Unidad 4): Web Workers

// Este es el script del Worker: worker.js

console.log("(Worker) Script del worker cargado.");

// El worker tiene su propio ámbito global. `self` se refiere a este ámbito global del worker.
// `self` es similar a `window` en el hilo principal, pero no tiene acceso al DOM.

// El worker escucha mensajes del hilo principal a través del evento `onmessage`.
self.onmessage = function(event) {
  console.log(`(Worker) Mensaje recibido del hilo principal:`, event.data);

  const numeroParaCalcular = event.data.numero;

  // Simulamos una tarea computacionalmente intensiva.
  // Esto bloquearía la UI si se ejecutara en el hilo principal.
  let resultado = 0;
  for (let i = 0; i < numeroParaCalcular; i++) {
    resultado += i;
  }

  console.log("(Worker) Cálculo terminado. Enviando resultado de vuelta.");

  // El worker envía el resultado de vuelta al hilo principal usando `self.postMessage()`.
  self.postMessage({
    comando: "calculo_terminado",
    resultado: resultado
  });
};

// El worker también puede escuchar otros eventos, como errores.
self.onerror = function(error) {
  console.error("(Worker) Ha ocurrido un error en el worker:", error);
};

// Podemos incluso usar `fetch` dentro de un worker.
/*
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => {
    self.postMessage({ comando: 'datos_recibidos', data: data });
  });
*/

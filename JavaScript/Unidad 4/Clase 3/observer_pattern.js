

// Clase 3 (Unidad 4): Patrones de Diseño - Observer (Observador)

// --- El Patrón Observer ---
// Propósito: Definir una dependencia de uno-a-muchos entre objetos, de modo que cuando un objeto (el "sujeto")
// cambia su estado, todos sus dependientes (los "observadores") son notificados y actualizados automáticamente.

// Casos de Uso:
// - Sistemas de eventos, como los eventos del DOM en el navegador.
// - Implementación de notificaciones push.
// - Mantener la consistencia entre objetos relacionados sin acoplarlos fuertemente.
// - Frameworks de UI como React (el estado) y Angular, donde un cambio en el estado provoca una actualización en la vista.

console.log("--- Implementación del Patrón Observer ---");

// --- 1. El Sujeto (Subject) ---
// Mantiene una lista de observadores y tiene métodos para gestionarlos y notificarlos.
class Sujeto {
  constructor() {
    this.observadores = [];
  }

  suscribir(observador) {
    this.observadores.push(observador);
    console.log(`(Sujeto: ${observador.nombre} se ha suscrito.)`);
  }

  desuscribir(observador) {
    this.observadores = this.observadores.filter(obs => obs !== observador);
    console.log(`(Sujeto: ${observador.nombre} se ha desuscrito.)`);
  }

  notificar(data) {
    console.log("\n(Sujeto: Notificando a todos los observadores...)");
    this.observadores.forEach(observador => {
      // Llama al método `actualizar` de cada observador.
      observador.actualizar(data);
    });
  }
}

// --- 2. El Sujeto Concreto ---
// Es la clase que será observada. Hereda del Sujeto y llama a `notificar` cuando su estado cambia.

class Noticiero extends Sujeto {
  constructor(nombre) {
    super();
    this.nombre = nombre;
    this.ultimaNoticia = "";
  }

  publicarNoticia(noticia) {
    console.log(`\n¡${this.nombre} publica una nueva noticia!`);
    this.ultimaNoticia = noticia;
    // Notifica a todos los suscriptores sobre la nueva noticia.
    this.notificar(noticia);
  }
}

// --- 3. El Observador (Observer) ---
// Es la interfaz o clase base para los objetos que quieren ser notificados.
// Deben tener un método (ej. `actualizar`) que el sujeto pueda llamar.

class Lector {
  constructor(nombre) {
    this.nombre = nombre;
  }

  // Este es el método que el sujeto llamará.
  actualizar(noticia) {
    console.log(`- ${this.nombre} ha recibido la noticia: "${noticia}"`);
  }
}

// --- Uso del Patrón Observer ---

// 1. Creamos el sujeto concreto (el noticiero).
const noticieroPrincipal = new Noticiero("El Diario Global");

// 2. Creamos varios observadores (lectores).
const lector1 = new Lector("Ana");
const lector2 = new Lector("Carlos");
const lector3 = new Lector("Beatriz");

// 3. Suscribimos los observadores al sujeto.
noticieroPrincipal.suscribir(lector1);
noticieroPrincipal.suscribir(lector2);
noticieroPrincipal.suscribir(lector3);

// 4. El sujeto cambia de estado y notifica a los observadores.
noticieroPrincipal.publicarNoticia("Nuevos avances en la exploración espacial.");

// 5. Un observador puede desuscribirse.
noticieroPrincipal.desuscribir(lector2);

// 6. El sujeto vuelve a cambiar de estado. El observador desuscrito ya no es notificado.
noticieroPrincipal.publicarNoticia("La economía muestra signos de recuperación.");


// --- Beneficios del Patrón Observer ---
// - Acoplamiento Débil (Loose Coupling): El sujeto solo sabe que tiene una lista de observadores, pero no sabe
//   quiénes son o qué hacen. Los observadores pueden ser añadidos o eliminados en cualquier momento sin
//   modificar al sujeto.
// - Relaciones Dinámicas: Se pueden establecer y quitar relaciones entre sujeto y observador en tiempo de ejecución.
// - Reusabilidad: Tanto los sujetos como los observadores pueden ser reutilizados de forma independiente.


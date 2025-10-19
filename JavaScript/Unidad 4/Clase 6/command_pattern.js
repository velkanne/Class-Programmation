

// Clase 6 (Unidad 4): Patrones de Diseño - Command (Comando)

// --- El Patrón Command ---
// Propósito: Encapsular una solicitud como un objeto, permitiendo así parametrizar clientes con diferentes solicitudes,
// encolar o registrar solicitudes, y soportar operaciones que se pueden deshacer.

// En lugar de que un objeto llame directamente a un método de otro, el objeto que invoca la acción (Invoker)
// solo conoce una interfaz de comando y no sabe nada sobre el objeto que finalmente realizará la acción (Receiver).

// Casos de Uso:
// - Implementar operaciones de Deshacer/Rehacer (Undo/Redo).
// - Encolar tareas para ser ejecutadas en segundo plano.
// - Crear menús, botones y otros elementos de UI que ejecutan acciones complejas.
// - Grabar secuencias de acciones del usuario para reproducirlas más tarde (macros).

console.log("--- Implementación del Patrón Command ---");

// --- 1. El Receptor (Receiver) ---
// Es el objeto que sabe cómo realizar la operación real. Es el que hace el trabajo.

class Calculadora {
  constructor() {
    this.valor = 0;
  }

  ejecutar(operacion, operando) {
    switch (operacion) {
      case 'sumar':
        this.valor += operando;
        break;
      case 'restar':
        this.valor -= operando;
        break;
      case 'multiplicar':
        this.valor *= operando;
        break;
      default:
        throw new Error(`Operación no válida: ${operacion}`);
    }
    console.log(`(Calculadora) Valor actual: ${this.valor}`);
  }
}

// --- 2. La Interfaz del Comando y los Comandos Concretos ---
// El comando encapsula la información necesaria para llamar a un método del receptor.

class ComandoCalculadora {
  constructor(receptor, operacion, operando) {
    this.receptor = receptor; // La calculadora
    this.operacion = operacion;
    this.operando = operando;
  }

  // El método principal que el Invocador llamará.
  execute() {
    this.receptor.ejecutar(this.operacion, this.operando);
  }

  // Para implementar la funcionalidad de deshacer.
  undo() {
    const operacionInversa = {
      sumar: 'restar',
      restar: 'sumar',
      multiplicar: 'dividir' // Simplificación, la división real sería más compleja
    };
    this.receptor.ejecutar(operacionInversa[this.operacion], this.operando);
  }
}

// --- 3. El Invocador (Invoker) ---
// Es el objeto que tiene una referencia a un comando y lo ejecuta cuando es necesario.
// También puede llevar un historial de los comandos ejecutados.

class Invoker {
  constructor() {
    this.historial = [];
  }

  ejecutarComando(comando) {
    console.log(`
(Invoker) Ejecutando comando: ${comando.operacion} ${comando.operando}`);
    comando.execute();
    this.historial.push(comando);
  }

  deshacerUltimoComando() {
    const ultimoComando = this.historial.pop();
    if (ultimoComando) {
      console.log(`(Invoker) Deshaciendo último comando: ${ultimoComando.operacion} ${ultimoComando.operando}`);
      ultimoComando.undo();
    }
  }
}

// --- 4. Uso del Patrón Command ---

// Creamos las instancias de los objetos.
const calculadora = new Calculadora();
const invoker = new Invoker();

// Creamos los objetos de comando. Fíjate que no se ejecutan todavía.
const comandoSuma = new ComandoCalculadora(calculadora, 'sumar', 10);
const comandoResta = new ComandoCalculadora(calculadora, 'restar', 3);
const comandoMultiplicar = new ComandoCalculadora(calculadora, 'multiplicar', 5);

// El invocador ejecuta los comandos.
invoker.ejecutarComando(comandoSuma);      // Valor: 10
invoker.ejecutarComando(comandoResta);     // Valor: 7
invoker.ejecutarComando(comandoMultiplicar); // Valor: 35

console.log("\n--- Deshaciendo operaciones ---");

invoker.deshacerUltimoComando(); // Deshace la multiplicación. Valor: 7
invoker.deshacerUltimoComando(); // Deshace la resta. Valor: 10
invoker.deshacerUltimoComando(); // Deshace la suma. Valor: 0


// --- Beneficios del Patrón Command ---
// - Desacoplamiento: El objeto que invoca la operación (Invoker) no necesita saber nada sobre cómo se realiza la operación.
//   Solo necesita saber que el objeto de comando tiene un método `execute()`.
// - Extensibilidad: Es fácil añadir nuevos comandos sin cambiar el código existente.
// - Funcionalidad de Deshacer/Rehacer: Al guardar un historial de objetos de comando, es relativamente sencillo
//   implementar la capacidad de deshacer y rehacer acciones.
// - Comandos como objetos: Permite almacenar, pasar y ejecutar comandos en diferentes momentos.


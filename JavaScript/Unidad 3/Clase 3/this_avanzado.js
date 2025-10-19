

// Clase 3 (Unidad 3): Patrones Avanzados con `this`

// Entender `this` es fundamental para dominar JavaScript. Su valor (contexto) se decide en el momento de la
// ejecución de una función. Repasemos los patrones comunes y cómo manejar los casos más complicados.

// --- Repaso Rápido de las 4 Reglas de `this` ---
// 1. Invocación de Función: `miFuncion()` -> `this` es el objeto global (o `undefined` en modo estricto).
// 2. Invocación de Método: `miObjeto.miMetodo()` -> `this` es `miObjeto`.
// 3. Invocación con `new`: `new MiClase()` -> `this` es la nueva instancia que se está creando.
// 4. Invocación Explícita: `miFuncion.call(contexto, ...)` -> `this` es el `contexto` que pasamos.


// --- El Problema: Pérdida de Contexto de `this` ---
// Un problema muy común ocurre cuando pasamos un método de un objeto como un callback.

console.log("--- El Problema: Pérdida de `this` ---");

class Temporizador {
  constructor() {
    this.segundos = 0;
    this.idIntervalo = null;
  }

  iniciar() {
    // `setInterval` es una función del sistema (del objeto global).
    // Al pasar `this.incrementarSegundos`, se pasa la función pero no su contexto (el objeto Temporizador).
    // Cuando `setInterval` la ejecute, lo hará como una invocación de función normal (Regla 1).
    this.idIntervalo = setInterval(this.incrementarSegundos, 1000);
  }

  incrementarSegundos() {
    // `this` aquí NO es la instancia de Temporizador. En modo no estricto, es `window`.
    // `window.segundos` es `undefined`. `undefined + 1` es `NaN`.
    this.segundos++;
    console.log(`Segundos: ${this.segundos}`);
  }

  detener() {
    clearInterval(this.idIntervalo);
    console.log("Temporizador detenido.");
  }
}

const miTemporizador = new Temporizador();
// miTemporizador.iniciar(); // Si ejecutas esto (en Node o navegador), verás "Segundos: NaN" repetidamente.


// --- Solución 1: `that` o `self` (El método antiguo) ---
// Guardar el `this` correcto en una variable antes de entrar en un contexto diferente.

class TemporizadorSolucion1 {
  constructor() { this.segundos = 0; }
  iniciar() {
    const self = this; // Guardamos el `this` de la instancia.
    setInterval(function() {
      // Usamos `self` que sí apunta a la instancia.
      self.segundos++;
      console.log(`(Solución 1) Segundos: ${self.segundos}`);
    }, 1000);
  }
}
// const t1 = new TemporizadorSolucion1();
// t1.iniciar();


// --- Solución 2: `Function.prototype.bind()` (Recomendado antes de ES6) ---
// `bind()` crea una nueva función que, cuando es llamada, tiene su `this` permanentemente establecido.

console.log("\n--- Solución 2: .bind() ---");

class TemporizadorSolucion2 {
  constructor() {
    this.segundos = 0;
    // Podemos "atar" el `this` directamente en el constructor.
    this.incrementarSegundos = this.incrementarSegundos.bind(this);
  }

  iniciar() {
    // Ahora, la función que pasamos a setInterval ya tiene el `this` correcto "atado".
    setInterval(this.incrementarSegundos, 1000);
  }

  incrementarSegundos() {
    this.segundos++;
    console.log(`(Solución 2) Segundos: ${this.segundos}`);
  }
}

// const t2 = new TemporizadorSolucion2();
// t2.iniciar();


// --- Solución 3: Funciones Flecha (Arrow Functions - La solución moderna) ---
// Las funciones flecha no tienen su propio `this`. Heredan el `this` del contexto léxico en el que fueron creadas.
// Esta es la solución más limpia y preferida en código moderno.

console.log("\n--- Solución 3: Funciones Flecha ---");

class TemporizadorSolucion3 {
  constructor() {
    this.segundos = 0;
  }

  iniciar() {
    // Usamos una función flecha como callback. El `this` dentro de ella es el mismo
    // `this` que hay fuera de ella (el de la instancia de Temporizador).
    setInterval(() => {
      this.segundos++;
      console.log(`(Solución 3) Segundos: ${this.segundos}`);
    }, 1000);
  }
}

const t3 = new TemporizadorSolucion3();
// t3.iniciar(); // Descomenta para probar. Esta es la forma más común hoy en día.


// --- Repaso de `.call()` y `.apply()` ---
// A diferencia de `bind`, `.call` y `.apply` ejecutan la función inmediatamente, estableciendo `this` solo para esa llamada.

console.log("\n--- .call() y .apply() ---");

const coche = { marca: "Ford" };

function describir(propietario, anio) {
  console.log(`Este coche es un ${this.marca} de ${propietario}, del año ${anio}.`);
}

// .call(thisContext, arg1, arg2, ...)
_describir.call(coche, "Luis", 2021);

// .apply(thisContext, [arg1, arg2, ...])
describir.apply(coche, ["Marta", 2023]);

// Son útiles para "tomar prestado" un método de otro objeto.
const persona = {
  nombre: "Elena",
  saludar: function() { console.log(`Hola, soy ${this.nombre}`); }
}

const otraPersona = { nombre: "Pedro" };

persona.saludar.call(otraPersona); // "Hola, soy Pedro"


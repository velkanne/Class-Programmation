

// Clase 5 (Unidad 3): Closures (Clausuras)

// Un closure es una de las características más poderosas de JavaScript. Se crea cuando una función
// es definida dentro de otra función, permitiendo a la función interna acceder al ámbito (scope)
// de la función externa, incluso después de que la función externa haya terminado su ejecución.

// En esencia, una función "recuerda" el entorno en el que fue creada.

// --- 1. Ejemplo Básico de un Closure ---
console.log("--- Ejemplo Básico ---");

function funcionExterna() {
  const variableExterna = "Soy una variable externa";

  // `funcionInterna` es un closure. Tiene acceso a `variableExterna`.
  function funcionInterna() {
    console.log(variableExterna);
  }

  // Devolvemos la función interna sin ejecutarla.
  return funcionInterna;
}

// `miClosure` ahora es una referencia a `funcionInterna`.
const miClosure = funcionExterna();

// Aunque `funcionExterna` ya terminó, `miClosure` todavía "recuerda" `variableExterna`.
miClosure(); // Imprime "Soy una variable externa"


// --- 2. Caso de Uso: Privacidad de Datos (Emulando Métodos Privados) ---
// Los closures son el mecanismo principal en JavaScript para crear variables "privadas".

console.log("\n--- Caso de Uso: Privacidad de Datos ---");

function crearContador() {
  // `_conteo` es una variable "privada". No se puede acceder a ella desde fuera de `crearContador`.
  let _conteo = 0;

  // Devolvemos un objeto con métodos que SÍ tienen acceso a `_conteo` porque son closures.
  return {
    incrementar: function() {
      _conteo++;
    },
    decrementar: function() {
      _conteo--;
    },
    obtenerValor: function() {
      return _conteo;
    }
  };
}

const contador1 = crearContador();

contador1.incrementar();
contador1.incrementar();
console.log("Valor del contador 1:", contador1.obtenerValor()); // 2

// No podemos acceder a `_conteo` directamente.
// console.log(contador1._conteo); // undefined

// Cada llamada a `crearContador` crea un nuevo ámbito (un nuevo closure), por lo que los contadores son independientes.
const contador2 = crearContador();
contador2.incrementar();
console.log("Valor del contador 2:", contador2.obtenerValor()); // 1
console.log("Valor del contador 1 (sin cambios):", contador1.obtenerValor()); // 2


// --- 3. Caso de Uso: Fábricas de Funciones (Function Factories) ---
// Un closure permite crear funciones pre-configuradas.

console.log("\n--- Caso de Uso: Fábricas de Funciones ---");

function crearSaludador(saludo) {
  return function(nombre) {
    console.log(`${saludo}, ${nombre}!`);
  };
}

const saludarEnEspanol = crearSaludador("Hola");
const saludarEnIngles = crearSaludador("Hello");

saludarEnEspanol("Carlos"); // "Hola, Carlos!"
saludarEnIngles("Alice");   // "Hello, Alice!"


// --- 4. Closures en Bucles: Un Error Común ---
// Un error clásico con closures y `var` en bucles.

console.log("\n--- Closures en Bucles ---");

function crearFuncionesConVar() {
  const arr = [];
  for (var i = 0; i < 3; i++) {
    // Todas las funciones creadas aquí comparten el MISMO ámbito y la MISMA variable `i`.
    arr.push(function() { console.log(`(var) El valor de i es: ${i}`); });
  }
  return arr;
}

const funcionesVar = crearFuncionesConVar();
// Cuando se ejecutan, el bucle ya ha terminado y el valor final de `i` es 3.
funcionesVar[0](); // Imprime 3
funcionesVar[1](); // Imprime 3
funcionesVar[2](); // Imprime 3

// Con `let`, el problema se soluciona. `let` crea una nueva variable `i` para CADA iteración del bucle,
// creando un nuevo ámbito de bloque para cada una.
function crearFuncionesConLet() {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    // Cada función tiene su propio `i` "recordado".
    arr.push(function() { console.log(`(let) El valor de i es: ${i}`); });
  }
  return arr;
}

const funcionesLet = crearFuncionesConLet();
funcionesLet[0](); // Imprime 0
funcionesLet[1](); // Imprime 1
funcionesLet[2](); // Imprime 2


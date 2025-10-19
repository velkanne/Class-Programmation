
// Clase 6: Scope (Ámbito) en JavaScript

// El "scope" o ámbito determina la accesibilidad y visibilidad de las variables y funciones en diferentes partes del código.
// Entender el scope es crucial para evitar errores y escribir código robusto.

// --- 1. Scope Global (Ámbito Global) ---
// Las variables declaradas fuera de cualquier función o bloque tienen un scope global.
// Pueden ser accedidas desde cualquier parte del código.

console.log("--- Scope Global ---");

const variableGlobal = "Soy accesible desde cualquier lugar";

function mostrarVariableGlobal() {
  console.log("Dentro de la función:", variableGlobal);
}

mostrarVariableGlobal();
console.log("Fuera de la función:", variableGlobal);

// ¡CUIDADO! Abusar de las variables globales es una mala práctica, ya que pueden ser modificadas
// accidentalmente por cualquier parte del código, llevando a errores difíciles de rastrear.


// --- 2. Scope de Función (Ámbito de Función) ---
// Las variables declaradas con `var` dentro de una función solo son accesibles dentro de esa función.

console.log("\n--- Scope de Función ---");

function miFuncion() {
  var variableDeFuncion = "Solo vivo dentro de esta función";
  console.log(variableDeFuncion);
}

miFuncion();
// console.log(variableDeFuncion); // Esto daría un error: ReferenceError: variableDeFuncion is not defined


// --- 3. Scope de Bloque (Ámbito de Bloque) - ES6 ---
// Las variables declaradas con `let` y `const` dentro de un bloque `{}` solo son accesibles dentro de ese bloque.
// Un bloque puede ser un `if`, un `for`, un `while`, o simplemente un par de llaves.

console.log("\n--- Scope de Bloque ---");

if (true) {
  let variableDeBloqueLet = "Hola desde un bloque (let)";
  const variableDeBloqueConst = "Hola desde un bloque (const)";
  var variableDeBloqueVar = "Hola desde un bloque (var)"; // `var` no respeta el scope de bloque.
  console.log(variableDeBloqueLet);
  console.log(variableDeBloqueConst);
}

// console.log(variableDeBloqueLet); // Error: variableDeBloqueLet is not defined
// console.log(variableDeBloqueConst); // Error: variableDeBloqueConst is not defined
console.log("Fuera del bloque, 'var' sí es accesible:", variableDeBloqueVar); // Esto demuestra por qué `let` y `const` son más seguros.

for (let i = 0; i < 3; i++) {
  console.log("Dentro del bucle for:", i);
}
// console.log("Fuera del bucle for:", i); // Error: i is not defined


// --- 4. Cadena de Scopes (Scope Chain) ---
// Cuando se busca una variable, JavaScript primero mira en el scope actual.
// Si no la encuentra, sube al scope "padre" (el que lo contiene) y busca allí.
// Continúa subiendo hasta llegar al scope global. Si no la encuentra, lanza un error.

console.log("\n--- Cadena de Scopes ---");

const scopeExterno = "Soy del scope externo";

function funcionExterna() {
  const scopeMedio = "Soy del scope medio";

  function funcionInterna() {
    const scopeInterno = "Soy del scope interno";

    // La `funcionInterna` puede acceder a todas las variables:
    console.log(scopeInterno);   // Su propio scope
    console.log(scopeMedio);     // Scope de la función que la contiene (padre)
    console.log(scopeExterno);   // Scope global (abuelo)
  }

  funcionInterna();
  // console.log(scopeInterno); // Error: scopeInterno no es accesible aquí.
}

funcionExterna();

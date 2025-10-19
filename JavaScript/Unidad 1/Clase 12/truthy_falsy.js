
// Clase 12: Valores "Truthy" y "Falsy"

// En JavaScript, cada valor tiene un valor booleano inherente. Esto es especialmente importante en contextos
// donde se espera un booleano, como en una sentencia `if` o con operadores lógicos.

// Un valor "falsy" es un valor que se considera `false` cuando se encuentra en un contexto booleano.
// Un valor "truthy" es un valor que se considera `true` cuando se encuentra en un contexto booleano.

// --- 1. Los 6 Valores Falsy ---
// Solo hay seis valores "falsy" en JavaScript. ¡Todo lo demás es "truthy"!

console.log("--- Valores Falsy ---");

// 1. El booleano `false`
console.log(`Boolean(false) ->`, Boolean(false));

// 2. El número `0` (y también `-0` y `0n` para BigInt)
console.log(`Boolean(0) ->`, Boolean(0));

// 3. El string vacío `""` (o `''` o `` ``)
console.log(`Boolean("") ->`, Boolean(""));

// 4. `null`
console.log(`Boolean(null) ->`, Boolean(null));

// 5. `undefined`
console.log(`Boolean(undefined) ->`, Boolean(undefined));

// 6. `NaN` (Not a Number)
console.log(`Boolean(NaN) ->`, Boolean(NaN));


// --- 2. Ejemplos de Valores Truthy ---
// Cualquier valor que no esté en la lista anterior es "truthy".

console.log("\n--- Valores Truthy ---");

// Un string no vacío
console.log(`Boolean("hola") ->`, Boolean("hola"));

// Un número diferente de cero
console.log(`Boolean(100) ->`, Boolean(100));
console.log(`Boolean(-5) ->`, Boolean(-5));

// Un array (incluso si está vacío)
console.log(`Boolean([]) ->`, Boolean([]));

// Un objeto (incluso si está vacío)
console.log(`Boolean({}) ->`, Boolean({}));

// El string "0"
console.log(`Boolean("0") ->`, Boolean("0"));

// El string "false"
console.log(`Boolean("false") ->`, Boolean("false"));


// --- 3. Aplicaciones Prácticas ---

console.log("\n--- Aplicaciones Prácticas ---");

// a) En sentencias `if`
let nombreUsuario = ""; // Imagina que esto viene de un formulario

if (nombreUsuario) { // Esto evalúa a `Boolean("")`, que es `false`
  console.log(`Bienvenido, ${nombreUsuario}!`);
} else {
  console.log("Por favor, introduce tu nombre.");
}

// b) Con el operador OR (||) para valores por defecto
// El operador `||` devuelve el primer valor "truthy" que encuentra.
let puerto = 0; // Un valor falsy
const puertoConfigurado = puerto || 3000; // Como `puerto` es falsy, se asigna 3000

console.log(`\nEl servidor correrá en el puerto: ${puertoConfigurado}`); // Imprime 3000, lo cual puede ser un error si 0 es un puerto válido.

// Para solucionar esto, se introdujo el "Nullish Coalescing Operator" (??) en ES2020
// `??` solo elige el valor de la derecha si el de la izquierda es `null` o `undefined`.
const puertoCorrecto = puerto ?? 3000;
console.log(`Puerto correcto con (??): ${puertoCorrecto}`); // Imprime 0, porque 0 no es null ni undefined.


// c) Con el operador AND (&&) para ejecución condicional
// El operador `&&` se usa a menudo como un atajo para `if`.
// Si el primer operando es "truthy", devuelve y evalúa el segundo.
// Si el primer operando es "falsy", lo devuelve y no evalúa el segundo.

let estaLogueado = true;
let panelDeUsuario = { mostrar: () => console.log("\nMostrando panel de usuario...") };

estaLogueado && panelDeUsuario.mostrar(); // Como `estaLogueado` es true, se ejecuta el método `mostrar()`.

let tieneErrores = false;
tieneErrores && console.log("Hay errores en el formulario."); // Como `tieneErrores` es false, el console.log nunca se ejecuta.


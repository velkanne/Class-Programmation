

// Clase 2: Operadores en JavaScript

// Los operadores son símbolos especiales que realizan operaciones sobre valores y variables (operandos).

// --- 1. Operadores Aritméticos ---
// Se usan para realizar cálculos matemáticos.
let a = 10;
let b = 5;

console.log("--- Operadores Aritméticos ---");
console.log(`Valores iniciales: a = ${a}, b = ${b}`);
console.log("Suma (a + b):", a + b); // 15
console.log("Resta (a - b):", a - b); // 5
console.log("Multiplicación (a * b):", a * b); // 50
console.log("División (a / b):", a / b); // 2
console.log("Módulo (a % b):", a % b); // 0 (Es el residuo de la división)
console.log("Exponenciación (a ** b):", a ** b); // 100000 (a elevado a la potencia de b)

// Incremento y Decremento
a++; // a = a + 1
console.log("Incremento (a++):", a); // 11
b--; // b = b - 1
console.log("Decremento (b--):", b); // 4


// --- 2. Operadores de Asignación ---
// Se usan para asignar valores a las variables.
let c = 15;
console.log("\n--- Operadores de Asignación ---");
console.log("Valor inicial de c:", c);

c += 5; // Equivalente a: c = c + 5
console.log("c += 5:", c); // 20

c -= 10; // Equivalente a: c = c - 10
console.log("c -= 10:", c); // 10

c *= 2; // Equivalente a: c = c * 2
console.log("c *= 2:", c); // 20

c /= 4; // Equivalente a: c = c / 4
console.log("c /= 4:", c); // 5


// --- 3. Operadores de Comparación ---
// Comparan dos valores y devuelven un resultado booleano (true o false).
let val1 = 23;
let val2 = "23";

console.log("\n--- Operadores de Comparación ---");
console.log(`Valores: val1 = ${val1} (número), val2 = '${val2}' (string)`)

// Igualdad (==): Compara si los valores son iguales, realizando conversión de tipo si es necesario.
console.log("Igualdad (val1 == val2):", val1 == val2); // true (Peligroso! Convierte el string a número)

// Igualdad Estricta (===): Compara si los valores y los tipos son iguales. Es la opción recomendada.
console.log("Igualdad Estricta (val1 === val2):", val1 === val2); // false (Recomendado)

// Desigualdad (!=)
console.log("Desigualdad (val1 != val2):", val1 != val2); // false

// Desigualdad Estricta (!==)
console.log("Desigualdad Estricta (val1 !== val2):", val1 !== val2); // true (Recomendado)

let num1 = 10;
let num2 = 20;
console.log(`\nComparando números: num1 = ${num1}, num2 = ${num2}`);
console.log("Mayor que (num1 > num2):", num1 > num2); // false
console.log("Menor que (num1 < num2):", num1 < num2); // true
console.log("Mayor o igual que (num1 >= 10):", num1 >= 10); // true
console.log("Menor o igual que (num2 <= 15):", num2 <= 15); // false


// --- 4. Operadores Lógicos ---
// Se usan para combinar expresiones booleanas.

console.log("\n--- Operadores Lógicos ---");
const esAdulto = true;
const tieneLicencia = false;

// AND (&&): Devuelve true solo si ambos operandos son true.
console.log("¿Puede conducir? (esAdulto && tieneLicencia):", esAdulto && tieneLicencia); // false

// OR (||): Devuelve true si al menos uno de los operandos es true.
console.log("¿Puede entrar al bar o tiene un ticket? (esAdulto || tieneLicencia):", esAdulto || tieneLicencia); // true

// NOT (!): Invierte el valor booleano del operando.
console.log("No es adulto (!esAdulto):", !esAdulto); // false


// --- 5. Operador Ternario ---
// Es un atajo para una sentencia if-else.
// sintaxis: condicion ? valorSiEsVerdadero : valorSiEsFalso;

console.log("\n--- Operador Ternario ---");
let edadUsuario = 19;
let mensaje = (edadUsuario >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(`Con edad ${edadUsuario}, el mensaje es: "${mensaje}"`);


// --- 6. Operador de Tipo (typeof) ---
// Devuelve una cadena indicando el tipo del operando.
console.log("\n--- Operador de Tipo ---");
let miVariable = { nombre: "Ana" };
console.log("El tipo de 'miVariable' es:", typeof miVariable); // "object"
console.log("El tipo de 'mensaje' es:", typeof mensaje); // "string"
console.log("El tipo de 'edadUsuario' es:", typeof edadUsuario); // "number"

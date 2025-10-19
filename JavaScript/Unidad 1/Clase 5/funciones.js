

// Clase 5: Funciones

// Una función es un bloque de código reutilizable diseñado para realizar una tarea específica.
// Las funciones ayudan a organizar el código, hacerlo más legible y evitar la repetición (principio DRY: Don't Repeat Yourself).

// --- 1. Declaración de Función (Function Declaration) ---
// Es la forma clásica de definir una función.
// Estas funciones son "hoisted" (izadas), lo que significa que pueden ser llamadas antes de ser declaradas en el código.

console.log("--- Declaración de Función ---");

// Llamada a la función antes de su declaración (funciona por hoisting)
let saludoPrevio = saludar("Ana");
console.log(saludoPrevio);

// Declaración
function saludar(nombre) {
  // `nombre` es un "parámetro": una variable local que recibe un valor cuando la función es llamada.
  const mensaje = `Hola, ${nombre}! Bienvenido/a.`;
  return mensaje; // La sentencia `return` especifica el valor que la función "devuelve" al lugar donde fue llamada.
}

// Llamada a la función
// "Juan" es un "argumento": el valor real que se pasa al parámetro `nombre`.
let saludoJuan = saludar("Juan");
console.log(saludoJuan);

// --- 2. Expresión de Función (Function Expression) ---
// Una función también puede ser definida y asignada a una variable.
// A diferencia de las declaradas, estas no son "hoisted" y no pueden ser llamadas antes de su definición.

console.log("\n--- Expresión de Función ---");

// const resultadoResta = restar(10, 4); // Esto daría un error: ReferenceError: Cannot access 'restar' before initialization

const restar = function(a, b) {
  return a - b;
};

// Llamada a la función a través de la variable
const resultadoResta = restar(10, 4);
console.log("El resultado de la resta es:", resultadoResta);

// --- 3. Funciones Flecha (Arrow Functions - ES6) ---
// Son una sintaxis más corta y moderna para escribir expresiones de función.

console.log("\n--- Funciones Flecha ---");

// Sintaxis básica
const multiplicar = (a, b) => {
  return a * b;
};

// Si la función solo tiene una línea de código y es un `return`,
// se pueden omitir las llaves {} y la palabra `return`.
const dividir = (a, b) => a / b;

// Si la función tiene un solo parámetro, se pueden omitir los paréntesis.
const cuadrado = x => x * x;

console.log("Multiplicación (10 * 5):", multiplicar(10, 5));
console.log("División (20 / 4):", dividir(20, 4));
console.log("Cuadrado de 8:", cuadrado(8));

// --- 4. Parámetros y Argumentos ---

console.log("\n--- Parámetros y Argumentos ---");

// Parámetros por defecto: Puedes asignar un valor por defecto a un parámetro
// por si no se proporciona un argumento al llamar la función.
function registrarUsuario(nombre, rol = "invitado") {
  console.log(`Usuario: ${nombre}, Rol: ${rol}`);
}

registrarUsuario("Elena", "administrador"); // Se proporcionan ambos argumentos
registrarUsuario("Carlos"); // Solo se proporciona `nombre`, `rol` usa su valor por defecto.

// El objeto `arguments` (disponible en funciones declaradas/expresadas, no en flecha)
// Es un objeto similar a un array que contiene todos los argumentos pasados a la función.
function sumarTodo() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log("Suma de varios números:", sumarTodo(1, 2, 3, 4, 5)); // 15


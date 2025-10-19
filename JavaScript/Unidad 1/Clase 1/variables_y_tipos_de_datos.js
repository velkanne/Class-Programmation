
// Clase 1: Variables y Tipos de Datos

// --- ¿Qué es una variable? ---
// En programación, una variable es como una caja donde puedes guardar información.
// Esta "caja" tiene un nombre único que usamos para acceder a su contenido.

// --- Declaración de Variables ---
// En JavaScript, usamos las palabras clave `var`, `let` y `const` para crear variables.

// `var`: La forma más antigua de declarar variables. Tiene un alcance (scope) de función.
// Es recomendable evitar `var` en código moderno para prevenir comportamientos inesperados.
var nombreAntiguo = "Soy una variable 'var'";

// `let`: Introducida en ES6 (ECMAScript 2015). Permite declarar variables que pueden cambiar su valor.
// Tiene un alcance de bloque (lo que esté entre llaves {}).
let edad = 30;
edad = 31; // El valor de 'edad' puede ser reasignado.

// `const`: También introducida en ES6. Se usa para declarar constantes, es decir, variables cuyo valor no cambiará.
// También tiene un alcance de bloque.
const fechaDeNacimiento = "01/01/1990";
// Si intentas cambiar el valor de una constante, obtendrás un error.
// fechaDeNacimiento = "02/02/1992"; // Esto provocaría un TypeError.

console.log("Ejemplos de declaración:");
console.log(nombreAntiguo);
console.log("Edad:", edad);
console.log("Fecha de Nacimiento:", fechaDeNacimiento);


// --- Tipos de Datos Primitivos ---
// JavaScript tiene varios tipos de datos fundamentales.

// 1. String (Cadena de texto)
// Se usa para representar texto. Se puede escribir con comillas simples, dobles o backticks.
const nombre = "Juan Pérez";
const profesion = 'Desarrollador de Software';
const descripcion = `Una persona que crea soluciones con código.`; // Los backticks permiten interpolar variables.
console.log(`
Hola, soy ${nombre}, y soy ${profesion}. ${descripcion}`);

// 2. Number (Número)
// Se usa para números enteros o de punto flotante.
const numeroEntero = 100;
const numeroDecimal = 99.99;
const numeroNegativo = -50;
console.log("
Tipos de datos numéricos:");
console.log("Entero:", numeroEntero, "Decimal:", numeroDecimal, "Negativo:", numeroNegativo);

// 3. Boolean (Booleano)
// Representa un valor lógico: verdadero (true) or falso (false).
const esMayorDeEdad = true;
const tieneDescuento = false;
console.log("
Tipos de datos booleanos:");
console.log("¿Es mayor de edad?", esMayorDeEdad);

// 4. Null (Nulo)
// Representa la ausencia intencional de cualquier valor de objeto. Es un valor asignado.
let auto = null;
console.log("
Valor nulo:");
console.log("El valor de 'auto' es:", auto); // Se asignó 'null' a propósito.

// 5. Undefined (Indefinido)
// Una variable que ha sido declarada pero no se le ha asignado un valor tiene el valor 'undefined'.
let direccion;
console.log("
Valor indefinido:");
console.log("La dirección es:", direccion);

// 6. Symbol (Símbolo) - Avanzado
// Es un tipo de dato único e inmutable. Se usa principalmente para crear identificadores únicos para propiedades de objetos.
const idUnico = Symbol("descripcionOpcional");
console.log("
Tipo de dato Symbol:");
console.log(idUnico.toString());

// 7. BigInt (Entero Grande) - Avanzado
// Permite representar números enteros de precisión arbitraria, más grandes de lo que el tipo 'Number' puede manejar.
const numeroMuyGrande = 9007199254740991n; // La 'n' al final indica que es un BigInt.
console.log("
Tipo de dato BigInt:");
console.log("Un número muy grande:", numeroMuyGrande);


// --- typeof: Verificando el tipo de dato ---
// El operador `typeof` nos devuelve una cadena que indica el tipo de la variable.
console.log("
--- Verificando tipos con 'typeof' ---");
console.log("Tipo de 'nombre':", typeof nombre);           // "string"
console.log("Tipo de 'edad':", typeof edad);               // "number"
console.log("Tipo de 'esMayorDeEdad':", typeof esMayorDeEdad); // "boolean"
console.log("Tipo de 'direccion':", typeof direccion);     // "undefined"
console.log("Tipo de 'auto':", typeof auto);               // "object" (Este es un comportamiento histórico y peculiar de JS)
console.log("Tipo de 'idUnico':", typeof idUnico);         // "symbol"
console.log("Tipo de 'numeroMuyGrande':", typeof numeroMuyGrande); // "bigint"

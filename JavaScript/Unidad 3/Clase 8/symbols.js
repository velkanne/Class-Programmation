

// Clase 8 (Unidad 3): Symbols (Símbolos)

// Introducidos en ES6, los Symbols son un tipo de dato primitivo, al igual que Number, String, Boolean, etc.
// La característica principal de un Symbol es que su valor es único e inmutable.

// --- 1. Creación y Unicidad de los Symbols ---
console.log("--- Creación y Unicidad ---");

// Se crea un Symbol llamando a la función `Symbol()`. No se usa `new`.
// Se le puede pasar una descripción opcional, que es útil para depuración.
const simbolo1 = Symbol("mi primer simbolo");
const simbolo2 = Symbol("mi segundo simbolo");
const simbolo3 = Symbol("mi primer simbolo"); // Misma descripción

console.log("Tipo de dato:", typeof simbolo1); // "symbol"

// A pesar de tener la misma descripción, `simbolo1` y `simbolo3` son completamente únicos.
console.log("¿simbolo1 === simbolo2?", simbolo1 === simbolo2); // false
console.log("¿simbolo1 === simbolo3?", simbolo1 === simbolo3); // false


// --- 2. Caso de Uso Principal: Propiedades de Objeto "Ocultas" ---
// Los Symbols se usan como claves de propiedades en objetos para evitar colisiones de nombres.
// Esto es especialmente útil cuando se quiere añadir propiedades a un objeto que no controlas
// (por ejemplo, un objeto de una librería externa) sin riesgo de sobreescribir una propiedad existente.

console.log("\n--- Symbols como Claves de Propiedad ---");

const ID_SECRETO = Symbol("identificador unico del usuario");

const usuario = {
  nombre: "Marta",
  edad: 30
};

// Añadimos una propiedad usando el Symbol como clave.
// Se debe usar la notación de corchetes.
usuario[ID_SECRETO] = "xyz-987-abc";

console.log("Objeto de usuario:", usuario);
console.log("ID Secreto del usuario:", usuario[ID_SECRETO]);

// Las propiedades con clave de Symbol no son enumerables de la forma tradicional.
// No aparecen en bucles `for...in` ni en `Object.keys()`.

console.log("\nClaves del objeto con Object.keys():", Object.keys(usuario)); // No muestra ID_SECRETO

console.log("Recorriendo con for...in:");
for (const key in usuario) {
  console.log(`- ${key}`); // No muestra ID_SECRETO
}

// `JSON.stringify` también ignora las propiedades con clave de Symbol.
console.log("Usuario en JSON:", JSON.stringify(usuario));

// Para acceder a las propiedades de tipo Symbol, se usa `Object.getOwnPropertySymbols()`.
const simbolosDelObjeto = Object.getOwnPropertySymbols(usuario);
console.log("\nSímbolos en el objeto:", simbolosDelObjeto);

const claveSimbolo = simbolosDelObjeto[0];
console.log("Valor de la propiedad Symbol:", usuario[claveSimbolo]);


// --- 3. Registro Global de Symbols: `Symbol.for()` y `Symbol.keyFor()` ---
// Permite crear Symbols que no son únicos en todo el programa, sino que pueden ser compartidos.

console.log("\n--- Registro Global de Symbols ---");

// `Symbol.for(key)` busca un Symbol con la clave `key` en un registro global.
// Si lo encuentra, lo devuelve. Si no, crea uno nuevo, lo registra y lo devuelve.
const simboloGlobal1 = Symbol.for("app.id");
const simboloGlobal2 = Symbol.for("app.id");

console.log("¿simboloGlobal1 === simboloGlobal2?", simboloGlobal1 === simboloGlobal2); // true

// `Symbol.keyFor(symbol)` devuelve la clave de un Symbol registrado globalmente.
console.log("Clave para simboloGlobal1:", Symbol.keyFor(simboloGlobal1)); // "app.id"


// --- 4. Well-known Symbols (Símbolos Bien Conocidos) ---
// JavaScript tiene una serie de Symbols predefinidos que permiten a los desarrolladores
// "engancharse" a comportamientos internos del lenguaje.

console.log("\n--- Well-known Symbols ---");

// `Symbol.iterator`: Lo vimos en la clase de Iteradores. Un objeto que implementa este
// símbolo se vuelve iterable.

// `Symbol.toStringTag`: Permite personalizar el valor devuelto por `Object.prototype.toString.call()`.
class MiClasePersonalizada {
  get [Symbol.toStringTag]() {
    return "MiClase";
  }
}

const miInstancia = new MiClasePersonalizada();
console.log(Object.prototype.toString.call(miInstancia)); // "[object MiClase]"


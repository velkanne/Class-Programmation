
// Clase 1 (Unidad 3): Prototipos y Herencia Prototípica

// JavaScript es un lenguaje basado en prototipos. Cada objeto en JavaScript tiene una propiedad interna
// (llamada `[[Prototype]]`) que es una referencia a otro objeto, llamado su "prototipo".
// Este prototipo, a su vez, tiene su propio prototipo, y así sucesivamente, formando una "cadena de prototipos".
// La cadena termina cuando se alcanza un prototipo que es `null`.

console.log("--- La Cadena de Prototipos ---");

// Un objeto literal simple
const miObjeto = { a: 1 };

// `Object.getPrototypeOf()` es la forma estándar de acceder al prototipo de un objeto.
const prototipoDeMiObjeto = Object.getPrototypeOf(miObjeto);

console.log("Prototipo de miObjeto:", prototipoDeMiObjeto);
console.log("¿Es igual a Object.prototype?", prototipoDeMiObjeto === Object.prototype);

// `Object.prototype` es el prototipo base para todos los objetos literales.
// ¿Y cuál es el prototipo de `Object.prototype`?
console.log("Prototipo de Object.prototype:", Object.getPrototypeOf(Object.prototype)); // null. Aquí termina la cadena.

// Cuando intentas acceder a una propiedad de un objeto, JS la busca primero en el propio objeto.
// Si no la encuentra, sube por la cadena de prototipos hasta que la encuentra o llega al final (null).

// `toString()` no está definido en `miObjeto`, pero sí en `Object.prototype`.
console.log("miObjeto.toString():", miObjeto.toString()); // Funciona gracias a la cadena de prototipos.


// --- 2. Funciones Constructoras ---
// Antes de las clases (ES6), la forma de crear "tipos" de objetos era a través de funciones constructoras.
// Por convención, sus nombres empiezan con mayúscula.

console.log("\n--- Funciones Constructoras ---");

function Animal(nombre, sonido) {
  // El operador `new` crea un nuevo objeto vacío y lo asigna a `this`.
  this.nombre = nombre;
  this.sonido = sonido;
  // Al final, `new` devuelve `this` implícitamente.
}

// Cuando creamos una instancia con `new`, el prototipo de la instancia (`perro` y `gato`)
// se establece para que sea el objeto `prototype` de la función constructora (`Animal.prototype`).
const perro = new Animal("Toby", "Guau");
const gato = new Animal("Mishi", "Miau");

console.log("Perro:", perro);
console.log("Gato:", gato);
console.log("Prototipo de perro:", Object.getPrototypeOf(perro));
console.log("¿Es igual a Animal.prototype?", Object.getPrototypeOf(perro) === Animal.prototype);


// --- 3. Modificando el Prototipo del Constructor ---
// Si pusiéramos un método `hacerSonido` dentro del constructor, cada instancia (`perro`, `gato`)
// tendría su propia copia de esa función, lo cual es ineficiente en memoria.

// La solución es añadir los métodos compartidos al `prototype` del constructor.
// De esta forma, todas las instancias tendrán acceso a la misma función a través de la cadena de prototipos.

Animal.prototype.hacerSonido = function() {
  console.log(`${this.nombre} dice: ¡${this.sonido}!`);
};

Animal.prototype.especie = "Desconocida"; // También podemos añadir propiedades.

console.log("\n--- Métodos y Propiedades en el Prototipo ---");

perro.hacerSonido(); // Busca `hacerSonido` en `perro` (no lo encuentra), sube al prototipo (`Animal.prototype`) y lo encuentra.
gato.hacerSonido();

console.log("Especie de Toby:", perro.especie);

// Podemos sobreescribir propiedades del prototipo en la instancia.
perro.especie = "Canino";
console.log("Especie de Toby (modificada):", perro.especie);
console.log("Especie de Mishi:", gato.especie);


// --- 4. Herencia Prototípica ---
// Podemos hacer que el prototipo de un constructor herede de otro.

console.log("\n--- Herencia Prototípica ---");

function PerroDeCaza(nombre, sonido, raza) {
  // Llamamos al constructor padre para que establezca `nombre` y `sonido`.
  // `.call(this, ...)` asegura que `this` dentro de `Animal` sea el nuevo objeto `PerroDeCaza`.
  Animal.call(this, nombre, sonido);
  this.raza = raza;
}

// Creamos un nuevo objeto prototipo para `PerroDeCaza` que hereda de `Animal.prototype`.
PerroDeCaza.prototype = Object.create(Animal.prototype);
// Restauramos el constructor, que fue sobreescrito por la línea anterior.
PerroDeCaza.prototype.constructor = PerroDeCaza;

// Añadimos un método específico para `PerroDeCaza`
PerroDeCaza.prototype.cazar = function() {
  console.log(`${this.nombre} está cazando.`);
};

const miPerroDeCaza = new PerroDeCaza("Fido", "Woof", "Beagle");

miPerroDeCaza.hacerSonido(); // Método heredado de Animal.prototype
miPerroDeCaza.cazar();      // Método propio de PerroDeCaza.prototype

console.log("Prototipo de miPerroDeCaza:", Object.getPrototypeOf(miPerroDeCaza) === PerroDeCaza.prototype);
console.log("Prototipo del prototipo de miPerroDeCaza:", Object.getPrototypeOf(PerroDeCaza.prototype) === Animal.prototype);

// NOTA: Aunque es fundamental entender los prototipos, en el código moderno (ES6+),
// la herencia se maneja de forma mucho más limpia y legible con la sintaxis de `class`,
// que veremos en la siguiente clase. `class` es principalmente "azúcar sintáctico" sobre este sistema de prototipos.

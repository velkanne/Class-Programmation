

// Clase 9: Objetos en JavaScript

// Un objeto es una colección de pares "clave-valor" (key-value pairs).
// Las claves son strings (o Symbols) y los valores pueden ser cualquier tipo de dato (strings, números, booleanos, arrays, e incluso otras funciones u objetos).
// Son la estructura fundamental para agrupar datos y funcionalidades relacionadas.

// --- 1. Creación de Objetos (Sintaxis Literal) ---
console.log("--- Creación de Objetos ---");

const persona = {
  // Propiedades (datos)
  nombre: "Carlos",
  apellido: "Santana",
  edad: 35,
  esEstudiante: false,
  cursos: ["JavaScript Básico", "React Avanzado"],
  direccion: {
    calle: "Av. Siempre Viva",
    numero: 742,
    ciudad: "Springfield"
  },

  // Métodos (funcionalidades)
  saludar: function() {
    // `this` se refiere al objeto actual (en este caso, `persona`)
    console.log(`¡Hola! Mi nombre es ${this.nombre} ${this.apellido}.`);
  },

  // Método con sintaxis moderna (ES6)
  mostrarEdad() {
    console.log(`Tengo ${this.edad} años.`);
  }
};

console.log("Objeto 'persona':", persona);


// --- 2. Acceso, Modificación y Creación de Propiedades ---
console.log("\n--- Acceso y Modificación ---");

// a) Notación de Punto (Dot Notation) - La más común y legible
console.log("Nombre:", persona.nombre); // Acceso
console.log("Ciudad:", persona.direccion.ciudad);

persona.edad = 36; // Modificación
console.log("Edad actualizada:", persona.edad);

persona.profesion = "Desarrollador"; // Creación de una nueva propiedad
console.log("Profesión añadida:", persona.profesion);

// b) Notación de Corchetes (Bracket Notation) - Más flexible
// Útil cuando la clave es una variable o contiene caracteres especiales.
console.log("Apellido:", persona["apellido"]);

let propiedadA_Consultar = "esEstudiante";
console.log(`¿Es estudiante? (usando variable):`, persona[propiedadA_Consultar]);

// --- 3. Métodos de Objeto ---
// Los métodos son funciones que pertenecen a un objeto.
console.log("\n--- Métodos de Objeto ---");

persona.saludar(); // Ejecutamos el método saludar
persona.mostrarEdad(); // Ejecutamos el método mostrarEdad


// --- 4. Iteración sobre Propiedades de un Objeto ---
console.log("\n--- Iterando sobre el Objeto ---");

// a) Bucle `for...in`
// Itera sobre todas las claves (keys) enumerables de un objeto.
console.log("\nUsando for...in:");
for (const clave in persona) {
  // Es una buena práctica verificar que la propiedad pertenece directamente al objeto
  // y no a su prototipo (un concepto más avanzado).
  if (Object.hasOwnProperty.call(persona, clave)) {
    console.log(`- ${clave}: ${persona[clave]}`);
  }
}

// b) `Object.keys()` - Devuelve un array con las claves del objeto.
const claves = Object.keys(persona);
console.log("\nClaves del objeto (Object.keys):", claves);
// Podemos usar los métodos de array que ya conocemos:
claves.forEach(clave => console.log(`(forEach) - ${clave}: ${persona[clave]}`));

// c) `Object.values()` - Devuelve un array con los valores del objeto.
const valores = Object.values(persona);
console.log("\nValores del objeto (Object.values):", valores);

// d) `Object.entries()` - Devuelve un array de arrays, donde cada subarray es [clave, valor].
const entradas = Object.entries(persona);
console.log("\nEntradas del objeto (Object.entries):", entradas);
// Muy útil para iterar con desestructuración (veremos esto más adelante)
for (const [clave, valor] of entradas) {
  // console.log(`(entries) - ${clave}: ${valor}`); // Muestra todo, incluyendo las funciones
}

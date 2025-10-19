

// Clase 9 (Unidad 2): JSON (JavaScript Object Notation)

// JSON es un formato de texto ligero para el intercambio de datos. A pesar de su nombre, es un estándar
// independiente del lenguaje, pero su sintaxis está basada en la de los objetos de JavaScript.
// Es el formato más común para la comunicación entre servidores y clientes web (APIs).

// --- 1. Sintaxis de JSON ---

// Esto es un OBJETO de JavaScript.
const objetoJS = {
  nombre: "Juan",
  edad: 30,
  esEstudiante: true,
  cursos: ["HTML", "CSS", "JavaScript"],
  direccion: null
};

// Esto es un STRING en formato JSON. Observa las diferencias:
// - Las claves (keys) DEBEN estar entre comillas dobles.
// - Los strings DEBEN usar comillas dobles.
// - No puede haber comas al final de un elemento (trailing commas).
// - No puede contener funciones, `undefined`, Symbols, etc.
const stringJSON = `{
  "nombre": "Juan",
  "edad": 30,
  "esEstudiante": true,
  "cursos": ["HTML", "CSS", "JavaScript"],
  "direccion": null
}`;

console.log("--- Objeto de JavaScript vs. String JSON ---");
console.log("Tipo del objeto de JS:", typeof objetoJS, "->", objetoJS);
console.log("Tipo del string JSON:", typeof stringJSON, "->", stringJSON);


// --- 2. `JSON.stringify()`: De Objeto JavaScript a String JSON ---
// Esta función convierte un valor de JavaScript (normalmente un objeto o un array) a un string JSON.

console.log("\n--- JSON.stringify() ---");

const producto = {
  id: 123,
  nombre: "Teclado Mecánico",
  precio: 99.99,
  disponible: true,
  // Las funciones y los valores `undefined` son ignorados en la conversión.
  comprar: () => console.log("Comprado!"),
  stock: undefined
};

const productoJSON = JSON.stringify(producto);

console.log("Objeto original:", producto);
console.log("String JSON resultante:", productoJSON);

// `stringify` puede tomar argumentos adicionales para formatear la salida.
// El tercer argumento especifica el número de espacios para la indentación, haciendo el JSON más legible.
const productoJSONFormateado = JSON.stringify(producto, null, 2);
console.log("\nString JSON formateado:");
console.log(productoJSONFormateado);


// --- 3. `JSON.parse()`: De String JSON a Objeto JavaScript ---
// Esta función analiza un string JSON y lo convierte en un objeto o valor de JavaScript.

console.log("\n--- JSON.parse() ---");

// Imaginemos que recibimos este string JSON de una API.
const datosDeAPI = `{ 
  "id": "user-001",
  "username": "ana_g",
  "isActive": true,
  "lastLogin": "2023-10-27T10:00:00Z"
}`;

// Si intentamos acceder a una propiedad directamente, fallará porque es un string.
// console.log(datosDeAPI.username); // undefined

// Primero, debemos "parsearlo" para convertirlo en un objeto.
const usuarioObjeto = JSON.parse(datosDeAPI);

console.log("String JSON recibido:", datosDeAPI);
console.log("Objeto JS resultante:", usuarioObjeto);

// Ahora sí podemos acceder a sus propiedades.
console.log(`\nNombre de usuario: ${usuarioObjeto.username}`);
console.log(`¿Está activa? ${usuarioObjeto.isActive}`);

// Si el string JSON no es válido, `JSON.parse()` lanzará un error.
try {
  JSON.parse("{ 'clave': 'valor' }"); // Inválido, las claves deben tener comillas dobles
} catch (error) {
  console.error("\nError al parsear JSON inválido:", error.message);
}


// --- 4. Caso de Uso Común: APIs y Almacenamiento ---
// - APIs: Cuando usamos `fetch`, la respuesta del servidor suele ser un string JSON. El método `response.json()`
//   es un atajo que hace `JSON.parse()` por nosotros sobre el cuerpo de la respuesta.
// - Almacenamiento Local (localStorage): Solo puede guardar strings. Por lo tanto, para guardar un objeto, 
//   primero debemos usar `JSON.stringify()` y para recuperarlo, `JSON.parse()`.

// Ejemplo con localStorage (esto funcionaría en un navegador)
/*
  // Guardar un objeto en localStorage
  localStorage.setItem('usuario', JSON.stringify(usuarioObjeto));

  // Recuperar el string de localStorage
  const usuarioGuardadoString = localStorage.getItem('usuario");

  // Parsearlo de vuelta a un objeto
  const usuarioGuardadoObjeto = JSON.parse(usuarioGuardadoString);

  console.log("Usuario recuperado de localStorage:", usuarioGuardadoObjeto.username);
*/


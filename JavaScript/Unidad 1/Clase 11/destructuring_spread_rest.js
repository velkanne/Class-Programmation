

// Clase 11: Desestructuración y Operadores Spread/Rest (ES6)

// ES6 introdujo una sintaxis muy cómoda para trabajar con arrays y objetos, permitiendo un código más limpio y expresivo.

// --- 1. Desestructuración (Destructuring) ---
// Es una expresión que permite "desempacar" valores de arrays o propiedades de objetos en distintas variables.

console.log("--- Desestructuración de Arrays ---");
const numeros = [10, 20, 30, 40, 50];

// Forma antigua
// const primero = numeros[0];
// const segundo = numeros[1];

// Con desestructuración
const [primero, segundo, , cuarto] = numeros; // Se pueden omitir elementos dejando el espacio vacío

console.log("Primero:", primero); // 10
console.log("Segundo:", segundo); // 20
console.log("Cuarto:", cuarto);   // 40

console.log("\n--- Desestructuración de Objetos ---");
const pelicula = {
  titulo: "Inception",
  director: "Christopher Nolan",
  anio: 2010,
  genero: "Ciencia Ficción"
};

// La desestructuración de objetos usa los nombres de las propiedades.
const { titulo, director, anio } = pelicula;

console.log("Título:", titulo);
console.log("Director:", director);
console.log("Año:", anio);

// Renombrar variables y valores por defecto
const { titulo: nombrePelicula, anio: anioEstreno, calificacion = 5 } = pelicula;
console.log("Nombre renombrado:", nombrePelicula);
console.log("Calificación por defecto:", calificacion);

// Desestructuración en parámetros de función
function mostrarInfoPelicula({ titulo, director }) {
  console.log(`La película "${titulo}" fue dirigida por ${director}.`);
}
mostrarInfoPelicula(pelicula);


// --- 2. Operador Spread (Propagación: ...) ---
// Permite que una expresión iterable (como un array) o un objeto sea "expandido" en lugares donde se esperan cero o más argumentos o elementos.

console.log("\n--- Operador Spread (...) ---");

// En arrays: para copiar o concatenar
const frutas1 = ["manzana", "pera"];
const frutas2 = ["naranja", "sandía"];

const todasLasFrutas = [...frutas1, ...frutas2, "uva"];
console.log("Todas las frutas:", todasLasFrutas);

const copiaFrutas1 = [...frutas1]; // Una forma fácil de clonar un array
copiaFrutas1.push("kiwi");
console.log("Original:", frutas1);
console.log("Copia modificada:", copiaFrutas1);

// En objetos: para clonar o mezclar
const usuario = {
  nombre: "David",
  edad: 40
};

const infoAdicional = {
  email: "david@example.com",
  ciudad: "Madrid"
};

const usuarioCompleto = { ...usuario, ...infoAdicional, activo: true };
console.log("Usuario completo:", usuarioCompleto);

// Como argumentos de una función
const args = [10, 20, 30];
function sumar(a, b, c) {
  return a + b + c;
}
console.log("Suma con spread:", sumar(...args)); // Equivale a llamar sumar(10, 20, 30)


// --- 3. Parámetros Rest (Resto: ...) ---
// Representa un número indefinido de argumentos como un array. Debe ser el último parámetro de una función.

console.log("\n--- Parámetros Rest (...) ---");

function registrarInvitados(organizador, ...invitados) {
  console.log(`Organizador: ${organizador}`);
  console.log("Invitados:", invitados); // `invitados` es un array
  console.log(`Total de invitados: ${invitados.length}`);
}

registrarInvitados("Ana", "Carlos", "Beatriz", "Daniel");

// Combinando con desestructuración de arrays
const calificaciones = [10, 9, 8, 7, 6];
const [mejorCalificacion, segundaMejor, ...restoCalificaciones] = calificaciones;

console.log("\nMejor calificación:", mejorCalificacion);
console.log("Segunda mejor:", segundaMejor);
console.log("Resto de calificaciones:", restoCalificaciones);


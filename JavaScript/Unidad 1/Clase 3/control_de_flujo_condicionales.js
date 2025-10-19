
// Clase 3: Control de Flujo - Condicionales

// El control de flujo nos permite decidir qué bloques de código ejecutar y cuáles no,
// basándonos en ciertas condiciones. Esto le da "inteligencia" a nuestros programas.

// --- 1. La sentencia `if` ---
// Ejecuta un bloque de código si una condición especificada es verdadera (evalúa a `true`).

console.log("--- Sentencia if ---");
let temperatura = 25; // en grados Celsius

if (temperatura > 20) {
  console.log("El día está agradable. ¡Puedes salir en camiseta!");
}

// --- 2. La sentencia `else` ---
// Se usa junto con `if` para ejecutar un bloque de código cuando la condición del `if` es falsa.

console.log("\n--- Sentencia if-else ---");
let edad = 17;

if (edad >= 18) {
  console.log("Eres mayor de edad. Puedes votar.");
} else {
  console.log("Eres menor de edad. Aún no puedes votar.");
}

// --- 3. La sentencia `else if` ---
// Permite encadenar múltiples condiciones. El programa evalúa las condiciones en orden
// y ejecuta el primer bloque de código cuya condición sea verdadera.

console.log("\n--- Sentencia if-else if-else ---");
let hora = 14; // formato 24 horas

if (hora < 12) {
  console.log("Buenos días.");
} else if (hora < 19) {
  console.log("Buenas tardes.");
} else {
  console.log("Buenas noches.");
}

// Ejemplo más complejo con `else if`
let calificacion = 85;
let mensaje;

if (calificacion >= 90) {
  mensaje = "Excelente (A)";
} else if (calificacion >= 80) {
  mensaje = "Muy Bien (B)";
} else if (calificacion >= 70) {
  mensaje = "Bien (C)";
} else if (calificacion >= 60) {
  mensaje = "Suficiente (D)";
} else {
  mensaje = "Insuficiente (F) - Necesitas estudiar más.";
}
console.log(`Tu calificación de ${calificacion} es: ${mensaje}`);


// --- 4. La sentencia `switch` ---
// Es una alternativa a `if-else if-else` cuando se necesita comparar una misma variable
// con múltiples valores posibles.

console.log("\n--- Sentencia switch ---");
let diaDeLaSemana = 3; // 1: Lunes, 2: Martes, ...
let nombreDelDia;

switch (diaDeLaSemana) {
  case 1:
    nombreDelDia = "Lunes";
    break; // La palabra `break` es CRUCIAL. Sin ella, el código seguiría ejecutándose en los siguientes casos.
  case 2:
    nombreDelDia = "Martes";
    break;
  case 3:
    nombreDelDia = "Miércoles";
    break;
  case 4:
    nombreDelDia = "Jueves";
    break;
  case 5:
    nombreDelDia = "Viernes";
    break;
  case 6:
    nombreDelDia = "Sábado";
    break;
  case 7:
    nombreDelDia = "Domingo";
    break;
  default:
    // El bloque `default` es opcional y se ejecuta si ninguno de los `case` coincide.
    nombreDelDia = "Día inválido";
    break;
}

console.log(`El día número ${diaDeLaSemana} es ${nombreDelDia}.`);

// `switch` con agrupación de casos
let fruta = "Manzana";

switch (fruta) {
  case "Manzana":
  case "Pera":
  case "Naranja":
    console.log(`La ${fruta} es una fruta común.`);
    break;
  case "Mango":
  case "Papaya":
    console.log(`La ${fruta} es una fruta tropical.`);
    break;
  default:
    console.log(`No tengo información sobre la fruta ${fruta}.`);
}

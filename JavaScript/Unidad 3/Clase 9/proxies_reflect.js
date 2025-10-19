

// Clase 9 (Unidad 3): Metaprogramación con Proxies y Reflect

// La metaprogramación es la capacidad de un programa para tratar el código como datos. Es decir, leer,
// analizar, modificar o incluso generar código en tiempo de ejecución. ES6 introdujo dos APIs para
// la metaprogramación a nivel de objeto: `Proxy` y `Reflect`.

// --- 1. Proxy: Interceptando Operaciones ---
// Un `Proxy` es un objeto que envuelve a otro objeto (el "target") y permite interceptar operaciones
// fundamentales sobre él, como la lectura de propiedades, la asignación, la llamada a funciones, etc.

// Sintaxis: const p = new Proxy(target, handler);
// - `target`: el objeto original que queremos envolver.
// - `handler`: un objeto que define los "traps" (trampas), que son los métodos que interceptan las operaciones.

console.log("--- Proxy: Trap 'get' para valores por defecto ---");

const targetGet = {
  nombre: "Carlos",
  edad: 40
};

const handlerGet = {
  // El trap `get` se dispara cuando se intenta leer una propiedad.
  // Recibe el target, la propiedad que se está leyendo, y el proxy mismo.
  get: function(target, propiedad) {
    console.log(`(Trap GET) Leyendo la propiedad '${propiedad}'`);
    // Si la propiedad existe en el target, la devolvemos. Si no, devolvemos un valor por defecto.
    return propiedad in target ? target[propiedad] : "(Propiedad no definida)";
  }
};

const proxyGet = new Proxy(targetGet, handlerGet);

console.log("Nombre:", proxyGet.nombre); // Se dispara el trap
console.log("País:", proxyGet.pais);   // Se dispara el trap y devuelve el valor por defecto


// --- 2. El Rol de `Reflect` ---
// `Reflect` es un objeto incorporado que proporciona métodos para las operaciones interceptables de JavaScript.
// Los métodos de `Reflect` tienen el mismo nombre que los traps del handler del Proxy.
// Es una buena práctica usar `Reflect` dentro de los traps para invocar el comportamiento predeterminado.

console.log("\n--- Proxy y Reflect: Trap 'set' para validación ---");

const targetSet = {
  nombre: "",
  edad: 0
};

const handlerSet = {
  // El trap `set` se dispara cuando se intenta asignar un valor a una propiedad.
  set: function(target, propiedad, valor) {
    console.log(`(Trap SET) Asignando valor '${valor}' a la propiedad '${propiedad}'`);

    if (propiedad === "edad") {
      if (typeof valor !== 'number' || !Number.isInteger(valor) || valor < 0) {
        // Lanzamos un error si la validación falla.
        throw new TypeError("La edad debe ser un número entero positivo.");
      }
    }

    // Usamos `Reflect.set` para realizar la asignación por defecto. Es más robusto que `target[propiedad] = valor`.
    // Devuelve `true` si la asignación fue exitosa.
    return Reflect.set(target, propiedad, valor);
  }
};

const proxySet = new Proxy(targetSet, handlerSet);

proxySet.nombre = "Elena";
proxySet.edad = 32; // Válido

console.log("Objeto después de asignaciones válidas:", targetSet);

try {
  proxySet.edad = "treinta y tres"; // Inválido, disparará el error
} catch (error) {
  console.error("\nError capturado:", error.message);
}


// --- 3. Otros Traps Útiles ---
console.log("\n--- Otros Traps ---");

const targetFunc = (a, b) => a + b;

const handlerFunc = {
  // `apply`: se dispara cuando se llama a un proxy de una función.
  apply: function(target, thisArg, argumentsList) {
    console.log(`(Trap APPLY) Llamando a la función con los argumentos: ${argumentsList}`);
    // Llamamos a la función original con `Reflect.apply`
    return Reflect.apply(target, thisArg, argumentsList) * 2; // y modificamos el resultado
  },

  // `has`: se dispara para el operador `in`.
  has: function(target, prop) {
    console.log(`(Trap HAS) Comprobando si la propiedad '${prop}' existe.`);
    return Reflect.has(target, prop);
  }
};

const proxyFunc = new Proxy(targetFunc, handlerFunc);

console.log("Resultado de la función proxeada:", proxyFunc(10, 5)); // 30 (15 * 2)

const proxyHas = new Proxy({ a: 1 }, handlerFunc);
console.log("¿Existe la propiedad 'a'?", 'a' in proxyHas);


// Resumen de Casos de Uso:
// - Validación: Asegurar que los datos que entran a un objeto son correctos.
// - Virtualización: Simular que un objeto tiene propiedades que no tiene (ej. valores por defecto).
// - Logging y Debugging: Registrar cuándo y cómo se accede o modifica un objeto.
// - Control de Acceso: Prevenir la lectura o escritura de ciertas propiedades.
// - Abstracción de APIs: Cambiar la forma de una API para que sea más conveniente.


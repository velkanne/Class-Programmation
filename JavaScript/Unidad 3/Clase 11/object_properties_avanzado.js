
// Clase 11 (Unidad 3): Propiedades de Objeto Avanzadas

// Más allá de la simple asignación clave-valor, JavaScript ofrece un control muy detallado sobre
// las propiedades de un objeto a través de los "descriptores de propiedad" y métodos para
// controlar la extensibilidad de los objetos.

// --- 1. Descriptores de Propiedad ---
// Cada propiedad de un objeto tiene un "descriptor" que define su comportamiento.
// Hay dos tipos de descriptores: de datos y de acceso (getters/setters).

// Atributos de un descriptor de datos:
// - `value`: El valor de la propiedad.
// - `writable`: `true` si el valor de la propiedad puede ser cambiado.
// - `enumerable`: `true` si la propiedad aparece en bucles `for...in` y `Object.keys()`.
// - `configurable`: `true` si el descriptor de la propiedad puede ser cambiado y si la propiedad puede ser eliminada.

console.log("--- Descriptores de Propiedad ---");

const miObjeto = {};

// `Object.defineProperty()` permite definir una propiedad con un descriptor específico.
Object.defineProperty(miObjeto, "propiedadNormal", {
  value: 100,
  writable: true,
  enumerable: true,
  configurable: true
});

// Por defecto, si no se especifican, los atributos booleanos son `false`.
Object.defineProperty(miObjeto, "propiedadProtegida", {
  value: 200,
  writable: false, // No se puede cambiar el valor
  enumerable: false // No aparecerá en enumeraciones
});

console.log("Objeto inicial:", miObjeto.propiedadNormal);

// Inspeccionar un descriptor
console.log("Descriptor de 'propiedadNormal':", Object.getOwnPropertyDescriptor(miObjeto, "propiedadNormal"));
console.log("Descriptor de 'propiedadProtegida':", Object.getOwnPropertyDescriptor(miObjeto, "propiedadProtegida"));

// Intentar modificar la propiedad no escribible
try {
  miObjeto.propiedadProtegida = 300; // Falla silenciosamente en modo no estricto, lanza error en modo estricto.
} catch (e) { console.error(e.message); }
console.log("Valor de propiedadProtegida (no cambió):", miObjeto.propiedadProtegida);

console.log("Claves enumerables del objeto:", Object.keys(miObjeto)); // Solo muestra 'propiedadNormal'


// --- 2. Previniendo Modificaciones de Objetos ---
console.log("\n--- Previniendo Modificaciones ---");

// a) `Object.preventExtensions(obj)`: Previene que se añadan nuevas propiedades al objeto.
const objExtensible = { a: 1 };
Object.preventExtensions(objExtensible);
try { objExtensible.b = 2; } catch (e) { console.error("Error al añadir propiedad a objeto no extensible:", e.message); }
console.log("¿Es extensible?", Object.isExtensible(objExtensible));

// b) `Object.seal(obj)`: Sella un objeto. Previene añadir/eliminar propiedades y marca todas las
//    propiedades existentes como no-configurables. Los valores de las propiedades sí se pueden cambiar si son escribibles.
const objSellado = { a: 1 };
Object.seal(objSellado);
objSellado.a = 10; // Esto sí funciona
try { delete objSellado.a; } catch (e) { console.error("Error al borrar propiedad de objeto sellado:", e.message); }
console.log("¿Está sellado?", Object.isSealed(objSellado));
console.log("Valor de 'a' cambiado:", objSellado.a);

// c) `Object.freeze(obj)`: Congela un objeto. Es lo más restrictivo. Previene añadir, eliminar y
//    modificar cualquier propiedad. Es un `seal()` más `writable: false` para todo.
const objCongelado = { a: 1 };
Object.freeze(objCongelado);
try { objCongelado.a = 10; } catch (e) { console.error("Error al modificar propiedad de objeto congelado:", e.message); }
console.log("¿Está congelado?", Object.isFrozen(objCongelado));
console.log("Valor de 'a' (no cambió):", objCongelado.a);


// --- 3. Optional Chaining (`?.`) --- (ES2020)
// Permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados
// sin tener que validar explícitamente que cada referencia en la cadena sea válida.

console.log("\n--- Optional Chaining (?.) ---");

const usuario = {
  nombre: "Juan",
  //direccion: { calle: "Calle Falsa 123", ciudad: "Springfield" }
};

// Forma antigua: se necesitan múltiples comprobaciones
const ciudadAntigua = usuario && usuario.direccion && usuario.direccion.ciudad;
console.log("Ciudad (forma antigua):", ciudadAntigua); // undefined

// Con Optional Chaining: si una referencia es `null` o `undefined`, la expresión se cortocircuita y devuelve `undefined`.
const ciudadNueva = usuario?.direccion?.ciudad;
console.log("Ciudad (con ?.)):", ciudadNueva); // undefined

// También funciona con llamadas a funciones
const metodo = usuario.metodoQueNoExiste?.();
console.log("Resultado de método inexistente:", metodo); // undefined


// --- 4. Nullish Coalescing Operator (`??`) --- (ES2020)
// Es un operador lógico que devuelve su operando del lado derecho cuando el operando del lado izquierdo
// es `null` o `undefined`, y de lo contrario devuelve su operando del lado izquierdo.
// Es una alternativa más predecible al operador OR (`||`) que devuelve el lado derecho para cualquier valor "falsy".

console.log("\n--- Nullish Coalescing (??) ---");

let config = { duracion: 0, velocidad: null, tema: "" };

// Usando OR (||): `0` y `""` son falsy, por lo que se usan los valores por defecto, lo cual puede ser incorrecto.
const duracionOR = config.duracion || 10;
const temaOR = config.tema || "oscuro";
console.log(`Duración con OR (||): ${duracionOR}`); // 10 (incorrecto)
console.log(`Tema con OR (||): '${temaOR}'`); // "oscuro" (incorrecto)

// Usando `??`: solo `null` y `undefined` activan el valor por defecto.
const duracionNullish = config.duracion ?? 10;
const velocidadNullish = config.velocidad ?? 90;
const temaNullish = config.tema ?? "oscuro";
console.log(`Duración con (??): ${duracionNullish}`); // 0 (correcto)
console.log(`Velocidad con (??): ${velocidadNullish}`); // 90 (correcto)
console.log(`Tema con (??): '${temaNullish}'`); // "" (correcto)


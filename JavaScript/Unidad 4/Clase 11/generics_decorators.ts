

// Clase 11 (Unidad 4): TypeScript Avanzado - Genéricos y Decoradores

// TypeScript es un superconjunto de JavaScript que añade tipos estáticos. Los genéricos y los decoradores
// son dos de sus características más potentes, permitiendo la creación de componentes flexibles,
// reutilizables y declarativos.

// NOTA: Este es un archivo TypeScript (.ts) y necesita ser compilado (ej. con `tsc`).

// --- 1. Genéricos (Generics) ---
// Los genéricos permiten escribir funciones, clases e interfaces que pueden operar sobre una variedad de tipos
// sin perder la información de tipo. Crean componentes reutilizables.

console.log("--- Genéricos ---");

// a) Funciones Genéricas
// Sin genéricos, tendríamos que usar `any`, perdiendo la seguridad de tipo.
function funcionIdentidad<T>(argumento: T): T {
  // `T` es un "parámetro de tipo". Se captura el tipo del argumento
  // y se usa para asegurar que el valor de retorno sea del mismo tipo.
  return argumento;
}

let salidaString = funcionIdentidad<string>("hola"); // Explícitamente
let salidaNumero = funcionIdentidad(123); // Implícitamente (el compilador infiere el tipo)

console.log("Salida de string genérico:", salidaString.toUpperCase());
// console.log(salidaNumero.toUpperCase()); // Error de compilación: `toUpperCase` no existe en `number`.

// b) Interfaces Genéricas
interface Contenedor<T> {
  contenido: T;
}

let contenedorDeString: Contenedor<string> = { contenido: "un texto" };
let contenedorDeNumero: Contenedor<number> = { contenido: 42 };

// c) Clases Genéricas
class Coleccion<T> {
  private items: T[] = [];

  agregar(item: T): void {
    this.items.push(item);
  }

  obtenerTodos(): T[] {
    return this.items;
  }
}

const coleccionDeNumeros = new Coleccion<number>();
coleccionDeNumeros.agregar(1);
coleccionDeNumeros.agregar(2);
console.log("\nColección de números:", coleccionDeNumeros.obtenerTodos());

// d) Restricciones Genéricas (Generic Constraints)
// A veces queremos que un tipo genérico tenga ciertas propiedades.
interface ConLongitud {
  longitud: number;
}

function imprimirLongitud<T extends ConLongitud>(arg: T): void {
  console.log(`Longitud: ${arg.longitud}`);
}

imprimirLongitud("hola"); // Válido, string tiene `longitud`
imprimirLongitud([1, 2, 3]); // Válido, array tiene `longitud`
// imprimirLongitud(123); // Error de compilación: `number` no tiene `longitud`.


// --- 2. Decoradores (Decorators) ---
// Los decoradores son una propuesta para futuras versiones de JavaScript, pero TypeScript los soporta
// como una característica experimental. Son funciones especiales que pueden modificar clases, métodos, etc.
// Se deben habilitar en `tsconfig.json` con `"experimentalDecorators": true`.

console.log("\n--- Decoradores ---");

// a) Decorador de Clase
// Se aplica al constructor de la clase y puede usarse para observar, modificar o reemplazar la definición de la clase.
function Congelar(constructor: Function) {
  console.log("(Decorador de Clase) Congelando la clase...");
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

@Congelar
class MiClase {
  constructor() {}
  miMetodo() {}
}

// MiClase.nuevaPropiedad = 1; // TypeError: Can't add property nuevaPropiedad, object is not extensible

// b) Decorador de Método
// Se aplica a un método en una clase. Recibe 3 argumentos: el prototipo de la clase, el nombre del método
// y el descriptor de la propiedad de ese método.
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(`(Decorador de Método) Aplicado al método '${propertyKey}'.`);
  const metodoOriginal = descriptor.value;

  // Modificamos el descriptor para envolver el método original
  descriptor.value = function(...args: any[]) {
    console.log(`--- Log: Entrando al método '${propertyKey}' con argumentos: ${JSON.stringify(args)}`);
    const resultado = metodoOriginal.apply(this, args);
    console.log(`--- Log: Saliendo del método '${propertyKey}'. Resultado: ${resultado}`);
    return resultado;
  };

  return descriptor;
}

class Calculadora {
  @Log
  sumar(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculadora();
calc.sumar(5, 3);

// Los decoradores son una forma muy poderosa de añadir funcionalidad de forma declarativa, 
// muy usados en frameworks como Angular (para componentes, inyección de dependencias) y NestJS.


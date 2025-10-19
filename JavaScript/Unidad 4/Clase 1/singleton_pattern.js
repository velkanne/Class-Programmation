

// Clase 1 (Unidad 4): Patrones de Diseño - Singleton

// Los patrones de diseño son soluciones reutilizables a problemas comunes en el diseño de software.
// No son código final, sino plantillas o descripciones sobre cómo resolver un problema.

// --- El Patrón Singleton ---
// Propósito: Asegurar que una clase tenga una única instancia y proporcionar un punto de acceso global a ella.

// Casos de Uso:
// - Manejar una conexión a una base de datos.
// - Un objeto de configuración que debe ser el mismo en toda la aplicación.
// - Un servicio de logging.

console.log("--- Implementación de Singleton con una Clase (ES6) ---");

class ConfiguracionApp {
  // `_instancia` guardará la única instancia de la clase.
  static _instancia = null;

  constructor() {
    // Este constructor es "privado" en espíritu. No debería ser llamado directamente.
    // Aquí se cargarían las configuraciones, por ejemplo, desde un archivo.
    this.configuraciones = {
      tema: "oscuro",
      idioma: "es",
      apiURL: "https://api.example.com"
    };
    console.log("(Constructor de ConfiguracionApp llamado - ¡Esto solo debería pasar una vez!)");
  }

  // `getInstance` es el punto de acceso global.
  static getInstance() {
    // Si no existe una instancia, la crea.
    if (!ConfiguracionApp._instancia) {
      ConfiguracionApp._instancia = new ConfiguracionApp();
    }
    // Devuelve la instancia existente.
    return ConfiguracionApp._instancia;
  }

  get(clave) {
    return this.configuraciones[clave];
  }

  set(clave, valor) {
    this.configuraciones[clave] = valor;
  }
}

// No hacemos `new ConfiguracionApp()` directamente.
// const configDirecta = new ConfiguracionApp(); // Incorrecto

// Obtenemos la instancia a través del método estático.
const config1 = ConfiguracionApp.getInstance();
const config2 = ConfiguracionApp.getInstance();

// Comprobamos que ambas variables apuntan a la misma instancia.
console.log("¿config1 es la misma instancia que config2?", config1 === config2); // true

console.log("\nURL de la API (desde config1):", config1.get("apiURL"));

// Si modificamos la configuración a través de una instancia, el cambio se refleja en la otra.
config2.set("tema", "claro");
console.log("Nuevo tema (desde config1):", config1.get("tema")); // "claro"


// --- Implementación con un Closure (más tradicional en JS) ---
console.log("\n--- Implementación de Singleton con un Closure ---");

const miSingletonConClosure = (function() {
  // `instancia` es una variable "privada" gracias al closure.
  let instancia;

  function init() {
    // Lógica de inicialización privada
    const numeroPrivado = Math.random();
    console.log("(Función init de closure llamada - ¡Esto solo debería pasar una vez!)");

    return {
      obtenerNumero: function() {
        return numeroPrivado;
      }
    };
  }

  return {
    // `getInstance` es la única forma de acceder a la instancia.
    getInstance: function() {
      if (!instancia) {
        instancia = init();
      }
      return instancia;
    }
  };
})();

const instancia1 = miSingletonConClosure.getInstance();
const instancia2 = miSingletonConClosure.getInstance();

console.log("¿instancia1 es la misma que instancia2?", instancia1 === instancia2); // true
console.log("Número de instancia1:", instancia1.obtenerNumero());
console.log("Número de instancia2:", instancia2.obtenerNumero()); // Es el mismo número


// --- Pros y Contras del Patrón Singleton ---
// Pros:
// - Garantiza una única instancia.
// - Proporciona un punto de acceso global fácil.
// - La instancia se crea solo cuando se necesita por primera vez (lazy initialization).

// Contras:
// - Introduce un estado global en la aplicación, lo que puede dificultar la depuración y las pruebas unitarias.
// - Viola el Principio de Responsabilidad Única (la clase se preocupa de su lógica Y de controlar su instanciación).
// - Puede ser considerado un "anti-patrón" en arquitecturas modernas que favorecen la inyección de dependencias.


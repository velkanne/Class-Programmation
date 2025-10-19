

// Clase 2 (Unidad 3): Clases en JavaScript (ES6)

// La sintaxis de `class` fue introducida en ES6 para proporcionar una forma más clara y sencilla
// de crear objetos y manejar la herencia. Es importante recordar que esto es "azúcar sintáctico"
// sobre el sistema de prototipos de JavaScript; no introduce un nuevo modelo de herencia.

console.log("--- Definición de una Clase Básica ---");

class Vehiculo {
  // El `constructor` es un método especial para crear e inicializar un objeto creado con una clase.
  // Solo puede haber un constructor por clase.
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = 0;
  }

  // Los métodos se añaden directamente dentro de la clase.
  // Estos métodos se añaden al prototipo (`Vehiculo.prototype`), no a cada instancia.
  acelerar(incremento) {
    this.velocidad += incremento;
    console.log(`El ${this.marca} ${this.modelo} aceleró a ${this.velocidad} km/h.`);
  }

  frenar(decremento) {
    this.velocidad -= decremento;
    console.log(`El ${this.marca} ${this.modelo} frenó a ${this.velocidad} km/h.`);
  }
}

// Para crear un objeto (instancia) de una clase, usamos la palabra clave `new`.
const miCoche = new Vehiculo("Toyota", "Corolla");

console.log("Mi coche:", miCoche);
miCoche.acelerar(60);
miCoche.frenar(20);


// --- 2. Herencia con `extends` y `super` ---
// La herencia permite a una clase (clase hija) heredar propiedades y métodos de otra clase (clase padre).

console.log("\n--- Herencia con `extends` ---");

// La clase `CocheElectrico` hereda de `Vehiculo`.
class CocheElectrico extends Vehiculo {
  constructor(marca, modelo, autonomia) {
    // `super()` debe ser llamado ANTES de usar `this` en un constructor de una clase hija.
    // Llama al constructor de la clase padre (`Vehiculo`) para inicializar `marca` y `modelo`.
    super(marca, modelo);
    
    // Propiedad específica de la clase hija
    this.autonomia = autonomia; // en km
  }

  // Método específico de la clase hija
  cargarBateria() {
    console.log(`Cargando la batería del ${this.marca} ${this.modelo}...`);
  }

  // Sobrescribir un método (Method Overriding)
  // Podemos redefinir un método heredado para que tenga un comportamiento específico en la clase hija.
  acelerar(incremento) {
    // `super` también se puede usar para llamar a métodos de la clase padre.
    super.acelerar(incremento);
    console.log("(El motor eléctrico es silencioso)");
  }
}

const miTesla = new CocheElectrico("Tesla", "Model 3", 500);

console.log("Mi Tesla:", miTesla);
miTesla.acelerar(100); // Llama al método `acelerar` de `CocheElectrico`
miTesla.frenar(30);      // Llama al método `frenar` heredado de `Vehiculo`
miTesla.cargarBateria(); // Llama al método propio de `CocheElectrico`


// --- 3. Getters y Setters ---
// Permiten definir métodos que se comportan como si fueran propiedades.

console.log("\n--- Getters y Setters ---");

class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  // Un `getter` para obtener una propiedad computada.
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }

  // Un `setter` para modificar datos a través de una "propiedad".
  set nombreCompleto(valor) {
    const partes = valor.split(' ');
    this.nombre = partes[0];
    this.apellido = partes[1] || '';
  }
}

const user = new Usuario("Ana", "Silva");
console.log("Nombre completo (getter):", user.nombreCompleto); // Se llama como una propiedad, no como un método.

user.nombreCompleto = "Carlos Ruiz"; // El `setter` es llamado.
console.log("Nombre actualizado:", user.nombre);
console.log("Apellido actualizado:", user.apellido);


// --- 4. Métodos Estáticos (Static Methods) ---
// Los métodos estáticos se llaman directamente en la clase, no en una instancia de la clase.
// Son útiles para funciones de utilidad relacionadas con la clase.

console.log("\n--- Métodos Estáticos ---");

class Matematicas {
  static PI = 3.14159;

  static sumar(a, b) {
    return a + b;
  }
}

console.log("Valor de PI estático:", Matematicas.PI);
console.log("Suma estática:", Matematicas.sumar(5, 3));

// const m = new Matematicas();
// m.sumar(1, 2); // Esto daría un error, `sumar` no existe en la instancia.


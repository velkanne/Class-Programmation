

// Clase 2 (Unidad 4): Patrones de Diseño - Factory (Fábrica)

// --- El Patrón Factory ---
// Propósito: Definir una interfaz para crear un objeto, pero dejar que sean las subclases (o un método) 
// quienes decidan qué clase instanciar. El patrón Factory permite que una clase delegue la instanciación a otra.

// Casos de Uso:
// - Cuando un sistema necesita ser independiente de cómo sus objetos son creados.
// - Cuando una clase quiere que sus subclases especifiquen los objetos que crea.
// - Cuando la lógica de creación de un objeto es compleja y se quiere centralizar.

console.log("--- Implementación del Patrón Factory ---");

// Primero, definimos las clases de los "productos" que nuestra fábrica creará.

class Usuario { 
  constructor(nombre, permisos) {
    this.nombre = nombre;
    this.permisos = permisos;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}.`);
  }
}

class Admin extends Usuario {
  constructor(nombre) {
    super(nombre, ["leer", "escribir", "eliminar"]);
  }
}

class Editor extends Usuario {
  constructor(nombre) {
    super(nombre, ["leer", "escribir"]);
  }
}

class Invitado extends Usuario {
  constructor(nombre) {
    super(nombre, ["leer"]);
  }
}

// Ahora, creamos la Fábrica.
class UserFactory {
  // El método estático `crearUsuario` es el corazón de la fábrica.
  // Recibe el tipo de usuario a crear y los datos necesarios.
  static crearUsuario(tipo, nombre) {
    switch (tipo.toLowerCase()) {
      case 'admin':
        return new Admin(nombre);
      case 'editor':
        return new Editor(nombre);
      case 'invitado':
        return new Invitado(nombre);
      default:
        throw new Error(`El tipo de usuario '${tipo}' no es válido.`);
    }
  }
}

// --- Uso de la Fábrica ---
// El código "cliente" no necesita saber cómo se crea un Admin o un Editor.
// No usa `new Admin()` o `new Editor()` directamente. Solo le pide a la fábrica lo que necesita.

console.log("Creando usuarios a través de la fábrica:");

const admin = UserFactory.crearUsuario("admin", "Ana");
const editor = UserFactory.crearUsuario("editor", "Carlos");
const invitado = UserFactory.crearUsuario("invitado", "Beatriz");

console.log("\nUsuario Admin:", admin);
admin.saludar();
console.log("Permisos del Admin:", admin.permisos);

console.log("\nUsuario Editor:", editor);
editor.saludar();
console.log("Permisos del Editor:", editor.permisos);

console.log("\nUsuario Invitado:", invitado);
invitado.saludar();
console.log("Permisos del Invitado:", invitado.permisos);

try {
  UserFactory.crearUsuario("superusuario", "David");
} catch (error) {
  console.error("\nError al crear usuario:", error.message);
}


// --- Beneficios del Patrón Factory ---
// - Desacoplamiento: El código cliente no está acoplado a las clases concretas de los productos.
//   Solo necesita conocer la fábrica. Si en el futuro la clase `Admin` cambia de nombre o de constructor,
//   solo necesitamos actualizar la fábrica, no todo el código que crea administradores.

// - Centralización: La lógica de creación de objetos está en un solo lugar, lo que facilita su mantenimiento.

// - Flexibilidad y Extensibilidad: Si queremos añadir un nuevo tipo de usuario (ej. `Moderador`),
//   simplemente creamos la clase `Moderador` y añadimos un nuevo `case` a la fábrica. El código cliente
//   no necesita ningún cambio para empezar a crear moderadores.


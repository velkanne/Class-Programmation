

// Clase 7 (Unidad 4): Estructuras de Datos - Listas Enlazadas (Linked Lists)

// Aunque JavaScript tiene arrays muy potentes, entender estructuras de datos clásicas como las listas enlazadas
// es fundamental para un desarrollador senior. Demuestra conocimiento de los fundamentos de la informática
// y permite tomar decisiones informadas sobre qué estructura usar según el caso.

// --- ¿Qué es una Lista Enlazada? ---
// Es una estructura de datos lineal donde los elementos no se almacenan en ubicaciones de memoria contiguas.
// Cada elemento es un objeto separado (un "Nodo") que contiene datos y una referencia (`next`) al siguiente nodo de la secuencia.

// Ventajas sobre los Arrays:
// - Inserción y eliminación de elementos al principio y al final son muy rápidas (O(1)).
// - El tamaño de la lista es dinámico y no requiere reasignación de memoria contigua.

// Desventajas sobre los Arrays:
// - No hay acceso aleatorio a los elementos. Para llegar al elemento N, debes recorrer los N-1 elementos anteriores (O(n)).
// - Ocupan más memoria debido a los punteros (`next`).

console.log("--- Implementación de una Lista Enlazada Simple ---");

// --- 1. El Nodo ---
// Es el bloque de construcción de la lista.
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null; // Al principio, el nodo no apunta a nada
  }
}

// --- 2. La Lista Enlazada ---
// Es la clase que gestiona los nodos.
class ListaEnlazada {
  constructor() {
    this.cabeza = null; // El primer nodo de la lista
    this.cola = null;   // El último nodo de la lista
    this.longitud = 0;
  }

  // `push(valor)`: Añade un nodo al final de la lista.
  push(valor) {
    const nuevoNodo = new Nodo(valor);
    if (!this.cabeza) {
      // Si la lista está vacía, el nuevo nodo es tanto la cabeza como la cola.
      this.cabeza = nuevoNodo;
      this.cola = nuevoNodo;
    } else {
      // Si no, el `siguiente` de la cola actual apunta al nuevo nodo...
      this.cola.siguiente = nuevoNodo;
      // ...y el nuevo nodo se convierte en la nueva cola.
      this.cola = nuevoNodo;
    }
    this.longitud++;
    return this;
  }

  // `pop()`: Elimina y devuelve el último nodo.
  pop() {
    if (!this.cabeza) return undefined;
    let actual = this.cabeza;
    let nuevoFinal = actual;
    while (actual.siguiente) {
      nuevoFinal = actual;
      actual = actual.siguiente;
    }
    this.cola = nuevoFinal;
    this.cola.siguiente = null;
    this.longitud--;
    if (this.longitud === 0) {
      this.cabeza = null;
      this.cola = null;
    }
    return actual;
  }

  // `shift()`: Elimina y devuelve el primer nodo.
  shift() {
    if (!this.cabeza) return undefined;
    const cabezaActual = this.cabeza;
    this.cabeza = cabezaActual.siguiente;
    this.longitud--;
    if (this.longitud === 0) {
      this.cola = null;
    }
    return cabezaActual;
  }

  // `unshift(valor)`: Añade un nodo al principio de la lista.
  unshift(valor) {
    const nuevoNodo = new Nodo(valor);
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
      this.cola = nuevoNodo;
    } else {
      nuevoNodo.siguiente = this.cabeza;
      this.cabeza = nuevoNodo;
    }
    this.longitud++;
    return this;
  }

  // `get(indice)`: Obtiene el nodo en una posición específica.
  get(indice) {
    if (indice < 0 || indice >= this.longitud) return null;
    let contador = 0;
    let actual = this.cabeza;
    while (contador !== indice) {
      actual = actual.siguiente;
      contador++;
    }
    return actual;
  }

  // Método de utilidad para imprimir la lista
  imprimir() {
    const arr = [];
    let actual = this.cabeza;
    while (actual) {
      arr.push(actual.valor);
      actual = actual.siguiente;
    }
    console.log(arr.join(" -> "));
  }
}

// --- 3. Uso de la Lista Enlazada ---

const miLista = new ListaEnlazada();

console.log("\nAñadiendo elementos (push):");
miLista.push("A");
miLista.push("B");
miLista.push("C");
miLista.imprimir(); // A -> B -> C

console.log("\nAñadiendo al principio (unshift):");
miLista.unshift("Z");
miLista.imprimir(); // Z -> A -> B -> C

console.log("\nObteniendo el nodo en el índice 2:", miLista.get(2)?.valor); // B

console.log("\nEliminando el último elemento (pop):");
miLista.pop();
miLista.imprimir(); // Z -> A -> B

console.log("\nEliminando el primer elemento (shift):");
miLista.shift();
miLista.imprimir(); // A -> B


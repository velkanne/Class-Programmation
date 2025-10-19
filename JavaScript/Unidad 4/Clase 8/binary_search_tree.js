

// Clase 8 (Unidad 4): Estructuras de Datos - Árboles Binarios de Búsqueda (BST)

// Un Árbol Binario de Búsqueda es una estructura de datos no lineal basada en nodos, donde cada nodo
// puede tener como máximo dos hijos (izquierdo y derecho). Sigue reglas estrictas:
// 1. El subárbol izquierdo de un nodo contiene solo nodos con valores menores que el nodo.
// 2. El subárbol derecho de un nodo contiene solo nodos con valores mayores que el nodo.
// 3. Ambos subárboles (izquierdo y derecho) deben ser también árboles binarios de búsqueda.

// Ventajas:
// - Búsqueda, inserción y eliminación son muy rápidas (en promedio O(log n)) si el árbol está balanceado.
// - Mantiene los datos ordenados.

// Desventajas:
// - En el peor de los casos (un árbol desbalanceado, que parece una lista enlazada), las operaciones pueden degradarse a O(n).

console.log("--- Implementación de un Árbol Binario de Búsqueda (BST) ---");

// --- 1. El Nodo ---
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null; // Referencia al subárbol izquierdo
    this.derecha = null;   // Referencia al subárbol derecho
  }
}

// --- 2. El Árbol Binario de Búsqueda ---
class ArbolBinarioDeBusqueda {
  constructor() {
    this.raiz = null; // La raíz del árbol
  }

  // `insert(valor)`: Inserta un nuevo valor en el árbol.
  insert(valor) {
    const nuevoNodo = new Nodo(valor);
    if (this.raiz === null) {
      this.raiz = nuevoNodo;
      return this;
    }
    let actual = this.raiz;
    while (true) {
      if (valor === actual.valor) return undefined; // No se permiten duplicados
      if (valor < actual.valor) {
        if (actual.izquierda === null) {
          actual.izquierda = nuevoNodo;
          return this;
        }
        actual = actual.izquierda;
      } else {
        if (actual.derecha === null) {
          actual.derecha = nuevoNodo;
          return this;
        }
        actual = actual.derecha;
      }
    }
  }

  // `find(valor)`: Busca un valor en el árbol.
  find(valor) {
    if (this.raiz === null) return false;
    let actual = this.raiz;
    let encontrado = false;
    while (actual && !encontrado) {
      if (valor < actual.valor) {
        actual = actual.izquierda;
      } else if (valor > actual.valor) {
        actual = actual.derecha;
      } else {
        encontrado = true;
      }
    }
    return encontrado ? actual : false;
  }

  // --- Recorridos de Árboles (Tree Traversal) ---

  // Búsqueda en Anchura (Breadth-First Search - BFS)
  // Visita los nodos nivel por nivel.
  BFS() {
    let nodo = this.raiz;
    const datos = [];
    const cola = [nodo]; // Usamos una cola (queue)
    while (cola.length) {
      nodo = cola.shift(); // Saca el primer elemento de la cola
      datos.push(nodo.valor);
      if (nodo.izquierda) cola.push(nodo.izquierda);
      if (nodo.derecha) cola.push(nodo.derecha);
    }
    return datos;
  }

  // Búsqueda en Profundidad (Depth-First Search - DFS) - PreOrden
  // Visita: Raíz -> Izquierda -> Derecha
  DFS_PreOrden() {
    const datos = [];
    function recorrer(nodo) {
      datos.push(nodo.valor);
      if (nodo.izquierda) recorrer(nodo.izquierda);
      if (nodo.derecha) recorrer(nodo.derecha);
    }
    recorrer(this.raiz);
    return datos;
  }

  // DFS - PostOrden
  // Visita: Izquierda -> Derecha -> Raíz
  DFS_PostOrden() {
    const datos = [];
    function recorrer(nodo) {
      if (nodo.izquierda) recorrer(nodo.izquierda);
      if (nodo.derecha) recorrer(nodo.derecha);
      datos.push(nodo.valor);
    }
    recorrer(this.raiz);
    return datos;
  }

  // DFS - InOrden
  // Visita: Izquierda -> Raíz -> Derecha
  // ¡En un BST, este recorrido devuelve los valores en orden ascendente!
  DFS_InOrden() {
    const datos = [];
    function recorrer(nodo) {
      if (nodo.izquierda) recorrer(nodo.izquierda);
      datos.push(nodo.valor);
      if (nodo.derecha) recorrer(nodo.derecha);
    }
    recorrer(this.raiz);
    return datos;
  }
}

// --- 3. Uso del BST ---

const arbol = new ArbolBinarioDeBusqueda();

//       10
//    5      13
//  2   7   11   16

arbol.insert(10);
arbol.insert(5);
arbol.insert(13);
arbol.insert(11);
arbol.insert(2);
arbol.insert(16);
arbol.insert(7);

console.log("Buscando el valor 7:", arbol.find(7) !== false);
console.log("Buscando el valor 99:", arbol.find(99) !== false);

console.log("\n--- Recorridos ---");
console.log("BFS (Anchura):", arbol.BFS()); // [10, 5, 13, 2, 7, 11, 16]
console.log("DFS PreOrden (Raíz, Izq, Der):", arbol.DFS_PreOrden()); // [10, 5, 2, 7, 13, 11, 16]
console.log("DFS PostOrden (Izq, Der, Raíz):", arbol.DFS_PostOrden()); // [2, 7, 5, 11, 16, 13, 10]
console.log("DFS InOrden (Izq, Raíz, Der):", arbol.DFS_InOrden()); // [2, 5, 7, 10, 11, 13, 16] (¡Ordenado!)


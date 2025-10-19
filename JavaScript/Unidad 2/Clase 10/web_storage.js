
// Clase 10 (Unidad 2): Web Storage - localStorage y sessionStorage

// La API de Web Storage permite a los navegadores almacenar datos de forma local en el navegador del usuario,
// de una manera más sencilla y con más capacidad que las antiguas cookies.
// Existen dos mecanismos de Web Storage:

// 1. `localStorage`: Almacena datos de forma indefinida (o hasta que el usuario los borre).
//    Los datos persisten incluso después de cerrar y volver a abrir el navegador.

// 2. `sessionStorage`: Almacena datos solo para la sesión actual. Los datos se eliminan automáticamente
//    cuando se cierra la pestaña o el navegador.

// Ambos objetos (`localStorage` y `sessionStorage`) tienen exactamente los mismos métodos.

// --- Selección de Elementos del DOM ---
const localKeyInput = document.querySelector("#local-key");
const localValueInput = document.querySelector("#local-value");
const sessionKeyInput = document.querySelector("#session-key");
const sessionValueInput = document.querySelector("#session-value");
const displayArea = document.querySelector("#display-area");

// --- Funciones para LocalStorage ---

document.querySelector("#btn-local-save").addEventListener("click", () => {
  const key = localKeyInput.value;
  const value = localValueInput.value;
  if (key && value) {
    // `setItem(clave, valor)`: Guarda un par clave-valor. Ambos deben ser strings.
    localStorage.setItem(key, value);
    alert(`Guardado en localStorage: { ${key}: "${value}" }`);
    localKeyInput.value = "";
    localValueInput.value = "";
  } else {
    alert("Por favor, introduce una clave y un valor para localStorage.");
  }
});

document.querySelector("#btn-local-get").addEventListener("click", () => {
  const key = localKeyInput.value;
  if (key) {
    // `getItem(clave)`: Recupera el valor asociado a una clave. Devuelve `null` si la clave no existe.
    const value = localStorage.getItem(key);
    if (value !== null) {
      displayArea.textContent = `Dato de localStorage [${key}]: ${value}`;
    } else {
      displayArea.textContent = `No se encontró ningún dato con la clave "${key}" en localStorage.`;
    }
  } else {
    alert("Por favor, introduce la clave que deseas obtener de localStorage.");
  }
});

document.querySelector("#btn-local-remove").addEventListener("click", () => {
  const key = localKeyInput.value;
  if (key) {
    // `removeItem(clave)`: Elimina el par clave-valor especificado.
    localStorage.removeItem(key);
    alert(`La clave "${key}" ha sido eliminada de localStorage.`);
    displayArea.textContent = "";
  } else {
    alert("Por favor, introduce la clave que deseas eliminar de localStorage.");
  }
});

document.querySelector("#btn-local-clear").addEventListener("click", () => {
  // `clear()`: Elimina TODOS los datos guardados en el origen (para este dominio).
  localStorage.clear();
  alert("¡Todo el localStorage ha sido limpiado!");
  displayArea.textContent = "";
});

// --- Funciones para SessionStorage (la lógica es idéntica) ---

document.querySelector("#btn-session-save").addEventListener("click", () => {
  const key = sessionKeyInput.value;
  const value = sessionValueInput.value;
  if (key && value) {
    sessionStorage.setItem(key, value);
    alert(`Guardado en sessionStorage: { ${key}: "${value}" }`);
    sessionKeyInput.value = "";
    sessionValueInput.value = "";
  }
});

document.querySelector("#btn-session-get").addEventListener("click", () => {
  const key = sessionKeyInput.value;
  if (key) {
    const value = sessionStorage.getItem(key);
    displayArea.textContent = (value !== null) ? `Dato de sessionStorage [${key}]: ${value}` : `No se encontró la clave "${key}".`;
  }
});

document.querySelector("#btn-session-remove").addEventListener("click", () => {
  const key = sessionKeyInput.value;
  if (key) {
    sessionStorage.removeItem(key);
    alert(`La clave "${key}" ha sido eliminada de sessionStorage.`);
    displayArea.textContent = "";
  }
});

document.querySelector("#btn-session-clear").addEventListener("click", () => {
  sessionStorage.clear();
  alert("¡Todo el sessionStorage ha sido limpiado!");
  displayArea.textContent = "";
});

// --- Guardando Objetos en Web Storage ---
// Web Storage solo puede almacenar strings. Para guardar objetos o arrays, debemos usar JSON.

const usuario = {
  nombre: "Carmen",
  email: "carmen@example.com",
  esAdmin: true
};

// 1. Convertir el objeto a un string JSON
const usuarioJSON = JSON.stringify(usuario, null, 2);

// 2. Guardar el string en localStorage
localStorage.setItem("objetoUsuario", usuarioJSON);
console.log("Objeto de usuario guardado en localStorage como un string JSON.");

// 3. Para recuperarlo, hacemos el proceso inverso
const usuarioRecuperadoJSON = localStorage.getItem("objetoUsuario");
if (usuarioRecuperadoJSON) {
  // 4. Convertir el string JSON de vuelta a un objeto
  const usuarioRecuperadoObjeto = JSON.parse(usuarioRecuperadoJSON);
  console.log("Objeto de usuario recuperado y parseado de localStorage:", usuarioRecuperadoObjeto);
  console.log("Nombre de usuario recuperado:", usuarioRecuperadoObjeto.nombre);
}

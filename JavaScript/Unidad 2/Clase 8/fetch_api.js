
// Clase 8 (Unidad 2): JavaScript Asíncrono - Fetch API

// La API `fetch` es la herramienta moderna y estándar en los navegadores para realizar peticiones de red (HTTP requests).
// Reemplaza al antiguo `XMLHttpRequest`. `fetch` está basado en promesas, lo que lo hace ideal para usar con `async/await`.

// --- Selección de Elementos del DOM ---
const btnCargar = document.querySelector("#btn-cargar");
const contenedorDatos = document.querySelector("#contenedor-datos");
const estado = document.querySelector("#estado");

// La URL de la API pública que vamos a consultar
const urlPosts = "https://jsonplaceholder.typicode.com/posts?_limit=5"; // Pedimos solo 5 posts para el ejemplo

// --- 1. Usando `fetch` con Promesas (`.then`/`.catch`) ---

function cargarPostsConPromesas() {
  estado.textContent = "Cargando datos con Promesas...";
  contenedorDatos.innerHTML = ""; // Limpiamos el contenedor

  fetch(urlPosts)
    .then(response => {
      // `fetch` se resuelve incluso si hay un error HTTP (como 404 o 500).
      // Por eso, debemos comprobar si la respuesta fue exitosa (`response.ok`).
      console.log("Respuesta recibida:", response);
      if (!response.ok) {
        // Si la respuesta no es OK, lanzamos un error para que lo capture el `.catch()`.
        throw new Error(`Error HTTP: ${response.status}`);
      }
      // El método `.json()` lee el cuerpo de la respuesta y lo parsea como JSON.
      // ¡IMPORTANTE! `.json()` también devuelve una promesa.
      return response.json();
    })
    .then(posts => {
      // Este `.then` se ejecuta cuando la promesa de `response.json()` se resuelve.
      console.log("Datos parseados (posts):", posts);
      estado.textContent = "¡Posts cargados con éxito!";
      mostrarPosts(posts);
    })
    .catch(error => {
      // Este `.catch` captura tanto errores de red (ej. no hay conexión) como los errores que lanzamos manualmente.
      console.error("Ocurrió un error en la petición fetch:", error);
      estado.textContent = `Error al cargar los datos: ${error.message}`;
    });
}

// --- 2. Usando `fetch` con `async/await` (Método recomendado por su legibilidad) ---

async function cargarPostsConAsyncAwait() {
  estado.textContent = "Cargando datos con Async/Await...";
  contenedorDatos.innerHTML = ""; // Limpiamos el contenedor

  try {
    // `await` espera a que la promesa de `fetch` se resuelva.
    const response = await fetch(urlPosts);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    // `await` espera a que la promesa de `.json()` se resuelva.
    const posts = await response.json();

    console.log("Datos parseados (posts) con async/await:", posts);
    estado.textContent = "¡Posts cargados con éxito!";
    mostrarPosts(posts);

  } catch (error) {
    console.error("Ocurrió un error en la petición fetch (async/await):", error);
    estado.textContent = `Error al cargar los datos: ${error.message}`;
  }
}

// --- 3. Función para renderizar los datos en el DOM ---

function mostrarPosts(posts) {
  // Limpiamos el estado inicial
  if (estado.textContent.startsWith("¡Posts cargados")) {
    estado.textContent = "";
  }

  posts.forEach(post => {
    // Creamos los elementos del DOM para cada post
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const postTitle = document.createElement("h3");
    postTitle.textContent = `${post.id}: ${post.title}`;

    const postBody = document.createElement("p");
    postBody.textContent = post.body;

    // Los añadimos al div del post
    postDiv.appendChild(postTitle);
    postDiv.appendChild(postBody);

    // Añadimos el post al contenedor principal
    contenedorDatos.appendChild(postDiv);
  });
}

// --- Asignación del Evento ---

// Usaremos la versión con async/await que es más moderna.
btnCargar.addEventListener("click", cargarPostsConAsyncAwait);

// Para probar la versión con promesas, puedes cambiar la línea anterior por:
// btnCargar.addEventListener("click", cargarPostsConPromesas);

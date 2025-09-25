# Clase 2: Atributos y Métodos
# Ejercicio 2: Métodos Especiales (Dunder Methods)

# --- Explicación ---
# Los métodos especiales, también conocidos como "dunder methods" (double underscore),
# permiten emular comportamientos nativos de Python en nuestras clases.
# Sus nombres siempre empiezan y terminan con doble guion bajo (ej: __init__, __str__, __len__).
# Hacen que nuestros objetos sean más "pitónicos" y fáciles de usar.

class Playlist:
    def __init__(self, nombre):
        self.nombre = nombre
        self.canciones = [] # Una lista para almacenar las canciones

    # --- Método Especial: __str__ ---
    # Define la representación "informal" en formato de cadena de un objeto.
    # Es lo que se llama cuando usamos print(objeto) o str(objeto).
    # Debe devolver una cadena (string).
    def __str__(self):
        return f"Playlist '{self.nombre}' con {len(self.canciones)} canciones."

    # --- Método Especial: __len__ ---
    # Permite que la función global len() funcione con nuestros objetos.
    # Debe devolver un número entero.
    def __len__(self):
        return len(self.canciones)

    # --- Método Especial: __getitem__ ---
    # Permite acceder a los elementos internos usando la notación de corchetes (objeto[indice]).
    def __getitem__(self, index):
        return self.canciones[index]

    # --- Método Especial: __setitem__ ---
    # Permite asignar valores a elementos internos usando la notación de corchetes (objeto[indice] = valor).
    def __setitem__(self, index, value):
        self.canciones[index] = value

    # --- Método normal ---
    def agregar_cancion(self, cancion):
        self.canciones.append(cancion)
        print(f"Añadida: '{cancion}' a la playlist '{self.nombre}'.")


# --- Creación de un Objeto Playlist ---
mi_playlist = Playlist("Éxitos de los 80")
mi_playlist.agregar_cancion("Billie Jean - Michael Jackson")
mi_playlist.agregar_cancion("Take on Me - a-ha")
mi_playlist.agregar_cancion("Like a Virgin - Madonna")


# --- Uso de los Métodos Especiales ---

# 1. Usando __str__
print("\n--- Probando __str__ ---")
print(mi_playlist) # Esto llama automáticamente a mi_playlist.__str__()

# 2. Usando __len__
print("\n--- Probando __len__ ---")
print(f"La playlist tiene {len(mi_playlist)} canciones.") # Esto llama a mi_playlist.__len__()

# 3. Usando __getitem__
print("\n--- Probando __getitem__ ---")
# Accedemos a la primera canción como si la playlist fuera una lista.
primera_cancion = mi_playlist[0]
print(f"La primera canción es: '{primera_cancion}'") # Llama a mi_playlist.__getitem__(0)

# Podemos incluso iterar sobre el objeto gracias a __getitem__ y __len__
print("\n--- Iterando sobre la playlist ---")
for cancion in mi_playlist:
    print(f"- {cancion}")

# 4. Usando __setitem__
print("\n--- Probando __setitem__ ---")
print(f"Canción en el índice 2 antes del cambio: '{mi_playlist[2]}'")
mi_playlist[2] = "Sweet Child o' Mine - Guns N' Roses" # Llama a mi_playlist.__setitem__(2, "...")
print(f"Canción en el índice 2 después del cambio: '{mi_playlist[2]}'")

print("\n--- Playlist final ---")
print(mi_playlist)
for cancion in mi_playlist:
    print(f"- {cancion}")

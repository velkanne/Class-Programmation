# Clase 2: Atributos y Métodos
# Ejercicio 1: Atributos de Instancia vs. Atributos de Clase

# --- Explicación ---
# Atributos de Instancia: Son específicos para cada objeto. Se definen dentro del método __init__ usando `self`.
#   Cada instancia puede tener valores diferentes para estos atributos (ej: `self.nombre`).
#
# Atributos de Clase: Pertenecen a la clase en su conjunto. Son compartidos por todas las instancias de esa clase.
#   Se definen directamente dentro de la clase, fuera de cualquier método.

class Jugador:
    # --- Atributo de Clase ---
    # Este atributo es compartido por todos los objetos de la clase Jugador.
    # Es útil para datos que son constantes para todas las instancias.
    deporte = "Fútbol"
    total_jugadores = 0 # Un contador para saber cuántos jugadores hemos creado.

    def __init__(self, nombre, equipo, dorsal):
        # --- Atributos de Instancia ---
        # Estos atributos son únicos para cada jugador.
        self.nombre = nombre
        self.equipo = equipo
        self.dorsal = dorsal
        self.goles = 0 # Cada jugador empieza con 0 goles.

        # Modificamos el atributo de clase para contar el nuevo jugador.
        Jugador.total_jugadores += 1
        print(f"¡{self.nombre} se ha unido al campo! Total de jugadores: {Jugador.total_jugadores}")

    def marcar_gol(self):
        """Incrementa el contador de goles del jugador."""
        self.goles += 1
        print(f"¡GOOOL de {self.nombre}! Total de goles: {self.goles}")

    def describir(self):
        """Muestra la información del jugador."""
        # Podemos acceder tanto a atributos de clase como de instancia.
        print(f"--- Ficha de Jugador ---")
        print(f"Deporte: {self.deporte}") # Accediendo al atributo de clase a través de self
        print(f"Nombre: {self.nombre}")
        print(f"Equipo: {self.equipo}")
        print(f"Dorsal: {self.dorsal}")
        print(f"Goles: {self.goles}")


# --- Creación de Objetos ---
print("--- Comienza el partido ---")
jugador1 = Jugador("Lionel Messi", "Inter Miami", 10)
jugador2 = Jugador("Cristiano Ronaldo", "Al-Nassr", 7)


# --- Interacción y Observación ---
print("
--- Acciones de los jugadores ---")
jugador1.marcar_gol()
jugador1.marcar_gol()
jugador2.marcar_gol()

print("
--- Fichas al final del partido ---")
jugador1.describir()
jugador2.describir()


# --- Acceso a los atributos ---
print("
--- Atributos de Clase vs. Instancia ---")
# Atributos de instancia son únicos para cada objeto:
print(f"Nombre del jugador 1: {jugador1.nombre}")
print(f"Nombre del jugador 2: {jugador2.nombre}")

# Atributos de clase son compartidos:
print(f"Deporte del jugador 1: {jugador1.deporte}")
print(f"Deporte del jugador 2: {jugador2.deporte}")

# Se puede acceder al atributo de clase directamente desde la clase:
print(f"Deporte (desde la clase): {Jugador.deporte}")
print(f"Total de jugadores creados: {Jugador.total_jugadores}")

# Si cambiamos un atributo de clase, el cambio se refleja en todas las instancias
# que no lo hayan sobrescrito.
print("
--- Cambio de atributo de clase ---")
Jugador.deporte = "Fútbol Sala"
print(f"Nuevo deporte del jugador 1: {jugador1.deporte}")
print(f"Nuevo deporte del jugador 2: {jugador2.deporte}")

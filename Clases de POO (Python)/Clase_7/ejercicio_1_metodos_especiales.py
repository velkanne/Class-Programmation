# Clase 7: Métodos de Clase y Métodos Estáticos

# --- Explicación ---
# Además de los métodos de instancia (los que usan `self`), las clases pueden tener otros dos tipos de métodos:
#
# 1.  **Métodos de Clase (`@classmethod`)**:
#     - En lugar de recibir la instancia (`self`) como primer argumento, reciben la propia clase (`cls`).
#     - Se usan cuando un método necesita trabajar con la clase, no con una instancia específica.
#     - Un caso de uso muy común es crear "constructores alternativos" (factory methods).
#
# 2.  **Métodos Estáticos (`@staticmethod`)**:
#     - No reciben ni la instancia (`self`) ni la clase (`cls`) como primer argumento.
#     - Se comportan como funciones normales, pero pertenecen al "espacio de nombres" de la clase.
#     - Se usan para funcionalidades que están relacionadas lógicamente con la clase, pero que no
#       dependen de ningún estado de la clase o de la instancia.

import datetime

class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    # --- Método de Instancia ---
    # El método más común. Opera sobre una instancia específica (`self`).
    def presentarse(self):
        return f"Hola, soy {self.nombre} y tengo {self.edad} años."

    # --- Método de Clase ---
    # Se decora con @classmethod y recibe `cls`.
    @classmethod
    def desde_anio_nacimiento(cls, nombre, anio_nacimiento):
        """Constructor alternativo: crea una instancia de Persona a partir del año de nacimiento."""
        # `cls` aquí es la clase `Persona`.
        # Esto es útil porque si la clase se renombra, no hay que cambiar el código aquí.
        # Y si una subclase hereda este método, `cls` se referirá a la subclase.
        edad_actual = datetime.date.today().year - anio_nacimiento
        return cls(nombre, edad_actual) # Llama al constructor __init__ de la clase

    # --- Método Estático ---
    # Se decora con @staticmethod. No recibe `self` ni `cls`.
    @staticmethod
    def es_mayor_de_edad(edad):
        """Función de utilidad: verifica si una edad corresponde a un mayor de edad."""
        # Este método no necesita información ni de la clase ni de una instancia.
        # Podría ser una función global, pero tiene sentido lógico agruparla con la clase Persona.
        return edad >= 18


# --- Creación de instancias ---

# 1. Usando el constructor tradicional `__init__`
persona1 = Persona("Ana", 25)
print(persona1.presentarse())

# 2. Usando el método de clase (constructor alternativo)
# Esto es a menudo más legible que hacer el cálculo de la edad fuera.
persona2 = Persona.desde_anio_nacimiento("Carlos", 1990)
print(persona2.presentarse())


# --- Uso de los métodos ---

print("\n--- Verificando la mayoría de edad ---")

# Llamando al método estático desde la clase
edad_ana = 25
if Persona.es_mayor_de_edad(edad_ana):
    print(f"{edad_ana} años es mayor de edad.")

# También se puede llamar desde una instancia, pero no es lo común
# ya que el método no usa la información de la instancia.
edad_carlos = persona2.edad
if persona2.es_mayor_de_edad(edad_carlos):
    print(f"Carlos, con {edad_carlos} años, es mayor de edad.")

edad_nino = 15
if not Persona.es_mayor_de_edad(edad_nino):
    print(f"{edad_nino} años NO es mayor de edad.")

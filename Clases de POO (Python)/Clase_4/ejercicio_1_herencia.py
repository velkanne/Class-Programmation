# Clase 4: Herencia
# Ejercicio 1: Herencia Simple y Sobrescritura de Métodos

# --- Explicación ---
# La herencia es otro pilar de la POO. Permite crear una nueva clase (clase hija o subclase)
# que hereda atributos y métodos de una clase existente (clase padre o superclase).
#
# Ventajas:
# 1.  **Reutilización de código**: Evita duplicar código. La lógica común se define en la clase padre.
# 2.  **Organización**: Crea una jerarquía lógica y fácil de entender (ej: un `Perro` ES UN `Animal`).
# 3.  **Extensibilidad**: Las clases hijas pueden añadir su propia funcionalidad específica.
#
# La "sobrescritura" de métodos ocurre cuando una clase hija define un método que ya existe
# en su clase padre. Esto le permite a la hija proporcionar una implementación específica de ese método.

# --- Clase Padre (Superclase) ---
class Animal:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
        print(f"Ha nacido un animal: {self.nombre}")

    def hacer_sonido(self):
        # Método genérico que será sobrescrito por las clases hijas.
        print("El animal hace un sonido genérico.")

    def comer(self):
        # Método que será heredado y utilizado por todas las clases hijas.
        print(f"{self.nombre} está comiendo.")

    def describir(self):
        print(f"Soy {self.nombre} y tengo {self.edad} años.")


# --- Clases Hijas (Subclases) ---
# Para heredar, se pone el nombre de la clase padre entre paréntesis.

class Perro(Animal):
    # El Perro hereda __init__, comer() y describir() de Animal.

    # --- Sobrescritura de Método ---
    # Proporcionamos una implementación específica de hacer_sonido para el Perro.
    def hacer_sonido(self):
        print(f"{self.nombre} dice: ¡Guau! ¡Guau!")

    # --- Método Específico de la Subclase ---
    def mover_cola(self):
        print(f"{self.nombre} está moviendo la cola felizmente.")

class Gato(Animal):
    # El Gato también hereda de Animal.

    # --- Sobrescritura de Método ---
    def hacer_sonido(self):
        print(f"{self.nombre} dice: ¡Miau!")

    # --- Método Específico de la Subclase ---
    def ronronear(self):
        print(f"{self.nombre} está ronroneando: Rrrrr...")


# --- Creación de Objetos ---
print("--- Creando instancias de las clases ---")
animal_generico = Animal("Criatura", 5)
mi_perro = Perro("Fido", 3)
mi_gato = Gato("Misi", 2)


# --- Interacción con los Objetos ---
print("\n--- Comportamiento del animal genérico ---")
animal_generico.describir() # Método heredado
animal_generico.hacer_sonido() # Método original de la clase padre
animal_generico.comer()      # Método heredado

print("\n--- Comportamiento del perro ---")
mi_perro.describir()      # Método heredado de Animal
mi_perro.hacer_sonido()   # Método sobrescrito en Perro
mi_perro.comer()          # Método heredado de Animal
mi_perro.mover_cola()     # Método propio de Perro

print("\n--- Comportamiento del gato ---")
mi_gato.describir()       # Método heredado de Animal
mi_gato.hacer_sonido()    # Método sobrescrito en Gato
mi_gato.comer()           # Método heredado de Animal
mi_gato.ronronear()       # Método propio de Gato

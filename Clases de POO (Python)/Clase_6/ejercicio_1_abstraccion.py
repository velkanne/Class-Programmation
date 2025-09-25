# Clase 6: Abstracción (Clases Abstractas)

# --- Explicación ---
# La abstracción es el proceso de ocultar los detalles complejos de implementación y mostrar solo
# la funcionalidad esencial al usuario.
# En POO, esto se logra a menudo con "Clases Base Abstractas" (Abstract Base Classes o ABCs).
#
# Una clase abstracta es una clase que no puede ser instanciada por sí misma. Su propósito es servir
# como un "contrato" o una plantilla para otras clases (las clases concretas).
#
# Define métodos (y a veces atributos) que las subclases DEBEN implementar.
# Si una subclase no implementa todos los métodos abstractos de su clase padre, también se convierte
# en una clase abstracta y no puede ser instanciada.
#
# En Python, usamos el módulo `abc` (Abstract Base Classes) para lograr esto.
# - `ABC`: Una clase auxiliar que se usa como clase base para crear una ABC.
# - `@abstractmethod`: Un decorador para definir un método abstracto.

from abc import ABC, abstractmethod
import math

# --- Clase Base Abstracta ---
# Heredamos de ABC para marcarla como una clase abstracta.
class FiguraGeometrica(ABC):
    def __init__(self, nombre):
        self.nombre = nombre

    # --- Método Abstracto ---
    # Este método no tiene implementación aquí. Solo define la "firma" (nombre y parámetros).
    # Cualquier clase que herede de FiguraGeometrica ESTÁ OBLIGADA a implementar este método.
    @abstractmethod
    def calcular_area(self):
        pass

    # --- Método Concreto ---
    # Las clases abstractas también pueden tener métodos concretos que las subclases heredan.
    def describir(self):
        return f"Soy una figura geométrica llamada '{self.nombre}'."


# --- Intentando instanciar una clase abstracta ---
# Esto dará un error (TypeError), porque no se puede crear un objeto de una clase abstracta.
try:
    figura_fantasma = FiguraGeometrica("Fantasma")
except TypeError as e:
    print(f"Error esperado: {e}\n")


# --- Clases Concretas ---
# Estas clases heredan de la clase abstracta e implementan sus métodos abstractos.

class Rectangulo(FiguraGeometrica):
    def __init__(self, nombre, base, altura):
        super().__init__(nombre)
        self.base = base
        self.altura = altura

    # --- Implementación del método abstracto ---
    def calcular_area(self):
        return self.base * self.altura

class Circulo(FiguraGeometrica):
    def __init__(self, nombre, radio):
        super().__init__(nombre)
        self.radio = radio

    # --- Implementación del método abstracto ---
    def calcular_area(self):
        return math.pi * (self.radio ** 2)


# --- Creación de Objetos de Clases Concretas ---
mi_rectangulo = Rectangulo("Rectángulo de la sala", 10, 5)
mi_circulo = Circulo("Círculo central", 7)


# --- Uso de los objetos ---
# Podemos usar polimorfismo con estas clases, ya que ambas garantizan tener el método `calcular_area`.

figuras = [mi_rectangulo, mi_circulo]

for figura in figuras:
    # Llamamos al método concreto heredado
    print(figura.describir())
    # Llamamos al método abstracto implementado
    area = figura.calcular_area()
    print(f"Mi área es: {area:.2f}")
    print("---")

# La abstracción nos da la seguridad de que cualquier objeto que sea una `FiguraGeometrica`
# tendrá, sin lugar a dudas, un método `calcular_area` disponible.

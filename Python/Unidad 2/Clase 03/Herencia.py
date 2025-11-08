# Unidad 2: Nivel Intermedio
# Clase 3: Herencia (POO)

# La herencia permite que una clase (hija) herede atributos y métodos de otra (padre).
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def comer(self):
        return f"{self.nombre} está comiendo."

# La clase Perro hereda de Animal.
class Perro(Animal):
    def ladrar(self):
        return "¡Guau!"

# La clase Gato también hereda de Animal.
class Gato(Animal):
    def maullar(self):
        return "¡Miau!"

mi_perro = Perro("Bobby")
mi_gato = Gato("Misi")

print(mi_perro.comer())  # Método heredado de Animal
print(mi_gato.nombre)    # Atributo heredado de Animal
print(mi_gato.maullar()) # Método propio de Gato

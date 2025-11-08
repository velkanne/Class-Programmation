# Unidad 2: Nivel Intermedio
# Clase 2: Clases y Objetos (POO)

# Una clase es un plano para crear objetos.
class Perro:
    # El método __init__ es el constructor de la clase.
    def __init__(self, nombre, raza):
        self.nombre = nombre
        self.raza = raza

    # Un método es una función dentro de una clase.
    def ladrar(self):
        return f"¡Guau! Mi nombre es {self.nombre}."

# Crear objetos (instancias) de la clase Perro.
mi_perro = Perro("Fido", "Golden Retriever")
otro_perro = Perro("Rex", "Pastor Alemán")

# Acceder a atributos y llamar a métodos.
print(f"{mi_perro.nombre} es de raza {mi_perro.raza}.")
print(otro_perro.ladrar())

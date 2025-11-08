# Unidad 2: Nivel Intermedio
# Clase 8: Polimorfismo (POO)

# Polimorfismo significa "muchas formas". En POO, se refiere a que objetos
# de diferentes clases pueden responder al mismo método.

class Perro:
    def hablar(self):
        return "¡Guau!"

class Gato:
    def hablar(self):
        return "¡Miau!"

class Vaca:
    def hablar(self):
        return "¡Muuu!"

# Función que no necesita saber de qué clase es el objeto.
# Solo necesita que el objeto tenga un método 'hablar'.
def hacer_sonido(animal):
    print(animal.hablar())

# Creamos una lista de diferentes animales
animales = [Perro(), Gato(), Vaca()]

# Iteramos y llamamos al mismo método en diferentes objetos
for animal in animales:
    hacer_sonido(animal)

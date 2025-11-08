# Unidad 2: Nivel Intermedio
# Clase 4: Módulos y Paquetes

# Un módulo es un archivo .py que contiene código Python.
# Se pueden importar para usar sus funciones, clases, etc.

# Python tiene muchos módulos integrados.
import math

print(f"El valor de Pi es: {math.pi}")
print(f"La raíz cuadrada de 16 es: {math.sqrt(16)}")

# También se pueden importar funciones específicas.
from random import randint, choice

numero_aleatorio = randint(1, 10)
print(f"\nNúmero aleatorio entre 1 y 10: {numero_aleatorio}")

frutas = ["manzana", "banana", "cereza"]
fruta_aleatoria = choice(frutas)
print(f"Fruta aleatoria de la lista: {fruta_aleatoria}")

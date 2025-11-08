# Unidad 1: Nivel Básico
# Clase 10: Funciones

# Las funciones son bloques de código reutilizables.
def saludar(nombre):
    """Esta función imprime un saludo personalizado."""
    print(f"¡Hola, {nombre}! Bienvenido.")

# Llamar a la función
saludar("Ana")
saludar("Pedro")

# Función que devuelve un valor
def sumar(a, b):
    return a + b

resultado = sumar(5, 3)
print(f"El resultado de la suma es: {resultado}")

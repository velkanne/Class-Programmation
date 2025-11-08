# Unidad 3: Nivel Avanzado
# Clase 1: Decoradores

# Un decorador es una función que toma otra función y extiende su comportamiento
# sin modificarla explícitamente.

def mi_decorador(funcion):
    def wrapper():
        print("Algo antes de que la función se ejecute.")
        funcion()
        print("Algo después de que la función se ejecute.")
    return wrapper

@mi_decorador
def saludar():
    print("¡Hola desde la función!")

# Llamar a la función decorada
saludar()

# Unidad 2: Nivel Intermedio
# Clase 1: Funciones Avanzadas (*args, **kwargs)

# *args permite pasar un número variable de argumentos posicionales a una función.
def sumar_todos(*numeros):
    print(f"Argumentos recibidos en *args: {numeros}")
    return sum(numeros)

print(f"Suma con *args: {sumar_todos(1, 2, 3, 4, 5)}")

# **kwargs permite pasar un número variable de argumentos con nombre.
def mostrar_info(**datos):
    print("\nArgumentos recibidos en **kwargs:")
    for clave, valor in datos.items():
        print(f"{clave}: {valor}")

mostrar_info(nombre="Ana", edad=28, ciudad="Barcelona")

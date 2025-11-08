# Unidad 1: Nivel Básico
# Clase 4: Entrada de Usuario

# La función input() permite al usuario ingresar datos.
nombre = input("¿Cuál es tu nombre? ")
print(f"Hola, {nombre}!")

# input() siempre devuelve una cadena, hay que convertirla si queremos un número.
edad_str = input("¿Cuántos años tienes? ")
edad_num = int(edad_str)
print(f"El próximo año tendrás {edad_num + 1} años.")

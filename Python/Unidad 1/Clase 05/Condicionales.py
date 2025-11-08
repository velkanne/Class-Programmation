# Unidad 1: Nivel Básico
# Clase 5: Condicionales (if, elif, else)

# Permiten ejecutar código solo si se cumple una condición.
edad = int(input("Ingresa tu edad: "))

if edad >= 18:
    print("Eres mayor de edad.")
elif edad > 12:
    print("Eres un adolescente.")
else:
    print("Eres un niño.")

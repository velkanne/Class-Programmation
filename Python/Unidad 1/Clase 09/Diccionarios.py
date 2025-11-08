# Unidad 1: Nivel Básico
# Clase 9: Diccionarios

# Los diccionarios almacenan datos en pares clave-valor.
persona = {
    "nombre": "Carlos",
    "edad": 30,
    "ciudad": "Madrid"
}

print(f"Diccionario: {persona}")

# Acceder a un valor por su clave
print(f"Nombre: {persona['nombre']}")

# Añadir un nuevo par
persona["profesion"] = "Ingeniero"
print(f"Diccionario modificado: {persona}")

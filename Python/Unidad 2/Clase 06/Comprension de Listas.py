# Unidad 2: Nivel Intermedio
# Clase 6: Comprensión de Listas

# Es una forma concisa de crear listas.
# Forma tradicional:
cuadrados = []
for i in range(10):
    cuadrados.append(i**2)
print(f"Lista creada con bucle for: {cuadrados}")

# Usando comprensión de listas:
cuadrados_comp = [i**2 for i in range(10)]
print(f"Lista creada con comprensión: {cuadrados_comp}")

# También se pueden añadir condiciones.
# Obtener los números pares al cuadrado.
pares_cuadrado = [i**2 for i in range(10) if i % 2 == 0]
print(f"Pares al cuadrado: {pares_cuadrado}")

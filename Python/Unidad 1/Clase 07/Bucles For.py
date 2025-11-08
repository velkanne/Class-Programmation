# Unidad 1: Nivel Básico
# Clase 7: Bucles 'for'

# El bucle 'for' itera sobre una secuencia (como una lista).
frutas = ["manzana", "banana", "cereza"]

print("Mis frutas favoritas son:")
for fruta in frutas:
    print(f"- {fruta}")

# También se puede usar con range() para repetir algo un número de veces.
print("\nContando hasta 3:")
for i in range(1, 4):
    print(i)

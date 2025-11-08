# Unidad 2: Nivel Intermedio
# Clase 7: Funciones Lambda

# Son pequeñas funciones anónimas.
# Se definen con la palabra clave 'lambda'.
# Sintaxis: lambda argumentos: expresion

# Función normal
def duplicar(n):
    return n * 2

# Función lambda equivalente
duplicar_lambda = lambda n: n * 2

print(f"Con función normal: {duplicar(5)}")
print(f"Con función lambda: {duplicar_lambda(5)}")

# Son muy útiles para funciones que requieren otra función como argumento, como 'sorted'.
puntos = [(1, 2), (4, 1), (5, 4), (2, 3)]
# Ordenar por el segundo elemento de cada tupla
puntos_ordenados = sorted(puntos, key=lambda punto: punto[1])
print(f"\nPuntos ordenados por el segundo valor: {puntos_ordenados}")

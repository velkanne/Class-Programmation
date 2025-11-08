# Unidad 3: Nivel Avanzado
# Clase 2: Generadores

# Los generadores son una forma sencilla de crear iteradores.
# Usan la palabra clave 'yield' para devolver datos uno a la vez,
# pausando su estado hasta la siguiente llamada. Son eficientes con la memoria.

def contador_hasta(maximo):
    n = 1
    while n <= maximo:
        yield n
        n += 1

# Crear un generador
mi_generador = contador_hasta(5)

print("Usando el generador:")
# Iterar sobre el generador
for numero in mi_generador:
    print(numero)

# Los generadores se agotan después de usarse una vez.
print("\nIntentando usar el generador de nuevo:")
for numero in mi_generador:
    print(numero) # No imprimirá nada

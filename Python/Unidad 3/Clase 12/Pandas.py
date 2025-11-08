# Unidad 3: Nivel Avanzado
# Clase 12: Introducción a Pandas

# Pandas es una librería fundamental para la manipulación y análisis de datos.
# Primero, necesitas instalarla: pip install pandas
import pandas as pd

# Crear un DataFrame (una tabla de datos) a partir de un diccionario
datos = {
    'Nombre': ['Ana', 'Luis', 'Marta', 'Juan'],
    'Edad': [28, 34, 29, 42],
    'Ciudad': ['Madrid', 'Barcelona', 'Madrid', 'Valencia']
}
df = pd.DataFrame(datos)

print("DataFrame original:")
print(df)

# Mostrar solo las personas mayores de 30 años
print("\nPersonas mayores de 30:")
print(df[df['Edad'] > 30])

# Agrupar por ciudad y contar cuántas personas hay en cada una
print("\nNúmero de personas por ciudad:")
print(df.groupby('Ciudad').size())

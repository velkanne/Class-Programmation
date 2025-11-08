# Unidad 1: Nivel Básico
# Clase 12: Manejo Básico de Archivos

# Escribir en un archivo
# 'w' significa modo escritura (write). Si el archivo existe, lo sobrescribe.
with open("mi_archivo.txt", "w") as archivo:
    archivo.write("Esta es la primera línea.\n")
    archivo.write("Esta es la segunda línea.\n")

print("Archivo 'mi_archivo.txt' creado y escrito.")

# Leer de un archivo
# 'r' significa modo lectura (read).
with open("mi_archivo.txt", "r") as archivo:
    contenido = archivo.read()
    print("\nContenido del archivo:")
    print(contenido)

# Unidad 2: Nivel Intermedio
# Clase 11: Formateo de Cadenas Avanzado

# f-strings (la forma moderna y preferida)
nombre = "Alice"
edad = 30
print(f"1. f-string: {nombre} tiene {edad} años.")

# Se pueden incluir expresiones
print(f"El doble de la edad es {edad * 2}.")

# Método .format()
print("2. .format(): {} tiene {} años.".format(nombre, edad))
print("2. .format() con índices: {1} años tiene {0}.".format(nombre, edad))
print("2. .format() con nombres: {n} tiene {a} años.".format(n=nombre, a=edad))

# Operador % (estilo antiguo, menos flexible)
print("3. Operador %%: %s tiene %d años." % (nombre, edad))

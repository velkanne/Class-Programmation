# Unidad 2: Nivel Intermedio
# Clase 12: Trabajar con Fechas y Horas

import datetime

# Fecha y hora actual
ahora = datetime.datetime.now()
print(f"Ahora: {ahora}")

# Fecha actual
hoy = datetime.date.today()
print(f"Hoy: {hoy}")

# Crear una fecha específica
fecha_especifica = datetime.date(2025, 12, 25)
print(f"Fecha específica: {fecha_especifica}")

# Formatear fechas a cadenas (strftime)
print(f"Formato A: {ahora.strftime('%d/%m/%Y %H:%M:%S')}")
print(f"Formato B: {ahora.strftime('%A, %d de %B de %Y')}")

# Convertir cadenas a fechas (strptime)
cadena_fecha = "31/12/2024"
fecha_desde_cadena = datetime.datetime.strptime(cadena_fecha, "%d/%m/%Y").date()
print(f"Fecha desde cadena: {fecha_desde_cadena}")

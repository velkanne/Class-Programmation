# Unidad 3: Nivel Avanzado
# Clase 10: Data Classes

from dataclasses import dataclass

# Data Classes (disponibles desde Python 3.7) son una forma concisa
# de crear clases que principalmente almacenan datos.
# Automáticamente generan métodos como __init__, __repr__, __eq__, etc.

@dataclass
class Persona:
    nombre: str
    edad: int
    ciudad: str
    es_estudiante: bool = False # Valor por defecto

# Creación de una instancia (no necesitas escribir __init__)
p1 = Persona("Laura", 25, "Valencia")
p2 = Persona("Laura", 25, "Valencia")
p3 = Persona("Carlos", 40, "Bilbao", es_estudiante=True)

# La representación es útil y legible (__repr__ automático)
print(p1)
print(p3)

# La comparación funciona como se espera (__eq__ automático)
print(f"\n¿p1 es igual a p2? {p1 == p2}")

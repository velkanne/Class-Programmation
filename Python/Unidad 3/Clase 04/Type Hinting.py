# Unidad 3: Nivel Avanzado
# Clase 4: Type Hinting (Tipado Estático)

# Python es de tipado dinámico, pero podemos añadir "pistas" de tipos.
# Esto no afecta la ejecución, pero ayuda a la legibilidad y a herramientas
# de análisis estático como mypy a encontrar errores.

def saludar(nombre: str) -> str:
    """
    Toma un nombre como string y devuelve un saludo como string.
    """
    return f"Hola, {nombre}"

def sumar(a: int, b: int) -> int:
    return a + b

# Uso correcto
saludo: str = saludar("Mundo")
resultado: int = sumar(5, 10)

print(saludo)
print(resultado)

# Uso incorrecto (Python lo ejecuta, pero mypy daría un error)
# resultado_incorrecto = sumar("hola", "mundo")
# print(resultado_incorrecto)

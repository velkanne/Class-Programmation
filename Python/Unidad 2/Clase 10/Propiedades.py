# Unidad 2: Nivel Intermedio
# Clase 10: Propiedades (getters y setters)

class Empleado:
    def __init__(self, nombre, salario):
        self._nombre = nombre  # Atributo "privado" por convención (guion bajo)
        self._salario = salario

    # Getter para el salario
    @property
    def salario(self):
        return self._salario

    # Setter para el salario
    @salario.setter
    def salario(self, nuevo_salario):
        if nuevo_salario < 0:
            raise ValueError("El salario no puede ser negativo.")
        self._salario = nuevo_salario

    # Getter para el nombre (solo lectura)
    @property
    def nombre(self):
        return self._nombre

emp = Empleado("Juan", 30000)

# Usamos el getter como si fuera un atributo
print(f"Salario inicial: {emp.salario}")

# Usamos el setter
emp.salario = 35000
print(f"Salario nuevo: {emp.salario}")

# Intentar asignar un valor inválido
try:
    emp.salario = -500
except ValueError as e:
    print(f"Error: {e}")

# Intentar cambiar el nombre (no hay setter, dará error)
try:
    emp.nombre = "Pedro"
except AttributeError as e:
    print(f"Error al intentar cambiar el nombre: {e}")

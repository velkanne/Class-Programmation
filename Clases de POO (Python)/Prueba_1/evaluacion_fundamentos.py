# Prueba 1: Fundamentos de POO y Herencia
# Ejercicio: Sistema de Gestión de Empleados

# --- Objetivo ---
# Poner en práctica los conceptos de clases, objetos, encapsulamiento, herencia y polimorfismo
# para crear un sistema simple que gestione diferentes tipos de empleados en una empresa.

# --- Requisitos ---
# 1.  Crear una clase base `Empleado` con atributos para nombre, ID y salario base.
#     - Debe tener un método para mostrar su información.
#     - Debe tener un método para calcular su salario mensual (que por defecto es el salario base).
# 2.  Crear una clase `Gerente` que herede de `Empleado`.
#     - Añadir un atributo para un bono de gestión.
#     - Sobrescribir el método de cálculo de salario para incluir el bono.
#     - Sobrescribir el método de mostrar información para añadir su rol.
# 3.  Crear una clase `Programador` que herede de `Empleado`.
#     - Añadir atributos para horas extra trabajadas y el pago por hora extra.
#     - Sobrescribir el método de cálculo de salario para incluir el pago de horas extra.
#     - Sobrescribir el método de mostrar información para añadir su rol y horas trabajadas.
# 4.  Crear una clase `Departamento` que utilice composición.
#     - Debe tener un nombre y una lista de empleados.
#     - Debe tener un método para agregar empleados.
#     - Debe tener un método para calcular el gasto salarial total del departamento en un mes.
#     - Debe tener un método para mostrar todos los empleados del departamento.

# --- Implementación ---

# 1. Clase Base
class Empleado:
    """Clase base que representa a un empleado genérico."""
    def __init__(self, nombre, id_empleado, salario_base):
        self._nombre = nombre
        self._id_empleado = id_empleado
        self._salario_base = salario_base

    def calcular_salario(self):
        """Calcula el salario total del empleado. Para un empleado base, es solo su salario base."""
        return self._salario_base

    def mostrar_info(self):
        """Devuelve una cadena con la información básica del empleado."""
        return f"ID: {self._id_empleado} | Nombre: {self._nombre} | Salario Base: ${self._salario_base:,\.2f}"

    def __str__(self):
        # Usamos __str__ para que al imprimir el objeto se vea la información.
        return self.mostrar_info()

# 2. Clase Hija: Gerente
class Gerente(Empleado):
    """Representa a un empleado con rol de Gerente."""
    def __init__(self, nombre, id_empleado, salario_base, bono_gestion):
        # Llamamos al constructor de la clase padre para inicializar los atributos comunes.
        super().__init__(nombre, id_empleado, salario_base)
        self._bono_gestion = bono_gestion

    def calcular_salario(self):
        """Sobrescribe el cálculo para añadir el bono de gestión."""
        salario_base = super().calcular_salario()
        return salario_base + self._bono_gestion

    def mostrar_info(self):
        """Sobrescribe la información para añadir el rol y el bono."""
        info_base = super().mostrar_info()
        return f"[Gerente] {info_base} | Bono: ${self._bono_gestion:,\.2f}"

# 3. Clase Hija: Programador
class Programador(Empleado):
    """Representa a un empleado con rol de Programador."""
    def __init__(self, nombre, id_empleado, salario_base, horas_extra, pago_por_hora):
        super().__init__(nombre, id_empleado, salario_base)
        self._horas_extra = horas_extra
        self._pago_por_hora = pago_por_hora

    def calcular_salario(self):
        """Sobrescribe el cálculo para añadir el pago por horas extra."""
        salario_base = super().calcular_salario()
        pago_extra = self._horas_extra * self._pago_por_hora
        return salario_base + pago_extra

    def mostrar_info(self):
        """Sobrescribe la información para añadir el rol y los detalles de horas extra."""
        info_base = super().mostrar_info()
        return f"[Programador] {info_base} | Horas Extra: {self._horas_extra} | Pago/Hora: ${self._pago_por_hora}"

# 4. Clase que usa Composición
class Departamento:
    """Representa un departamento que contiene una lista de empleados."""
    def __init__(self, nombre):
        self._nombre = nombre
        self._empleados = [] # Composición: El departamento TIENE UNA lista de empleados.

    def agregar_empleado(self, empleado):
        if isinstance(empleado, Empleado):
            self._empleados.append(empleado)
            print(f"{empleado._nombre} ha sido añadido al departamento de {self._nombre}.")
        else:
            print("Error: Solo se pueden añadir objetos de tipo Empleado.")

    def calcular_gasto_salarial_mensual(self):
        """Calcula el costo total de salarios para el departamento (Polimorfismo)."""
        total = 0
        for empleado in self._empleados:
            # --- Polimorfismo en acción ---
            # No necesitamos saber si el empleado es Gerente o Programador.
            # Simplemente llamamos a `calcular_salario()` y Python ejecuta la versión correcta.
            total += empleado.calcular_salario()
        return total

    def mostrar_empleados(self):
        print("\n" + "-"*20 + f" Empleados del Departamento de {self._nombre} " + "-"*20)
        for empleado in self._empleados:
            print(empleado.mostrar_info())
            print(f" -> Salario Total del Mes: ${empleado.calcular_salario():,.2f}")
        print("-"*70)

# --- Simulación ---

# Crear empleados de diferentes tipos
emp1 = Gerente("Ana García", "G001", 90000, 20000)
emp2 = Programador("Juan Martínez", "P001", 60000, 10, 50) # 10 horas extra a $50/hora
emp3 = Programador("Laura Sánchez", "P002", 65000, 5, 55)
emp4 = Empleado("Carlos Pérez", "E001", 40000) # Empleado base

# Crear un departamento y agregarle los empleados
departamento_ti = Departamento("Tecnologías de la Información")
departamento_ti.agregar_empleado(emp1)
departamento_ti.agregar_empleado(emp2)
departamento_ti.agregar_empleado(emp3)
departamento_ti.agregar_empleado(emp4)

# Mostrar la información del departamento
departamento_ti.mostrar_empleados()

# Calcular y mostrar el gasto total del departamento
gasto_total = departamento_ti.calcular_gasto_salarial_mensual()
print(f"\nGasto Salarial Total para el Dpto. de {departamento_ti._nombre}: ${gasto_total:,\.2f}")

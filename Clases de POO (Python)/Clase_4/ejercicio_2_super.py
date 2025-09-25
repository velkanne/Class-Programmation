# Clase 4: Herencia
# Ejercicio 2: Extender la Funcionalidad con super()

# --- Explicación ---
# A menudo, cuando sobrescribes un método de la clase padre, no quieres reemplazarlo por completo,
# sino más bien AÑADIRLE funcionalidad.
#
# La función `super()` nos da una forma de llamar a los métodos de la clase padre (la superclase).
# Es especialmente útil y común usar `super().__init__()` dentro del `__init__` de la clase hija.
# Esto asegura que la lógica de inicialización del padre se ejecute, y luego la hija puede
# añadir su propia lógica de inicialización.

# --- Clase Padre (Superclase) ---
class Empleado:
    def __init__(self, nombre, id_empleado, salario_base):
        print(f"(INIT Padre) Inicializando datos base para {nombre}.")
        self.nombre = nombre
        self.id_empleado = id_empleado
        self.salario_base = salario_base

    def calcular_salario(self):
        # Lógica de cálculo de salario base
        return self.salario_base

    def mostrar_info(self):
        return f"Empleado: {self.nombre} (ID: {self.id_empleado})\nSalario Base: ${self.salario_base:, .2f}"


# --- Clase Hija (Subclase) ---
class Gerente(Empleado):
    # El Gerente es un tipo de Empleado, pero con atributos y métodos adicionales.
    def __init__(self, nombre, id_empleado, salario_base, bonus_anual):
        print(f"(INIT Hija) Inicializando Gerente: {nombre}.")
        # --- Uso de super() para llamar al __init__ del padre ---
        # Le pasamos los argumentos que el constructor del padre necesita.
        # Esto se encarga de inicializar self.nombre, self.id_empleado y self.salario_base.
        super().__init__(nombre, id_empleado, salario_base)

        # Ahora, añadimos el atributo específico del Gerente.
        print(f"(INIT Hija) Añadiendo atributos específicos del gerente.")
        self.bonus_anual = bonus_anual

    # --- Sobrescritura y extensión de un método ---
    def calcular_salario(self):
        # Primero, obtenemos el salario base llamando al método del padre con super().
        salario_padre = super().calcular_salario()
        # Luego, añadimos la lógica específica de la clase hija.
        salario_total = salario_padre + self.bonus_anual
        return salario_total

    # --- Sobrescritura y extensión de otro método ---
    def mostrar_info(self):
        # Reutilizamos la información base del método del padre.
        info_padre = super().mostrar_info()
        # Y le añadimos la información específica del gerente.
        return f"{info_padre}\nBonus Anual: ${self.bonus_anual:, .2f}\nRol: Gerente"


# --- Creación de Objetos ---
print("--- Creando un Empleado regular ---")
emp = Empleado("Carlos Ruiz", "E123", 50000)
print("\n--- Creando un Gerente ---")
ger = Gerente("Ana López", "G456", 80000, 15000)


# --- Interacción con los Objetos ---
print("\n" + "-"*20)
print("Información del Empleado:")
print(emp.mostrar_info())
print(f"Salario Calculado: ${emp.calcular_salario():,.2f}")

print("\n" + "-"*20)
print("Información del Gerente:")
print(ger.mostrar_info())
print(f"Salario Calculado: ${ger.calcular_salario():,.2f}")

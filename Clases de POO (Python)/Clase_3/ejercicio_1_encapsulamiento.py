# Clase 3: Encapsulamiento
# Ejercicio 1: Atributos Privados y Getters/Setters

# --- Explicación ---
# El encapsulamiento es uno of the pilares de la POO. Consiste en agrupar datos (atributos)
# y los métodos que operan sobre esos datos dentro de una misma unidad (la clase).
#
# Una parte clave del encapsulamiento es el "ocultamiento de la información".
# La idea es restringir el acceso directo a los atributos desde fuera de la clase.
# En su lugar, se proporcionan métodos públicos (getters y setters) para acceder y modificar esos datos.
#
# Ventajas:
# 1.  **Control**: Puedes añadir lógica de validación antes de cambiar un valor.
# 2.  **Seguridad**: Evitas modificaciones accidentales o incorrectas de los datos.
# 3.  **Flexibilidad**: Puedes cambiar la implementación interna de la clase sin que afecte al código que la utiliza.

# --- Convención en Python ---
# Python no tiene un modificador "private" estricto como otros lenguajes (Java, C++).
# En su lugar, usa una convención: un guion bajo inicial (`_`) sugiere que un atributo es "protegido"
# y no debería ser modificado directamente. Un doble guion bajo (`__`) activa un mecanismo llamado
# "name mangling", que hace más difícil acceder al atributo desde fuera.

class CuentaBancaria:
    def __init__(self, titular, saldo_inicial):
        self.titular = titular # Atributo público, no hay problema en accederlo directamente.
        self.__saldo = saldo_inicial # Atributo "privado" con doble guion bajo.
        self.__activa = True

    # --- Getter ---
    # Un método público para OBTENER el valor de un atributo privado.
    def get_saldo(self):
        """Devuelve el saldo actual de la cuenta."""
        if not self.__activa:
            print("Error: La cuenta está inactiva.")
            return None
        return self.__saldo

    # --- Setter ---
    # Un método público para ESTABLECER el valor de un atributo privado, con validación.
    def depositar(self, cantidad):
        """Deposita una cantidad en la cuenta."""
        if not self.__activa:
            print("Error: No se puede depositar en una cuenta inactiva.")
            return

        if cantidad > 0:
            self.__saldo += cantidad
            print(f"Depósito exitoso. Nuevo saldo: ${self.__saldo:.2f}")
        else:
            print("Error: La cantidad a depositar debe ser positiva.")

    def retirar(self, cantidad):
        """Retira una cantidad de la cuenta."""
        if not self.__activa:
            print("Error: No se puede retirar de una cuenta inactiva.")
            return

        if 0 < cantidad <= self.__saldo:
            self.__saldo -= cantidad
            print(f"Retiro exitoso. Saldo restante: ${self.__saldo:.2f}")
        else:
            print("Error: Cantidad inválida o fondos insuficientes.")

    def desactivar_cuenta(self):
        self.__activa = False
        print("La cuenta ha sido desactivada.")

# --- Creación de un Objeto ---
mi_cuenta = CuentaBancaria("Juan Pérez", 1000.00)

# --- Interacción Correcta (usando métodos públicos) ---
print("--- Operaciones Bancarias ---")
print(f"Titular de la cuenta: {mi_cuenta.titular}")

# Obtenemos el saldo usando el getter
saldo_actual = mi_cuenta.get_saldo()
if saldo_actual is not None:
    print(f"Saldo inicial: ${saldo_actual:.2f}")

# Usamos los setters (métodos de modificación)
mi_cuenta.depositar(500.50)
mi_cuenta.retirar(200.00)
mi_cuenta.depositar(-50) # Intentamos depositar una cantidad negativa (fallará)
mi_cuenta.retirar(2000.00) # Intentamos retirar más de lo que hay (fallará)

print(f"Saldo final: ${mi_cuenta.get_saldo():.2f}")

# --- Intento de Acceso Incorrecto ---
print("\n--- Intentando acceder a atributos privados ---")
# Intentar acceder directamente a `__saldo` dará un error (AttributeError).
# Esto se debe al "name mangling". Python cambia el nombre internamente a `_CuentaBancaria__saldo`.
try:
    print(mi_cuenta.__saldo)
except AttributeError as e:
    print(f"Error al intentar acceder a `__saldo`: {e}")

# Aunque es posible accederlo si conoces el nombre "mangled", NO DEBES HACERLO.
# Rompe el principio de encapsulamiento.
print("Acceso no recomendado (pero posible):", mi_cuenta._CuentaBancaria__saldo)

# Modificarlo directamente es una mala práctica, ya que se salta toda la lógica de validación.
mi_cuenta._CuentaBancaria__saldo = -5000
print("Saldo modificado directamente (mala práctica):", mi_cuenta.get_saldo())

# Probando la lógica de la cuenta inactiva
print("\n--- Probando cuenta inactiva ---")
mi_cuenta.desactivar_cuenta()
mi_cuenta.depositar(100)
mi_cuenta.retirar(50)
print("Saldo final: ", mi_cuenta.get_saldo())

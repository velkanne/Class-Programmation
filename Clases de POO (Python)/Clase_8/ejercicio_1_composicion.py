# Clase 8: Composición sobre Herencia

# --- Explicación ---
# "Composición sobre herencia" es un principio de diseño de POO que recomienda favorecer
# la composición en lugar de la herencia cuando se modelan las relaciones entre objetos.
#
# - **Herencia (relación "ES UN")**: Una clase hija hereda de una padre. Crea una jerarquía fuerte.
#   Ej: Un `Gerente` ES UN `Empleado`. La herencia es apropiada aquí.
#
# - **Composición (relación "TIENE UN")**: Una clase contiene una instancia de otra clase.
#   Ej: Un `Coche` TIENE UN `Motor`. El coche no es un motor, sino que está compuesto por uno.
#
# ¿Por qué favorecer la composición?
# 1.  **Flexibilidad**: Es más fácil cambiar las "partes" de un objeto en tiempo de ejecución.
#     Un coche podría cambiar de motor.
# 2.  **Encapsulamiento Fuerte**: La clase contenedora no expone los detalles de las clases contenidas.
#     El `Coche` usa el `Motor`, pero el código exterior no necesita interactuar directamente con el `Motor`.
# 3.  **Evita Jerarquías Complejas**: La herencia múltiple o jerarquías muy profundas pueden volverse
#     frágiles y difíciles de mantener. La composición mantiene las clases más simples e independientes.

# --- Clases Componente ---
# Estas son las "partes" que usaremos para construir un objeto más complejo.

class Motor:
    def __init__(self, tipo, caballos_fuerza):
        self.tipo = tipo
        self.caballos_fuerza = caballos_fuerza
        self.encendido = False

    def arrancar(self):
        if not self.encendido:
            print(f"Motor {self.tipo} arrancando... ¡Rugen los {self.caballos_fuerza} CV!")
            self.encendido = True
        else:
            print("El motor ya está encendido.")

    def apagar(self):
        if self.encendido:
            print("El motor se apaga.")
            self.encendido = False

class Rueda:
    def __init__(self, posicion):
        self.posicion = posicion

    def __str__(self):
        return f"Rueda ({self.posicion})"


# --- Clase Contenedora (usando Composición) ---
# La clase Coche no hereda de Motor, sino que TIENE un objeto Motor.

class Coche:
    def __init__(self, marca, modelo, tipo_motor, cv_motor):
        self.marca = marca
        self.modelo = modelo
        # --- Composición: El Coche crea y posee su propio objeto Motor ---
        self.motor = Motor(tipo_motor, cv_motor)
        # --- Composición con múltiples objetos ---
        self.ruedas = [
            Rueda("delantera izquierda"),
            Rueda("delantera derecha"),
            Rueda("trasera izquierda"),
            Rueda("trasera derecha")
        ]
        print(f"Se ha fabricado un {self.marca} {self.modelo}.")

    # --- Delegación de Métodos ---
    # La clase Coche "delega" la acción de arrancar a su componente motor.
    def arrancar_coche(self):
        print(f"Girando la llave del {self.marca}...")
        self.motor.arrancar()

    def apagar_coche(self):
        print(f"Apagando el {self.marca}...")
        self.motor.apagar()

    def describir(self):
        estado_motor = "encendido" if self.motor.encendido else "apagado"
        print(f"--- Ficha del Coche ---")
        print(f"Modelo: {self.marca} {self.modelo}")
        print(f"Motor: {self.motor.tipo} de {self.motor.caballos_fuerza} CV (Estado: {estado_motor})")
        print(f"Ruedas: {len(self.ruedas)} instaladas.")


# --- Creación y uso del objeto compuesto ---

# Al crear el Coche, este a su vez crea su propio Motor internamente.
mi_coche = Coche("Ferrari", "F8 Tributo", "V8 Turbo", 720)

print("\n--- Interactuando con el coche ---")
mi_coche.describir()
mi_coche.arrancar_coche() # El coche delega esta tarea a su motor
mi_coche.describir()
mi_coche.apagar_coche()

# No necesitamos (y no deberíamos) interactuar directamente con el motor desde fuera.
# El coche se encarga de gestionarlo.
# mi_coche.motor.arrancar() # Esto rompe el encapsulamiento, es mejor usar `mi_coche.arrancar_coche()`

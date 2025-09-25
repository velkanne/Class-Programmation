# Clase 1: Introducción a la Programación Orientada a Objetos (POO)
# Ejercicio 1: Clases y Objetos

# --- Explicación ---
# Una "clase" es como un plano o un molde para crear "objetos".
# Define las propiedades (atributos) y comportamientos (métodos) que tendrán los objetos de ese tipo.
# Un "objeto" es una instancia de una clase. Es una entidad concreta creada a partir del plano.

# --- Definición de la Clase ---
# Usamos la palabra clave "class" para definir una nueva clase.
# Por convención, los nombres de las clases en Python comienzan con una letra mayúscula (CamelCase).
class Coche:
    # El método __init__ es un método especial llamado "constructor".
    # Se ejecuta automáticamente cuando se crea un nuevo objeto (instancia) de la clase.
    # "self" se refiere al objeto que se está creando. Permite acceder a sus propios atributos y métodos.
    def __init__(self, marca, modelo, anio):
        # --- Atributos ---
        # Los atributos son variables que pertenecen a un objeto. Almacenan datos.
        # Aquí, asignamos los valores recibidos a los atributos del objeto.
        print(f"Creando un nuevo coche: {marca} {modelo}")
        self.marca = marca
        self.modelo = modelo
        self.anio = anio
        self.encendido = False # Por defecto, el coche está apagado

    # --- Métodos ---
    # Los métodos son funciones que pertenecen a una clase. Definen el comportamiento del objeto.
    def arrancar(self):
        if not self.encendido:
            self.encendido = True
            print(f"El {self.marca} {self.modelo} ha arrancado. ¡Vrum vrum!")
        else:
            print(f"El {self.marca} {self.modelo} ya estaba en marcha.")

    def apagar(self):
        if self.encendido:
            self.encendido = False
            print(f"El {self.marca} {self.modelo} se ha apagado.")
        else:
            print("El coche ya estaba apagado.")

    def describir(self):
        # Este método muestra la información del coche.
        estado = "encendido" if self.encendido else "apagado"
        print(f"Coche: {self.marca} {self.modelo} del año {self.anio}. Estado: {estado}.")


# --- Creación de Objetos (Instanciación) ---
# Ahora que tenemos el plano (la clase Coche), podemos crear objetos concretos.
# Cada objeto es una "instancia" independiente de la clase.

print("--- Creando nuestro primer objeto ---")
mi_coche = Coche("Toyota", "Corolla", 2021)

print("--- Creando un segundo objeto ---")
coche_de_ana = Coche("Ford", "Mustang", 1968)


# --- Interacción con los Objetos ---
# Podemos acceder a los atributos y llamar a los métodos de cada objeto usando la notación de punto (.).

print("--- Interactuando con mi_coche ---")
mi_coche.describir()  # Imprime la descripción inicial
mi_coche.arrancar()   # Llama al método para arrancar
mi_coche.describir()  # Vemos que el estado ha cambiado
mi_coche.apagar()     # Apagamos el coche

print("--- Interactuando con coche_de_ana ---")
coche_de_ana.describir()
coche_de_ana.arrancar()
coche_de_ana.arrancar() # Intentamos arrancarlo de nuevo
coche_de_ana.apagar()

# Observa que las acciones en `mi_coche` no afectan a `coche_de_ana`. Son objetos independientes.

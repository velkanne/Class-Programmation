# Unidad 3: Nivel Avanzado
# Clase 3: Context Managers (with)

# El 'Context Manager' es un objeto que define un contexto para un bloque de código.
# La declaración 'with' asegura que el código de limpieza se ejecute siempre.
# Es muy común para manejar archivos o conexiones de red.

# Ya lo hemos usado sin saberlo:
with open("ejemplo.txt", "w") as f:
    f.write("Hola, mundo.")
# Al salir del bloque 'with', el archivo se cierra automáticamente, incluso si ocurren errores.

# Creando nuestro propio Context Manager
class MiContexto:
    def __enter__(self):
        print("Entrando en el contexto...")
        return self # El valor que se asigna a la variable en 'as'

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Saliendo del contexto...")
        # Aquí se manejarían las excepciones si las hubiera
        # Si devuelve True, la excepción se suprime.

with MiContexto() as ctx:
    print("Dentro del contexto.")

# Unidad 2: Nivel Intermedio
# Clase 9: Métodos de Clase y Métodos Estáticos

class MiClase:
    variable_clase = "Soy una variable de la clase"

    def __init__(self, variable_instancia):
        self.variable_instancia = variable_instancia

    # Método de instancia: necesita 'self' para acceder a la instancia.
    def metodo_instancia(self):
        return f"Desde la instancia: {self.variable_instancia}"

    # Método de clase: necesita 'cls' para acceder a la clase.
    @classmethod
    def metodo_clase(cls):
        return f"Desde la clase: {cls.variable_clase}"

    # Método estático: no necesita 'self' ni 'cls'. Es como una función normal dentro de la clase.
    @staticmethod
    def metodo_estatico():
        return "Soy un método estático, no dependo de la clase ni de la instancia."

# Uso
obj = MiClase("Soy una variable de instancia")
print(obj.metodo_instancia())
print(MiClase.metodo_clase()) # Se puede llamar desde la clase
print(obj.metodo_clase())     # O desde la instancia
print(MiClase.metodo_estatico())

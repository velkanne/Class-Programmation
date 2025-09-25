# Clase 5: Polimorfismo

# --- Explicación ---
# El polimorfismo (del griego "muchas formas") es la capacidad de objetos de diferentes clases
# para responder al mismo mensaje (la misma llamada de método) de maneras específicas para cada clase.
#
# En Python, esto se logra a través de un concepto llamado "Duck Typing" (Tipado de Pato).
# La idea es: "Si camina como un pato y grazna como un pato, entonces debe ser un pato".
#
# En lugar de verificar si un objeto es de un tipo específico (ej: `isinstance(obj, Perro)`), 
# simplemente asumimos que el objeto tiene los métodos que necesitamos y los llamamos.
# Si el objeto tiene el método, funcionará. Si no, fallará (lo cual es a menudo el comportamiento deseado).
#
# Esto permite escribir código muy flexible y desacoplado, donde una función puede operar
# con una gran variedad de objetos sin conocer sus clases concretas.

# --- Clases con una Interfaz Común ---
# Definimos varias clases que, aunque no están relacionadas por herencia directa (excepto por Documento), 
# todas tienen un método llamado `mostrar()`.

class Documento:
    def __init__(self, contenido):
        self.contenido = contenido

    def mostrar(self):
        raise NotImplementedError("La subclase debe implementar este método")

class ArchivoDeTexto(Documento):
    def mostrar(self):
        print("--- Mostrando Archivo de Texto ---")
        print(self.contenido)
        print("----------------------------------\n")

class HojaDeCalculo(Documento):
    def mostrar(self):
        print("--- Mostrando Hoja de Cálculo ---")
        # Simulamos una visualización en formato de tabla
        for i, linea in enumerate(self.contenido.split('\n')):
            celdas = linea.split(',')
            print(f"Fila {i+1}: | " + " | ".join(celda.strip() for celda in celdas) + " |")
        print("----------------------------------\n")

class Imagen:
    # Esta clase no hereda de Documento, pero sigue el "contrato" de tener un método `mostrar()`.
    def __init__(self, formato, resolucion):
        self.formato = formato
        self.resolucion = resolucion

    def mostrar(self):
        print("--- Mostrando Imagen ---")
        print(f"Formato: {self.formato}, Resolución: {self.resolucion}")
        print(" [ Simulando la visualización de una imagen... ]")
        print("------------------------\n")


# --- Función Polimórfica ---
# Esta función no se preocupa por el tipo de objeto que recibe.
# Solo le importa que el objeto tenga un método `mostrar()`.
def renderizar_documento(doc):
    print(f"Intentando renderizar un objeto de tipo: {type(doc).__name__}")
    doc.mostrar() # Aquí ocurre la magia del polimorfismo


# --- Creación de Objetos de Diferentes Clases ---
texto = ArchivoDeTexto("Este es un simple archivo de texto.\nContiene dos líneas.")

hoja_calculo_data = "Producto,Precio,Stock\nLaptop,1200,50\nMouse,25,200"
hoja_calculo = HojaDeCalculalo(hoja_calculo_data)

imagen = Imagen("PNG", "1920x1080")


# --- Demostración del Polimorfismo ---

# 1. Usando la función `renderizar_documento`
print("--- Demostración con una función polimórfica ---")
renderizar_documento(texto)
renderizar_documento(hoja_calculo)
renderizar_documento(imagen)


# 2. Usando una lista de objetos
# Podemos tener una colección de objetos heterogéneos y tratarlos de la misma manera.
print("\n--- Demostración con una lista de objetos ---")
documentos = [texto, imagen, hoja_calculo]

for doc in documentos:
    # No necesitamos saber qué tipo de documento es cada `doc`.
    # Solo llamamos a `mostrar()` y Python se encarga de ejecutar la versión correcta.
    doc.mostrar()

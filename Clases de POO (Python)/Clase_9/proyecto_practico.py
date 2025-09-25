# Clase 9: Mini-Proyecto Práctico - Sistema de Biblioteca

# --- Explicación ---
# Este proyecto integra la mayoría de los conceptos de POO que hemos visto:
# - **Clases y Objetos**: `Libro`, `Socio`, `Biblioteca`.
# - **Encapsulamiento**: Los atributos de las clases son privados (`_`) y se accede a ellos mediante métodos.
# - **Composición**: La `Biblioteca` TIENE UNA lista de `Libro`s y una lista de `Socio`s.
# - **Métodos**: Las clases tienen comportamientos claros (prestar, devolver, buscar, etc.).
# - **Métodos Especiales**: Usamos `__str__` para una representación legible de los objetos.

class Libro:
    """Representa un libro en la biblioteca."""
    def __init__(self, titulo, autor, isbn):
        self._titulo = titulo
        self._autor = autor
        self._isbn = isbn
        self._esta_prestado = False

    def __str__(self):
        estado = "Prestado" if self._esta_prestado else "Disponible"
        return f"'{self._titulo}' por {self._autor} (ISBN: {self._isbn}) - {estado}"

    def get_isbn(self):
        return self._isbn

    def get_titulo(self):
        return self._titulo

    def esta_prestado(self):
        return self._esta_prestado

    def prestar(self):
        if not self._esta_prestado:
            self._esta_prestado = True
            return True
        return False

    def devolver(self):
        if self._esta_prestado:
            self._esta_prestado = False
            return True
        return False

class Socio:
    """Representa a un miembro de la biblioteca."""
    def __init__(self, nombre, id_socio):
        self._nombre = nombre
        self._id_socio = id_socio
        self._libros_prestados = [] # Lista de ISBNs prestados

    def __str__(self):
        return f"Socio: {self._nombre} (ID: {self._id_socio}) - {len(self._libros_prestados)} libros prestados."

    def get_id_socio(self):
        return self._id_socio

    def tomar_prestado(self, isbn):
        self._libros_prestados.append(isbn)

    def devolver_libro(self, isbn):
        if isbn in self._libros_prestados:
            self._libros_prestados.remove(isbn)

class Biblioteca:
    """Gestiona la colección de libros y los socios."""
    def __init__(self, nombre):
        self._nombre = nombre
        self._catalogo = {} # Usamos un diccionario para búsqueda rápida por ISBN: {isbn: objeto Libro}
        self._socios = {}   # {id_socio: objeto Socio}

    def agregar_libro(self, libro):
        if libro.get_isbn() not in self._catalogo:
            self._catalogo[libro.get_isbn()] = libro
            print(f"Libro '{libro.get_titulo()}' añadido al catálogo.")
        else:
            print("Error: Ya existe un libro con ese ISBN.")

    def registrar_socio(self, socio):
        if socio.get_id_socio() not in self._socios:
            self._socios[socio.get_id_socio()] = socio
            print(f"Socio {socio._nombre} registrado.")
        else:
            print("Error: Ya existe un socio con ese ID.")

    def prestar_libro(self, isbn, id_socio):
        libro = self._catalogo.get(isbn)
        socio = self._socios.get(id_socio)

        if not libro:
            print(f"Error: No se encontró el libro con ISBN {isbn}.")
            return
        if not socio:
            print(f"Error: No se encontró el socio con ID {id_socio}.")
            return

        if libro.prestar(): # El método prestar del libro devuelve True si fue exitoso
            socio.tomar_prestado(isbn)
            print(f"Éxito: '{libro.get_titulo()}' ha sido prestado a {socio._nombre}.")
        else:
            print(f"Fallo: '{libro.get_titulo()}' ya está prestado.")

    def devolver_libro(self, isbn, id_socio):
        libro = self._catalogo.get(isbn)
        socio = self._socios.get(id_socio)

        if not libro or not socio:
            print("Error: Libro o socio no encontrado.")
            return

        if libro.devolver():
            socio.devolver_libro(isbn)
            print(f"Éxito: '{libro.get_titulo()}' ha sido devuelto por {socio._nombre}.")
        else:
            print(f"Fallo: El libro no constaba como prestado.")

    def mostrar_catalogo(self):
        print(f"\n--- Catálogo de la Biblioteca: {self._nombre} ---")
        if not self._catalogo:
            print("El catálogo está vacío.")
        for libro in self._catalogo.values():
            print(f"- {libro}")
        print("--------------------------------------------------")

# --- Simulación de la Biblioteca ---

# 1. Crear la biblioteca
biblioteca_central = Biblioteca("Municipal")

# 2. Crear y agregar libros
libro1 = Libro("Cien Años de Soledad", "Gabriel García Márquez", "978-0307350446")
libro2 = Libro("El Señor de los Anillos", "J.R.R. Tolkien", "978-0618640157")
libro3 = Libro("Don Quijote de la Mancha", "Miguel de Cervantes", "978-8420412146")

biblioteca_central.agregar_libro(libro1)
biblioteca_central.agregar_libro(libro2)
biblioteca_central.agregar_libro(libro3)

# 3. Crear y registrar socios
socio1 = Socio("Ana Torres", "S001")
socio2 = Socio("Luis Prado", "S002")
biblioteca_central.registrar_socio(socio1)
biblioteca_central.registrar_socio(socio2)

# 4. Mostrar estado inicial
biblioteca_central.mostrar_catalogo()

# 5. Realizar operaciones
print("\n--- Operaciones de Préstamo ---")
biblioteca_central.prestar_libro("978-0307350446", "S001") # Ana presta Cien Años de Soledad
biblioteca_central.prestar_libro("978-0618640157", "S002") # Luis presta El Señor de los Anillos
biblioteca_central.prestar_libro("978-0307350446", "S002") # Luis intenta prestar el mismo libro (fallará)

# 6. Mostrar estado intermedio
biblioteca_central.mostrar_catalogo()
print(socio1)
print(socio2)

# 7. Realizar devoluciones
print("\n--- Operaciones de Devolución ---")
biblioteca_central.devolver_libro("978-0307350446", "S001") # Ana devuelve Cien Años de Soledad

# 8. Mostrar estado final
biblioteca_central.mostrar_catalogo()
print(socio1)

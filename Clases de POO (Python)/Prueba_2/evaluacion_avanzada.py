# Prueba 2: Conceptos Avanzados de POO
# Ejercicio: Simulación de un Carrito de Compras

# --- Objetivo ---
# Aplicar conceptos avanzados como abstracción, composición y métodos especiales para crear
# un sistema flexible de carrito de compras que maneje productos y descuentos.

# --- Requisitos ---
# 1.  Crear una clase `Producto` con nombre y precio.
# 2.  Crear una clase base abstracta `ReglaDeDescuento` con un método abstracto `calcular_descuento`.
#     Este método recibirá una lista de productos y deberá devolver el monto del descuento.
# 3.  Crear dos clases concretas que hereden de `ReglaDeDescuento`:
#     - `DescuentoFijo`: Aplica un monto fijo si el total de la compra supera un mínimo.
#     - `DescuentoPorcentual`: Aplica un porcentaje de descuento sobre el total.
# 4.  Crear una clase `CarritoDeCompras` que utilice composición:
#     - Debe TENER UNA lista de productos.
#     - Debe TENER UNA regla de descuento (opcional).
#     - Implementar métodos para agregar productos.
#     - Implementar el método especial `__len__` para devolver el número de productos.
#     - Implementar el método especial `__str__` para una representación clara del carrito.
#     - Crear un método `calcular_total` que calcule el subtotal, aplique el descuento (si existe)
#       y devuelva el total final.
# 5.  Demostrar cómo se puede cambiar la estrategia de descuento (la regla) dinámicamente.

# --- Implementación ---

from abc import ABC, abstractmethod

# 1. Clase Producto
class Producto:
    """Representa un item simple con nombre y precio."""
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio

    def __str__(self):
        return f"{self.nombre} - ${self.precio:.2f}"

# 2. Clase Base Abstracta para Descuentos
class ReglaDeDescuento(ABC):
    """Contrato para cualquier estrategia de descuento."""
    @abstractmethod
    def calcular_descuento(self, productos):
        pass

# 3. Clases de Descuento Concretas
class DescuentoFijo(ReglaDeDescuento):
    """Aplica un descuento fijo si se alcanza un umbral."""
    def __init__(self, monto_fijo, umbral_minimo):
        self.monto_fijo = monto_fijo
        self.umbral_minimo = umbral_minimo

    def calcular_descuento(self, productos):
        subtotal = sum(p.precio for p in productos)
        if subtotal >= self.umbral_minimo:
            print(f"(Aplicando descuento fijo de ${self.monto_fijo:.2f})")
            return self.monto_fijo
        return 0

class DescuentoPorcentual(ReglaDeDescuento):
    """Aplica un descuento porcentual al total."""
    def __init__(self, porcentaje):
        self.porcentaje = porcentaje # Ej: 10 para un 10%

    def calcular_descuento(self, productos):
        subtotal = sum(p.precio for p in productos)
        descuento = subtotal * (self.porcentaje / 100)
        print(f"(Aplicando {self.porcentaje}% de descuento: ${descuento:.2f})")
        return descuento

# 4. Clase Carrito de Compras (Composición)
class CarritoDeCompras:
    """Gestiona productos y aplica una estrategia de descuento."""
    def __init__(self, regla_descuento: ReglaDeDescuento = None):
        self._productos = []
        # Composición: El carrito TIENE UNA regla de descuento.
        self._regla_descuento = regla_descuento

    def agregar_producto(self, producto):
        self._productos.append(producto)
        print(f"Añadido al carrito: {producto.nombre}")

    def set_regla_descuento(self, regla):
        """Permite cambiar la estrategia de descuento dinámicamente."""
        self._regla_descuento = regla
        print(f"Nueva regla de descuento establecida: {type(regla).__name__}")

    def __len__(self):
        return len(self._productos)

    def __str__(self):
        if not self._productos:
            return "El carrito está vacío."
        
        lista_productos = "\n".join(f"  - {p}" for p in self._productos)
        return f"Carrito con {len(self)} productos:\n{lista_productos}"

    def calcular_total(self):
        """Calcula el total, aplicando la regla de descuento si existe."""
        subtotal = sum(p.precio for p in self._productos)
        descuento = 0
        if self._regla_descuento:
            # Polimorfismo: Llama al método de la regla concreta sin saber cuál es.
            descuento = self._regla_descuento.calcular_descuento(self._productos)
        
        total_final = subtotal - descuento
        
        print("\n--- Resumen de Compra ---")
        print(f"Subtotal:       ${subtotal:10.2f}")
        print(f"Descuento:      -${descuento:10.2f}")
        print("----------------------------")
        print(f"Total a Pagar:  ${total_final:10.2f}")
        print("----------------------------")
        return total_final

# --- Simulación ---

# Crear productos
laptop = Producto("Laptop Pro", 1500)
mouse = Producto("Mouse Inalámbrico", 50)
teclado = Producto("Teclado Mecánico", 150)

# 1. Simulación SIN descuento
print("--- Carrito 1: Compra simple sin descuento ---")
carrito1 = CarritoDeCompras()
carrito1.agregar_producto(mouse)
carrito1.agregar_producto(teclado)
print("\n" + str(carrito1))
carrito1.calcular_total()

# 2. Simulación con Descuento Porcentual
print("\n\n--- Carrito 2: Compra grande con descuento porcentual ---")
regla_10_pct = DescuentoPorcentual(10) # 10% de descuento
carrito2 = CarritoDeCompras(regla_descuento=regla_10_pct)
carrito2.agregar_producto(laptop)
carrito2.agregar_producto(teclado)
print("\n" + str(carrito2))
carrito2.calcular_total()

# 3. Simulación con Descuento Fijo y cambio dinámico
print("\n\n--- Carrito 3: Compra con cambio de estrategia de descuento ---")
carrito3 = CarritoDeCompras()
carrito3.agregar_producto(Producto("Monitor 4K", 700))
carrito3.agregar_producto(Producto("Webcam HD", 120))

print("\nCalculando total sin descuento inicial...")
carrito3.calcular_total()

# Añadir una regla de descuento dinámicamente
print("\n... el cliente encontró un cupón de descuento fijo...")
regla_fija = DescuentoFijo(monto_fijo=100, umbral_minimo=500) # $100 de descuento en compras > $500
carrito3.set_regla_descuento(regla_fija)

print("\nRecalculando total con el nuevo descuento...")
carrito3.calcular_total()

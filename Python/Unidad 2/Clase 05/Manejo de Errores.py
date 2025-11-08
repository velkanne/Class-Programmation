# Unidad 2: Nivel Intermedio
# Clase 5: Manejo de Errores (try, except)

# El bloque try-except permite manejar errores que pueden ocurrir durante la ejecución.
try:
    numerador = 10
    denominador = int(input("Ingresa un número para dividir 10: "))
    resultado = numerador / denominador
    print(f"El resultado es: {resultado}")

except ZeroDivisionError:
    # Este bloque se ejecuta si el usuario ingresa 0.
    print("Error: No se puede dividir por cero.")

except ValueError:
    # Este bloque se ejecuta si el usuario ingresa algo que no es un número.
    print("Error: Debes ingresar un número válido.")

finally:
    # Este bloque se ejecuta siempre, haya o no un error.
    print("Fin del programa.")

# Unidad 3: Nivel Avanzado
# Clase 7: Introducción a Asyncio

import asyncio

# Asyncio es para escribir código concurrente usando corutinas (async/await).
# Es ideal para operaciones de I/O (entrada/salida) como peticiones de red.

async def saludar(nombre, demora):
    print(f"Hola, {nombre}... (esperando {demora}s)")
    await asyncio.sleep(demora)
    print(f"...adiós, {nombre}")

async def main():
    # asyncio.gather ejecuta múltiples corutinas concurrentemente.
    await asyncio.gather(
        saludar("Ana", 2),
        saludar("Pedro", 1)
    )

# En Python 3.7+ se puede usar asyncio.run() para ejecutar la corutina principal.
print("Iniciando programa asíncrono...")
asyncio.run(main())
print("Programa asíncrono finalizado.")

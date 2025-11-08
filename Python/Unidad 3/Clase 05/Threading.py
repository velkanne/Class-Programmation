# Unidad 3: Nivel Avanzado
# Clase 5: Concurrencia con Threading

import threading
import time

def tarea_larga(nombre, duracion):
    print(f"Thread {nombre}: iniciando.")
    time.sleep(duracion)
    print(f"Thread {nombre}: finalizado.")

# Crear threads
thread1 = threading.Thread(target=tarea_larga, args=("Uno", 2))
thread2 = threading.Thread(target=tarea_larga, args=("Dos", 2))

# Iniciar threads
# Se ejecutarán "al mismo tiempo" (intercalando su ejecución)
inicio = time.time()
thread1.start()
thread2.start()

# Esperar a que ambos threads terminen
thread1.join()
thread2.join()
fin = time.time()

print(f"Tiempo total: {fin - inicio:.2f} segundos.")
# Nota: El tiempo total es cercano a 2s, no 4s, porque se ejecutaron concurrentemente.

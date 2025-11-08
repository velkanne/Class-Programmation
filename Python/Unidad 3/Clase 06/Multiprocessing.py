# Unidad 3: Nivel Avanzado
# Clase 6: Concurrencia con Multiprocessing

import multiprocessing
import time

# El multiprocessing usa procesos separados en lugar de hilos.
# Es útil para tareas que hacen un uso intensivo de la CPU, ya que
# puede usar múltiples núcleos del procesador.

def tarea_cpu(nombre):
    print(f"Proceso {nombre}: iniciando.")
    # Simula una tarea que consume CPU
    [i*i for i in range(10**7)]
    print(f"Proceso {nombre}: finalizado.")

if __name__ == "__main__":
    # Crear procesos
    proceso1 = multiprocessing.Process(target=tarea_cpu, args=("Uno",))
    proceso2 = multiprocessing.Process(target=tarea_cpu, args=("Dos",))

    # Iniciar procesos
    inicio = time.time()
    proceso1.start()
    proceso2.start()

    # Esperar a que ambos procesos terminen
    proceso1.join()
    proceso2.join()
    fin = time.time()

    print(f"Tiempo total: {fin - inicio:.2f} segundos.")
    # En un sistema multinúcleo, el tiempo será menor que la suma de ambos.

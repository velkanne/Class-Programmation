# Unidad 3: Nivel Avanzado
# Clase 8: Consumir APIs con 'requests'

# Primero, necesitas instalar la librería: pip install requests
import requests

# Hacer una petición GET a una API pública
try:
    response = requests.get("https://api.github.com/users/python")
    response.raise_for_status() # Lanza un error si la petición no fue exitosa (código != 200)

    # La respuesta viene en formato JSON
    datos = response.json()

    print(f"Nombre de usuario: {datos['login']}")
    print(f"Nombre: {datos['name']}")
    print(f"Número de repositorios públicos: {datos['public_repos']}")
    print(f"URL del blog: {datos['blog']}")

except requests.exceptions.RequestException as e:
    print(f"Error al hacer la petición: {e}")

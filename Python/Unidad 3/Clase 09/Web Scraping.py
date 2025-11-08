# Unidad 3: Nivel Avanzado
# Clase 9: Web Scraping con BeautifulSoup

# Primero, necesitas instalar las librerías: pip install requests beautifulsoup4
import requests
from bs4 import BeautifulSoup

# URL para hacer scraping (un sitio de ejemplo)
URL = "http://quotes.toscrape.com"

try:
    page = requests.get(URL)
    page.raise_for_status()

    # Crear un objeto BeautifulSoup para parsear el HTML
    soup = BeautifulSoup(page.content, "html.parser")

    # Encontrar todos los elementos con la clase 'quote'
    quotes = soup.find_all("div", class_="quote")

    print(f"Se encontraron {len(quotes)} citas en la página:\n")

    for quote in quotes:
        texto = quote.find("span", class_="text").text
        autor = quote.find("small", class_="author").text
        print(f'"{texto}" - {autor}')
        print("-" * 20)

except requests.exceptions.RequestException as e:
    print(f"No se pudo obtener la página: {e}")

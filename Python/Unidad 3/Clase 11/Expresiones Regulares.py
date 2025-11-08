# Unidad 3: Nivel Avanzado
# Clase 11: Expresiones Regulares (módulo re)

import re

texto = "Mi número de teléfono es 123-456-7890. El de mi oficina es 987-654-3210."

# Patrón para encontrar un número de teléfono (3 dígitos - 3 dígitos - 4 dígitos)
patron = r"\d{3}-\d{3}-\d{4}"

# re.findall() encuentra todas las ocurrencias que coinciden con el patrón
numeros_encontrados = re.findall(patron, texto)

print(f"Números de teléfono encontrados: {numeros_encontrados}")

# re.search() encuentra la primera ocurrencia y devuelve un objeto 'match'
match = re.search(patron, texto)
if match:
    print(f"\nPrimera coincidencia encontrada: {match.group(0)}")

# re.sub() sustituye las ocurrencias por otra cadena
texto_censurado = re.sub(patron, "[CENSURADO]", texto)
print(f"\nTexto con números censurados: {texto_censurado}")

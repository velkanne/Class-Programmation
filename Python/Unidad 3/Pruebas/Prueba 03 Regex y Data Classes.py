# Unidad 3: Nivel Avanzado
# Prueba 3: Expresiones Regulares y Data Classes

# 1. Importa `re` y `dataclass` de sus respectivos módulos.

# 2. Crea una `dataclass` llamada `Correo` con los atributos `usuario` (str) y `dominio` (str).

# 3. Se te da la siguiente cadena de texto:
#    `texto = "Contacta a juan.perez@email.com o a maria_g@mi-empresa.net para más info."`

# 4. Escribe una expresión regular para encontrar direcciones de email.
#    Un patrón simple podría ser: [\w.-]+@[\w-]+\.[\w.-]+

# 5. Usa `re.finditer()` para iterar sobre todas las coincidencias en el texto.
#    Para cada coincidencia, extrae el usuario y el dominio, crea una instancia
#    de tu `dataclass` `Correo` y añádela a una lista.

# 6. Imprime la lista de objetos `Correo` que has creado.

# Escribe tu código aquí

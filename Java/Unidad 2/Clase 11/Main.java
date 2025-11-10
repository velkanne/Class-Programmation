import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        System.out.println("---- GESTOR DE DATOS PARA UN CINE CLUB ----");

        // 1. EL ARRAY: Programa semanal de películas (Estructura de datos de tamaño fijo)
        // DEFINICION: ARRAY ES UNA ESTRUCTURA DE DATOS QUE PERMITE ALMACENAR MULTIPLES VALORES DEL MISMO TIPO
        // EN UNA SOLA VARIABLE. CADA VALOR SE IDENTIFICA POR UN INDICE.
        String[] programaSemanal = {"Pelicula A: Drama", "Pelicula B: Comedia", "Pelicula C: Accion"}; // Array de Strings
        System.out.println("\n[ARRAY] Programa fijo de la semanal: ");

        // ACCESO POR INDICE (SIEMPRE EMPIEZA EN 0)
        System.out.println("La pelicula de mañana es : " + programaSemanal[1]);

        // RECORRIDO CON EL CICLO FOR TRADICIONAL (USANDO LA PROPIEDAD LENGTH)
        System.out.println("\nRecorrido del array con ciclo for tradicional:");
        for (int i = 0; i < programaSemanal.length; i++) {
            System.out.println("Día " + (i + 1) + ": " + programaSemanal[i]);
        } // Cierre del bucle for tradicional
        
        // --------------------------------------------------------------------------------------------------------------------------------

        // 2. EL SET: Registro de asistentes unicos (sin duplicados)
        // Definicion: HashSet es una coleccion que almacena elementos unicos, sin un orden especifico.
        // NO MANTIENE ORDEN ESPECIFICO. ES IDEAL PARA VALIDAR UNICIDAD.
        // Se recomienda usar la importación (import java.util.HashSet;)
        HashSet<String> asistentesUnicos = new HashSet<>();
        asistentesUnicos.add("Abel Tesfaye (ID: 001)");
        asistentesUnicos.add("Don Toliver (ID: 002)");
        asistentesUnicos.add("Kendrick Lamar (ID: 003)");
        asistentesUnicos.add("Abel Tesfaye (ID: 001)"); // Intento de duplicado, será ignorado.

        System.out.println("\n[SET] Lista de asistentes unicos:");
        System.out.println("Total de asistentes unicos: " + asistentesUnicos.size());

        // RECORRIDO CON EL CICLO FOR EACH
        // EXPLICACION: EL CICLO FOR EACH PERMITE RECORRER CADA ELEMENTO DE UNA COLECCION SIN NECESIDAD DE USAR UN INDICE.
        for (String asistente : asistentesUnicos) {
            System.out.println("Asistente: " + asistente);
        } // Cierre del bucle for-each

        // --------------------------------------------------------------------------------------------------------------------------------

        // 3. EL MAP: Registro de películas y sus calificaciones
        // Definicion: HashMap es una coleccion que almacena pares clave-valor. Permite asociar una clave unica a un valor.
        // IDEAL PARA BUSQUEDAS RAPIDAS BASADAS EN CLAVES.
        
        // CREAMOS UN HASHMAP PARA MAPEAR LA ID DE LAS PELICULAS (STRING) CON SU CALIFICACION (DOUBLE)
        // Se recomienda usar las importaciones (import java.util.HashMap; y import java.util.Map;)
        HashMap<String, Double> CalificacionMap = new HashMap<>();
        CalificacionMap.put("Pelicula A", 8.5);
        CalificacionMap.put("Pelicula B", 7.2);
        CalificacionMap.put("Pelicula C", 9.0);
        
        System.out.println("\n[MAP] Registro de peliculas y sus calificaciones:");
        
        // ACCESO POR CLAVE
        System.out.println("La calificacion de 'Pelicula B' es: " + CalificacionMap.get("Pelicula B"));
        
        // RECORRIDO CON EL CICLO FOR EACH (USANDO entrySet PARA OBTENER CLAVE Y VALOR)
        for (Map.Entry<String, Double> entry : CalificacionMap.entrySet()) {
            System.out.println("Pelicula: " + entry.getKey() + ", Calificacion: " + entry.getValue());
        } // Cierre del bucle for-each del Map

    } // Cierre del método main
} // Cierre de la clase Main
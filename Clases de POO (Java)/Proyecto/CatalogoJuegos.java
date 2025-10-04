import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

/**
 * Clase Principal: Contiene el main(), la Colección, el Menú y el Manejo de Excepciones.
 */
public class CatalogoJuegos {

    // Colección (ArrayList) para almacenar objetos (Requisito Obligatorio)
    private static ArrayList<ObjetoJuego> catalogo = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("=========================================");
        System.out.println("            CATÁLOGO DE OBJETOS          ");
        System.out.println("=========================================");
        
        // Registrar un Item de ejemplo para garantizar que el Polimorfismo siempre se pruebe.
        registrarItemEjemplo(); 
        
        mostrarMenuPrincipal();
    }

    private static void mostrarMenuPrincipal() {
        int opcion = -1;
        do {
            try {
                // Menú simple y conciso
                System.out.println("\n--- MENÚ PRINCIPAL ---");
                System.out.println("1. Registrar Habilidad (PRUEBA DE REGLA)");
                System.out.println("2. Mostrar Catálogo Completo (PRUEBA DE POLIMORFISMO)");
                System.out.println("0. Salir");
                System.out.print("Seleccione una opción: ");

                //  Manejo de Excepciones: InputMismatchException (Predefinida de Java)
                if (scanner.hasNextInt()) {
                    opcion = scanner.nextInt();
                    scanner.nextLine();
                } else {
                    throw new InputMismatchException();
                }

                switch (opcion) {
                    case 1: registrarHabilidad(); break;
                    case 2: mostrarCatalogo(); break;
                    case 0: System.out.println("Saliendo de la aplicación..."); break;
                    default: System.out.println("Opción no válida.");
                }

            } catch (InputMismatchException e) {
                System.err.println("\n ERROR: Debe ingresar solo números enteros para la opción del menú.");
                scanner.nextLine(); 
            }
        } while (opcion != 0);
    }
    
    private static void registrarHabilidad() {
        System.out.println("\n--- REGISTRO HABILIDAD ---");
        System.out.print("Nombre: "); String nombre = scanner.nextLine();
        System.out.print("Descripción: "); String desc = scanner.nextLine();

        try {
            System.out.print("Costo de Maná (entero): "); int mana = scanner.nextInt();
            System.out.print("Nivel Requerido (entero): "); int nivel = scanner.nextInt();
            scanner.nextLine();

            // Intenta crear la Habilidad. Si falla la regla, lanza la excepción.
            Habilidad nuevaHabilidad = new Habilidad(nombre, desc, mana, nivel);
            catalogo.add(nuevaHabilidad);
            System.out.println("\n Habilidad registrada con éxito.");

        } catch (HabilidadInvalidaExcepcion e) {
            //  Manejo de Excepciones: Personalizada (La tuya)
            System.err.println("\n VALIDACIÓN FALLIDA: No se pudo registrar la habilidad.");
            System.err.println("Motivo: " + e.getMessage());
        } catch (InputMismatchException e) {
            //  Manejo de Excepciones: InputMismatchException (Predefinida de Java)
            System.err.println("\n ERROR DE ENTRADA: Costo y Nivel deben ser números enteros.");
            scanner.nextLine();
        }
    }
    
    // Método auxiliar para garantizar la prueba de Polimorfismo sin complicar el menú
    private static void registrarItemEjemplo() {
        try {
            Item itemBase = new Item("Poción de Salud", "Restaura la vida", 50);
            catalogo.add(itemBase);
        } catch (Exception e) {
             // Ignorar errores, es solo un ejemplo
        }
    }

    private static void mostrarCatalogo() {
        System.out.println("\n======== CATÁLOGO COMPLETO (Polimorfismo) ========");
        if (catalogo.isEmpty()) {
            System.out.println("El catálogo está vacío. Intente registrar una habilidad primero.");
            return;
        }

        //  Uso del Polimorfismo con toString() para máxima simplicidad 
        for (ObjetoJuego objeto : catalogo) {
            System.out.println(objeto); // Llama automáticamente a objeto.toString()
            System.out.println("-------------------------------------------------");
        }
    }
}
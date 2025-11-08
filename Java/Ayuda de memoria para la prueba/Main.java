import java.io.IOException;
import java.util.List;
import java.util.Scanner;

public class Main {
    private static final GestorContactos gestor = new GestorContactos();
    private static final Scanner scanner = new Scanner(System.in);
    
    public static void main(String[] args) {
        int opcion;
        do {
            mostrarMenu();
            if (scanner.hasNextInt()) {
                opcion = scanner.nextInt();
                scanner.nextLine(); // Consumir nueva línea
                procesarOpcion(opcion);
            } else {
                System.out.println("Entrada inválida. Ingrese un número.");
                scanner.nextLine(); // Limpiar el buffer
                opcion = -1; // Para repetir el bucle
            }
        } while (opcion != 6);
        
        System.out.println("Programa finalizado.");
    }
    
    private static void mostrarMenu() {
        System.out.println("\n--- GESTOR DE CONTACTOS ---");
        System.out.println("1. Añadir contacto");
        System.out.println("2. Listar contactos");
        System.out.println("3. Buscar contacto por nombre");
        System.out.println("4. Eliminar contacto por nombre");
        System.out.println("5. Guardar contactos");
        System.out.println("6. Salir (Guardar y Salir)");
        System.out.print("Seleccione una opción: ");
    }
    
    private static void procesarOpcion(int opcion) {
        switch (opcion) {
            case 1 -> añadirContacto();
            case 2 -> listarContactos();
            case 3 -> buscarContacto();
            case 4 -> eliminarContacto();
            case 5 -> guardarContactos();
            case 6 -> guardarContactos();
            default -> System.out.println("Opción no válida. Intente de nuevo.");
        }
    }
    
    private static void añadirContacto() {
        System.out.print("Nombre: ");
        String nombre = scanner.nextLine().trim();
        System.out.print("Teléfono: ");
        String telefono = scanner.nextLine().trim();
        System.out.print("Email: ");
        String email = scanner.nextLine().trim();
        System.out.print("Dirección: ");
        String direccion = scanner.nextLine().trim();
        
        if (nombre.isEmpty() || telefono.isEmpty()) {
            System.out.println("Error: Nombre y Teléfono son obligatorios.");
            return;
        }
        
        Contacto nuevo = new Contacto(nombre, telefono, email, direccion);
        gestor.añadirContacto(nuevo);
        System.out.println("Contacto '" + nombre + "' añadido.");
    }
    
    private static void listarContactos() {
        List<Contacto> lista = gestor.listarContactos();
        if (lista.isEmpty()) {
            System.out.println("No hay contactos en la lista.");
            return;
        }
        
        System.out.println("\n--- LISTA DE CONTACTOS (" + lista.size() + ") ---");
        for (Contacto c : lista) {
            System.out.println(c.toString()); 
        }
        System.out.println("-----------------------------------");
    }
    
    private static void buscarContacto() {
        System.out.print("Ingrese el nombre a buscar: ");
        String nombre = scanner.nextLine().trim();
        
        Contacto encontrado = gestor.buscarContacto(nombre);
        if (encontrado != null) {
            System.out.println("\n--- CONTACTO ENCONTRADO ---");
            System.out.println(encontrado.toString());
        } else {
            System.out.println("Contacto con nombre '" + nombre + "' no encontrado.");
        }
    }
    
    private static void eliminarContacto() {
        System.out.print("Ingrese el nombre del contacto a eliminar: ");
        String nombre = scanner.nextLine().trim();
        
        boolean eliminado = gestor.eliminarContacto(nombre);
        if (eliminado) {
            System.out.println("Contacto con nombre '" + nombre + "' eliminado.");
        } else {
            System.out.println("Contacto con nombre '" + nombre + "' no encontrado o no pudo ser eliminado.");
        }
    }
    
    private static void guardarContactos() {
        try {
            gestor.guardarContactos();
            System.out.println("Contactos guardados exitosamente en contactos.txt.");
        } catch (IOException e) {
            System.err.println("Error al guardar contactos: " + e.getMessage());
        }
    }
}
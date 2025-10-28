import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    // Clase interna para gestionar la escritura del archivo
    private static class Archivo {
        private PrintWriter escritor;

        // Constructor que inicializa el escritor, maneja el modo append (añadir)
        public Archivo(String nombreArchivo, boolean append) throws IOException {
            // El segundo argumento del constructor de FileWriter determina si se añade (true) o sobreescribe (false)
            FileWriter fileWriter = new FileWriter(nombreArchivo, append);
            this.escritor = new PrintWriter(fileWriter);
        }

        public void escribir(String linea) {
            if (escritor != null) {
                escritor.println(linea);
            }
        }

        public void cerrar() {
            // Cierra el recurso, asegurando que los datos se vacíen al archivo
            if (escritor != null) {
                escritor.close();
            }
        }
    }

    public static void main(String [] agrs) {
        System.out.println("----Demo de Sobreescritura y archivo unico----");

        try(Scanner sc = new Scanner(System.in)){
            System.out.println("Deseas añadir (A) o sobreescribir (S) el archivo?");
            String opcion = sc.nextLine().toUpperCase();
            
            System.out.println("Ingresa una linea de texto: ");

            // Determina el modo de escritura
            boolean append = opcion.equals("A");

            // Inicializa la clase Archivo
            Archivo archivo = new Archivo("archivo.txt", append);
            
            // Escribe la línea de texto y cierra el recurso
            archivo.escribir(sc.nextLine());
            archivo.cerrar();
            
            System.out.println("Archivo escrito exitosamente.");
        } catch (IOException e) {
            // Manejo de errores de Entrada/Salida
            System.out.println("Ocurrió un error de E/S: " + e.getMessage());
            e.printStackTrace();
            System.exit(1);
        } catch (Exception e) {
             // Manejo de otros errores
            System.out.println("Ocurrió un error inesperado: " + e.getMessage());
            e.printStackTrace();
            System.exit(1);
        }
    }
}
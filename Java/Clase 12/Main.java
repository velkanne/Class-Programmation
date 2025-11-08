import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Main {
    @SuppressWarnings("ConvertToTryWithResources")
        public static void main(String[] args) throws IOException {
        //Usamos para la entrada de datos del usuario Scanner para la entrada de datos del usuario
            Scanner scanner = new Scanner(System.in);
        //1. Demostracion de escritura (output stream)
        // Demo 1
            System.out.println("Demo 1: Guardando tareas en un archivo de texto");
            System.out.print("Ingrese el nombre del archivo para guardar las tareas: ");
            String tarea = scanner.nextLine();
        //El bloque try-catch es obligatorio para manejar excepciones (expection verification: IOException)
        try {
            // FileWriter es una clase que permite escribir en archivos de texto
            // El true indica que se va a anexar al archivo (append mode)
                FileWriter escritor = new FileWriter("tarea.txt", true);
            // Escribimos la tarea en el archivo
                escritor.write(tarea + System.lineSeparator());
            // Cerramos el escritor para liberar recursos
                escritor.close();
                System.out.println("Tarea guardada exitosamente en " + "tarea.txt");
        } catch (IOException e) {
                System.out.println("Ocurrió un error al guardar la tarea: " + e.getMessage()); }
        {
            scanner.close(); }
            //2. Demostracion de lectura (input stream)
            // Demo 2
            System.out.println("Demo 2: Leyendo tareas desde un archivo de texto");
            System.out.print("Ingrese el nombre del archivo para leer las tareas: ");
        try {
                FileReader lector = new FileReader("tarea.txt");
                int caracter;
            System.out.println("Tareas guardadas:");
            // Leemos el archivo caracter por caracter hasta el final del archivo
                while ((caracter = lector.read()) != -1) {
            System.out.print((char) caracter);
            }
            // Cerramos el lector para liberar recursos
                lector.close();
        } catch (IOException e) {
                System.out.println("Ocurrió un error al leer las tareas: " + e.getMessage()); }
        {
            scanner.close();
        }
    }
}
import java.util.InputMismatchException;
import java.util.Scanner;

public class CalcularVolumenCilindro {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double radio = 0;
        double altura = 0;

        // Bucle para obtener un radio válido
        while (true) {
            try {
                System.out.print("Introduce el radio del cilindro: ");
                radio = scanner.nextDouble();
                if (radio > 0) {
                    break; // Si el dato es válido, salimos del bucle
                } else {
                    System.out.println("Error: El radio debe ser un número positivo.");
                }
            } catch (InputMismatchException e) {
                System.out.println("Error: Debes introducir un valor numérico. Inténtalo de nuevo.");
                scanner.next(); // Limpiamos el buffer del scanner para evitar un bucle infinito
            }
        }

        // Bucle para obtener una altura válida
        while (true) {
            try {
                System.out.print("Introduce la altura del cilindro: ");
                altura = scanner.nextDouble();
                if (altura > 0) {
                    break; // Si el dato es válido, salimos del bucle
                } else {
                    System.out.println("Error: La altura debe ser un número positivo.");
                }
            } catch (InputMismatchException e) {
                System.out.println("Error: Debes introducir un valor numérico. Inténtalo de nuevo.");
                scanner.next(); // Limpiamos el buffer del scanner
            }
        }

        // Calculamos el volumen una vez que tenemos datos válidos
        double volumen = Math.PI * Math.pow(radio, 2) * altura;

        // Mostramos el resultado en la consola
        System.out.println("El volumen del cilindro es: " + volumen);

        // Cerramos el scanner para liberar recursos
        scanner.close();
    }
}
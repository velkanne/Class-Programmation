
import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("---- Verificador de Edad ----");
        Scanner scanner = new Scanner(System.in);

    try {
            System.out.println("Ingrese su nombre: ");
        String nombre = scanner.nextLine();
            System.out.println("Ingrese su edad: ");
        int edad = scanner.nextInt();

        ValidadorDeEdad.validar(edad);

            System.out.println("Hola " + nombre + ", tienes " + edad + " años.");
        } catch (InputMismatchException e) {
            System.out.println("Error: Por favor, ingrese un número válido para la edad.");
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
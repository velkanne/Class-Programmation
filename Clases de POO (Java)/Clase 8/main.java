import java.util.InputMismatchException;
import java.util.Scanner;

public class main {
    public static void main(String[] args) {
        System.out.println("---- Simulador de Cajero Automatico ----");
        CajeroAutomatico miCajero = new CajeroAutomatico(1000.0);

        try(Scanner scanner = new Scanner(System.in)){
            System.out.println("Ingrese la cantidad a retirar:");
            double saldo = scanner.nextDouble();
            miCajero.retirarDinero(saldo);
            System.out.println("Retiro exitoso. Saldo restante: " + miCajero.getSaldo());
        } catch (InputMismatchException e){
            System.out.println("Error: Entrada invalida. Por favor ingrese un numero.");
        } catch (IllegalArgumentException | IllegalStateException e){
            System.out.println("Error: " + e.getMessage());
        }
    }
}
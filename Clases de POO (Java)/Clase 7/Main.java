
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("-----Demo 1: Condicionales-----");

        Scanner scanner = new Scanner(System.in);
        System.out.println("Oe matewea, ingresa tu edad");
        int edad = scanner.nextInt();

        if (edad >= 18) {
            System.out.println("Wena compañero vamo por unas maraquitas al escorpion rojo");
        }else if (edad >= 16){
            System.out.println("Todavia te falta malaya");
        } else {
            System.out.println("Pendejo culiao");
        }


        System.out.println("-----Demo 2: Ciclo for-----");

        System.out.println("Contando del 1 al 5 con ciclo for");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Numero: " + i);
        }
        System.out.println("-----Demo 3: Ciclo while-----");
        System.out.println("Contando del 1 al 5 con ciclo while");
        int i = 5;
        while (i > 0) {
            System.out.println("Numero: " + i);
            i--;
        }

        System.out.println("-----Demo 4: Combinacion de Estructuras-----");
        System.out.println("Contando del 1 al 5 con ciclo while y for");
        for (int j = 1; j <= 10; j++) {
            if (j % 2 == 0) {
                System.out.println("Numero: " + j + " es par");
            } else {
            System.out.println("Numero: " + j + " es impar");
            }
        }
    }
}

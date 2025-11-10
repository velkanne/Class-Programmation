import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {
    
    private static final GestorInstituto gestor = new GestorInstituto();
    private static final Scanner scanner = new Scanner(System.in);

    @SuppressWarnings("ConvertToTryWithResources")
    public static void main(String[] args) {
        boolean salir = false;

        while (!salir) {
            mostrarMenu();
            int opcion = 0;

            try {
                System.out.print("Seleccione una opción: ");
                opcion = scanner.nextInt();
                scanner.nextLine();

                switch (opcion) {
                    case 1 -> mostrarCatalogoCursos();
                    case 2 -> registrarMatricula();
                    case 3 -> listarMatriculas();
                    case 4 -> {
                        salir = true;
                        gestor.guardarDatos();
                    }
                    default -> System.out.println("Opción no válida. Intente de nuevo.");
                }

            } catch (InputMismatchException e) {
                System.err.println("Error: Debe ingresar un número.");
                scanner.nextLine();
            }
        }
        System.out.println("Programa finalizado.");
        scanner.close();
    }

    private static void mostrarMenu() {
        System.out.println("\n--- SISTEMA DE MATRÍCULA - INSTITUTO ---");
        System.out.println("1. Ver Catálogo de Cursos");
        System.out.println("2. Registrar Matrícula");
        System.out.println("3. Listar Matrículas Registradas");
        System.out.println("4. Guardar y Salir");
    }

    private static void mostrarCatalogoCursos() {
        System.out.println("\n--- Catálogo de Cursos (HashMap) ---");
        for (Curso c : gestor.getCatalogoCursos().values()) {
            System.out.println(c.toString());
        }
    }

    private static void registrarMatricula() {
        System.out.println("\n--- Nueva Matrícula ---");
        System.out.print("Ingrese RUT del Alumno: ");
        String rut = scanner.nextLine();
        System.out.print("Ingrese Nombre del Alumno: ");
        String nombre = scanner.nextLine();
        
        Alumno alumno = new Alumno(rut, nombre);
        ArrayList<Curso> cursosSeleccionados = new ArrayList<>();

        System.out.println("\nSelección de Cursos (Ingrese código o 'FIN' para terminar):");
        mostrarCatalogoCursos();
        
        String codigoCurso;
        while (true) {
            System.out.print("Ingrese código de curso: ");
            codigoCurso = scanner.nextLine();

            if (codigoCurso.equalsIgnoreCase("FIN")) {
                break;
            }

            Curso curso = gestor.buscarCursoPorCodigo(codigoCurso);
            if (curso != null) {
                if (!cursosSeleccionados.contains(curso)) {
                    cursosSeleccionados.add(curso);
                    System.out.println("Curso '" + curso.getNombre() + "' añadido.");
                } else {
                    System.out.println("El alumno ya está inscrito en ese curso.");
                }
            } else {
                System.out.println("Código de curso no válido.");
            }
        }

        if (cursosSeleccionados.isEmpty()) {
            System.out.println("No se seleccionaron cursos. Matrícula cancelada.");
        } else {
            gestor.registrarMatricula(alumno, cursosSeleccionados);
        }
    }

    private static void listarMatriculas() {
        System.out.println("\n--- Listado de Matrículas (ArrayList) ---");
        ArrayList<Matricula> matriculas = gestor.listarMatriculas();
        
        if (matriculas.isEmpty()) {
            System.out.println("No hay matrículas registradas.");
        } else {
            for (Matricula m : matriculas) {
                System.out.println(m.toString());
            }
        }
    }
}
import javax.swing.JOptionPane;
import javax.swing.SwingUtilities;

public class Main {

    public static void main(String[] args) {
        // Ejecuta en el hilo de despacho de eventos de Swing
        SwingUtilities.invokeLater(() -> {
            // Opciones para el diálogo
            Object[] options = {"Demo Contador", "Demo Login"};
            
            int choice = JOptionPane.showOptionDialog(
                null, // Frame padre (ninguno)
                "¿Qué demostración desea ejecutar?", // Mensaje
                "Seleccionar Demo", // Título de la ventana
                JOptionPane.YES_NO_OPTION, // Tipo de opción
                JOptionPane.QUESTION_MESSAGE, // Icono
                null, // Icono personalizado (ninguno)
                options, // Texto de los botones
                options[0] // Botón por defecto
            );

            // Inicia la demo seleccionada
            switch (choice) {
                case 0 -> new DemoContador(); // Demo Contador
                case 1 -> new DemoLogin(); // Demo Login
                default -> System.out.println("Ejecución cancelada."); // Si el usuario cierra el diálogo, no hace nada
            }
        });
        }
    }
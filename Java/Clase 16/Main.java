import javax.swing.JOptionPane;
import javax.swing.SwingUtilities;

public class Main {

    @SuppressWarnings("Convert2Lambda")
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                // Opciones actualizadas para incluir la nueva demo
                Object[] options = {
                    "Demo Contador", 
                    "Demo Login", 
                    "Demo Convertidor Temp", 
                    "Demo Eco de Texto",
                    "Demo Calculadora" // Nueva Opción
                };
                
                int choice = JOptionPane.showOptionDialog(
                    null,
                    "¿Qué demostración desea ejecutar?",
                    "Seleccionar Demo",
                    JOptionPane.DEFAULT_OPTION,
                    JOptionPane.QUESTION_MESSAGE,
                    null,
                    options,
                    options[0]
                );

                // Lógica actualizada para manejar las nuevas opciones
                switch (choice) {
                    case 0 -> new DemoContador();
                    case 1 -> new DemoLogin();
                    case 2 -> new DemoTempConverter();
                    case 3 -> new DemoTextEcho();
                    case 4 -> new DemoCalculadora(); // Inicia la nueva demo
                    default -> System.out.println("Ejecución cancelada.");
                }
            }
        });
    }
}
import javax.swing.JOptionPane;
import javax.swing.SwingUtilities;

public class Main {

    public static void main(String[] args) {
        
        // SwingUtilities.invokeLater() pone la tarea (el Runnable) en la cola 
        // de eventos de Swing. El EDT procesará esta tarea.
        // Esto es un requisito para iniciar cualquier GUI de Swing.
        SwingUtilities.invokeLater(() -> {
            // Opciones para el selector de demo
            Object[] options = {
                "Demo 1: Layout Managers",
                "Demo 2: Manejo de Eventos (ActionListener)",
                "Demo 3: Estado y Componentes (JTextArea)",
                "Demo 4: Eventos (Clase Anónima/Lambda)"
            };
            
            // JOptionPane muestra un diálogo simple.
            int choice = JOptionPane.showOptionDialog(
                    null,
                    "Seleccione el concepto de GUI a demostrar:",
                    "Selector de Demos",
                    JOptionPane.DEFAULT_OPTION,
                    JOptionPane.QUESTION_MESSAGE,
                    null,
                    options,
                    options[0]
            );
            
            // Instancia la demo seleccionada
            switch (choice) {
                case 0 -> new DemoLayouts();
                case 1 -> new DemoEventos();
                case 2 -> new DemoEstado();
                case 3 -> new DemoAnonima();
                default -> // Cierra si el usuario cancela
                    System.exit(0);
            }
        });
    }
}
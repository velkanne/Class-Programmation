import javax.swing.SwingUtilities;

public class Main {

    @SuppressWarnings("Convert2Lambda")
    public static void main(String[] args) {
        // Asegura que la creación de la GUI se ejecute en el Event Dispatch Thread (EDT)
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                // Crea una instancia del formulario
                FormularioEncuesta formulario = new FormularioEncuesta();
                
                // Centra la ventana en la pantalla
                formulario.setLocationRelativeTo(null); 
                
                // Hace visible el formulario
                formulario.setVisible(true);
            }
        });
    }
}
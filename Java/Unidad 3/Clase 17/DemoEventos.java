import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

// Paso 1: Implementar la interfaz ActionListener.
// Esto obliga a la clase a definir el método actionPerformed.
public class DemoEventos implements ActionListener {

    private final JLabel statusLabel;
    private final JButton button1;
    private final JButton button2;

    public DemoEventos() {
        JFrame frame = new JFrame("Demo 2: Eventos (ActionListener)");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 150);

        // Componente para mostrar el resultado del evento
        statusLabel = new JLabel("Presione un botón", JLabel.CENTER);
        frame.add(statusLabel, BorderLayout.CENTER);

        JPanel buttonPanel = new JPanel();
        button1 = new JButton("Opción 1");
        button2 = new JButton("Opción 2");

        // Paso 2: Registrar el "listener".
        // Le decimos a los botones que "this" (esta clase)
        // es la que escuchará sus clics.
        button1.addActionListener(this);
        button2.addActionListener(this);

        buttonPanel.add(button1);
        buttonPanel.add(button2);
        frame.add(buttonPanel, BorderLayout.SOUTH);
        
        frame.setVisible(true);
    }

    public DemoEventos(JButton button1, JButton button2, JLabel statusLabel) {
        this.button1 = button1;
        this.button2 = button2;
        this.statusLabel = statusLabel;
    }

    // Paso 3: Implementar el manejador de eventos.
    // Este método es llamado automáticamente por Swing cuando 
    // ocurre una acción (clic) en un componente registrado.
    @Override
    public void actionPerformed(ActionEvent e) {
        // El objeto 'e' (ActionEvent) contiene información sobre el evento,
        // incluyendo QUÉ componente lo originó.
        
        // e.getSource() devuelve el objeto que disparó el evento.
        if (e.getSource() == button1) {
            statusLabel.setText("Botón 1 fue presionado");
        } else if (e.getSource() == button2) {
            statusLabel.setText("Botón 2 fue presionado");
        }
    }
}
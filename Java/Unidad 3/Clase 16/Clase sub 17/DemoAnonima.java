import javax.swing.JFrame;
import javax.swing.JButton;
import javax.swing.JOptionPane;
import java.awt.FlowLayout;

public class DemoAnonima {

    public DemoAnonima() {
        JFrame frame = new JFrame("Demo 4: Eventos (Lambda)");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 150);
        frame.setLayout(new FlowLayout());

        JButton button1 = new JButton("Mostrar Mensaje 1");
        JButton button2 = new JButton("Mostrar Mensaje 2");

        // Concepto: Expresión Lambda
        // En lugar de que la clase implemente ActionListener, pasamos la
        // implementación del método actionPerformed() directamente.
        //
        // (evento) -> { ...código... }
        //
        // 'evento' es el ActionEvent 'e'.
        // El código dentro de { } es lo que iría en actionPerformed.
        // Esto es más limpio y mantiene la lógica cerca del componente.
        
        button1.addActionListener( (evento) -> {
            JOptionPane.showMessageDialog(frame, "Respuesta de Lambda 1");
        });

        button2.addActionListener( (evento) -> {
            JOptionPane.showMessageDialog(frame, "Respuesta de Lambda 2");
        });

        frame.add(button1);
        frame.add(button2);
        frame.setVisible(true);
    }
}
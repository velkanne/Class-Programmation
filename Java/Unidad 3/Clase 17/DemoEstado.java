import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class DemoEstado implements ActionListener {

    private final JTextField inputField;
    private final JTextArea outputArea;
    private final JButton addButton;

    public DemoEstado() {
        JFrame frame = new JFrame("Demo 3: Estado y Componentes");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);
        frame.setLayout(new BorderLayout(5, 5));

        // 1. Panel de Entrada (Norte)
        JPanel inputPanel = new JPanel(new BorderLayout());
        inputField = new JTextField(20); // Almacena el estado (texto de una línea)
        addButton = new JButton("Añadir Eco");
        
        inputPanel.add(new JLabel("Escriba algo: "), BorderLayout.WEST);
        inputPanel.add(inputField, BorderLayout.CENTER);
        inputPanel.add(addButton, BorderLayout.EAST);
        frame.add(inputPanel, BorderLayout.NORTH);

        // 2. Área de Salida (Centro)
        outputArea = new JTextArea(); // Almacena el estado (texto multilínea)
        outputArea.setEditable(false); // El usuario no puede escribir aquí
        
        // 3. JScrollPane
        // JScrollPane es un contenedor que añade barras de desplazamiento
        // si el componente interno (outputArea) es demasiado grande.
        JScrollPane scrollPane = new JScrollPane(outputArea);
        frame.add(scrollPane, BorderLayout.CENTER);

        // Registro del evento
        addButton.addActionListener(this);
        
        frame.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == addButton) {
            // Obtener el estado (texto) del JTextField
            String texto = inputField.getText();
            
            if (!texto.isEmpty()) {
                // Modificar el estado (texto) del JTextArea
                // .append() añade texto al final.
                outputArea.append(texto + "\n");
                
                // Limpiar el estado del JTextField
                inputField.setText("");
            }
        }
    }
}
import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class DemoTextEcho implements ActionListener {

    private final JFrame frame;
    private final JTextField inputField;
    private final JTextArea outputArea;
    private final JButton addButton;

    public DemoTextEcho() {
        frame = new JFrame("Demo Eco de Texto");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);
        frame.setLayout(new BorderLayout());

        // Panel superior para entrada
        JPanel inputPanel = new JPanel(new FlowLayout());
        inputField = new JTextField(20);
        addButton = new JButton("Añadir");
        addButton.addActionListener(this);
        
        inputPanel.add(inputField);
        inputPanel.add(addButton);

        // Área central para salida (con scroll)
        outputArea = new JTextArea();
        outputArea.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(outputArea);

        frame.add(inputPanel, BorderLayout.NORTH);
        frame.add(scrollPane, BorderLayout.CENTER);
        
        frame.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == addButton) {
            String text = inputField.getText();
            if (!text.isEmpty()) {
                outputArea.append(text + "\n");
                inputField.setText(""); // Limpiar campo de entrada
            }
        }
    }
}
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class DemoTempConverter implements ActionListener {

    private final JFrame frame;
    private final JTextField celsiusField;
    private final JTextField fahrenheitField;
    private final JButton convertButton;

    public DemoTempConverter() {
        frame = new JFrame("Demo Convertidor Temperatura");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 150);

        JPanel panel = new JPanel(new GridLayout(3, 2, 10, 10));

        JLabel celsiusLabel = new JLabel("Celsius:");
        celsiusField = new JTextField();
        
        JLabel fahrenheitLabel = new JLabel("Fahrenheit:");
        fahrenheitField = new JTextField();
        fahrenheitField.setEditable(false); // El resultado no se edita

        convertButton = new JButton("Convertir");
        convertButton.addActionListener(this);

        panel.add(celsiusLabel);
        panel.add(celsiusField);
        panel.add(fahrenheitLabel);
        panel.add(fahrenheitField);
        panel.add(new JLabel()); // Espacio vacío
        panel.add(convertButton);

        frame.add(panel);
        frame.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == convertButton) {
            try {
                String celsiusText = celsiusField.getText();
                double celsius = Double.parseDouble(celsiusText);
                double fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
                
                fahrenheitField.setText(String.format("%.2f", fahrenheit));
            } catch (NumberFormatException ex) {
                fahrenheitField.setText("Error: Ingrese un número");
            }
        }
    }
}
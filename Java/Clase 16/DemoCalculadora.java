import java.awt.BorderLayout;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class DemoCalculadora implements ActionListener {

    private final JFrame frame;
    private final JTextField display;
    private final JPanel buttonPanel;

    private double num1 = 0;
    private String operator = "";
    private boolean startOfNewNumber = true; // Flag para limpiar el display

    public DemoCalculadora() {
        frame = new JFrame("Demo Calculadora");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 500);
        frame.setLayout(new BorderLayout());

        // 1. Pantalla (Display)
        display = new JTextField("0");
        display.setEditable(false);
        display.setFont(new Font("Arial", Font.BOLD, 40));
        display.setHorizontalAlignment(JTextField.RIGHT);
        frame.add(display, BorderLayout.NORTH);

        // 2. Panel de Botones (Grid)
        buttonPanel = new JPanel();
        buttonPanel.setLayout(new GridLayout(4, 4, 10, 10)); // 4x4 Grid con espacios

        // Definir los botones
        String[] buttonLabels = {
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "C", "0", "=", "+"
        };

        // Crear y añadir botones
        for (String label : buttonLabels) {
            JButton button = new JButton(label);
            button.setFont(new Font("Arial", Font.BOLD, 24));
            button.addActionListener(this); // 'this' clase maneja todos los clics
            buttonPanel.add(button);
        }

        frame.add(buttonPanel, BorderLayout.CENTER);
        frame.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        String command = e.getActionCommand();

        // Intenta parsear el comando como un número
        try {
            int digit = Integer.parseInt(command);
            handleNumber(command);
        } catch (NumberFormatException ex) {
            // Si no es un número, es un operador o "C" o "="
            handleOperator(command);
        }
    }

    private void handleNumber(String digit) {
        if (startOfNewNumber) {
            display.setText(digit);
            startOfNewNumber = false;
        } else {
            // Evita múltiples ceros al inicio
            if (display.getText().equals("0")) {
                display.setText(digit);
            } else {
                display.setText(display.getText() + digit);
            }
        }
    }

    private void handleOperator(String command) {
        switch (command) {
            case "C": // Clear
                display.setText("0");
                num1 = 0;
                operator = "";
                startOfNewNumber = true;
                break;
                
            case "=": // Equals
                if (operator.isEmpty()) {
                    return; // No hacer nada si no hay operación pendiente
                }
                double num2 = Double.parseDouble(display.getText());
                double result = calculate(num1, num2, operator);
                display.setText(String.valueOf(result));
                
                // Resetear estado
                num1 = 0;
                operator = "";
                startOfNewNumber = true;
                break;
                
            default: // Operadores (+, -, *, /)
                // Si ya hay una operación pendiente (ej. 5 + 10 + ...), resuélvela primero
                if (!operator.isEmpty()) {
                    double num2_pending = Double.parseDouble(display.getText());
                    num1 = calculate(num1, num2_pending, operator);
                    display.setText(String.valueOf(num1));
                } else {
                    // Si es la primera operación, solo guarda el número
                    num1 = Double.parseDouble(display.getText());
                }
                
                // Guarda el nuevo operador y espera el siguiente número
                operator = command;
                startOfNewNumber = true;
                break;
        }
    }

    private double calculate(double n1, double n2, String op) {
        switch (op) {
            case "+":
                return n1 + n2;
            case "-":
                return n1 - n2;
            case "*":
                return n1 * n2;
            case "/":
                if (n2 == 0) {
                    display.setText("Error: Div by 0");
                    return 0; // Error
                }
                return n1 / n2;
            default:
                return n2; // Caso por defecto
        }
    }
}
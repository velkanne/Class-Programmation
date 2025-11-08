import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;

public class DemoLogin implements ActionListener {

    private final JFrame frame;
    private final JPanel panel;
    private final JLabel userLabel;
    private final JTextField userText;
    private final JLabel passLabel;
    private final JPasswordField passText;
    private final JButton loginButton;
    private final JLabel statusLabel;

    public DemoLogin() {
        frame = new JFrame("Demo Login");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(350, 200);
        
        panel = new JPanel();
        panel.setLayout(new GridLayout(3, 2, 10, 10));
        
        userLabel = new JLabel("Usuario:");
        userText = new JTextField();
        
        passLabel = new JLabel("Contraseña:");
        passText = new JPasswordField();
        
        statusLabel = new JLabel("");
        
        loginButton = new JButton("Login");
        loginButton.addActionListener(this);

        panel.add(userLabel);
        panel.add(userText);
        panel.add(passLabel);
        panel.add(passText);
        panel.add(statusLabel);
        panel.add(loginButton);
        
        frame.add(panel, BorderLayout.CENTER);
        frame.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        String user = userText.getText();
        String pass = new String(passText.getPassword());

        if (user.equals("admin") && pass.equals("1234")) {
            statusLabel.setForeground(Color.GREEN);
            statusLabel.setText("Login Exitoso!");
        } else {
            statusLabel.setForeground(Color.RED);
            statusLabel.setText("Credenciales Inválidas."); 
        }
    }
}
import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingConstants;

public class DemoContador implements ActionListener {

    private int count;
    private final JFrame frame;
    private final JLabel countLabel;
    private final JButton incrementButton;
    private final JButton decrementButton;
    private final JButton resetButton;

    /**
     * 
     */
    public DemoContador() {
        count = 0;
        
        frame = new JFrame("Demo Contador");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 200);
        frame.setLayout(new BorderLayout());

        countLabel = new JLabel();
        countLabel.setText(String.valueOf(count));
        countLabel.setFont(new Font("Arial", Font.BOLD, 80));
        countLabel.setHorizontalAlignment(SwingConstants.CENTER);
        
        JPanel buttonPanel = new JPanel();
        buttonPanel.setLayout(new FlowLayout());

        incrementButton = new JButton("Incrementar");
        decrementButton = new JButton("Decrementar");
        resetButton = new JButton("Reiniciar");
        
        buttonPanel.add(incrementButton);
        buttonPanel.add(decrementButton);
        buttonPanel.add(resetButton);

            frame.add(countLabel, BorderLayout.CENTER);
            frame.add(buttonPanel, BorderLayout.SOUTH);
    
            frame.setVisible(true);
            
            initializeActionListeners();
        }
        
        private void initializeActionListeners() {
            incrementButton.addActionListener(this);
            decrementButton.addActionListener(this);
            resetButton.addActionListener(this);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == incrementButton) {
            count++;
        } else if (e.getSource() == decrementButton) {
            if (count > 0) {
                count--;
            }
        } else if (e.getSource() == resetButton) {
            count = 0;
        }
        
        updateLabel();
    }

    private void updateLabel() {
        countLabel.setText(String.valueOf(count));
    }
    
    // El método main() fue eliminado.
}
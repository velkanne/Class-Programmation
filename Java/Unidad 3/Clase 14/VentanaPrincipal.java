import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;



        // Clase que representa la ventana principal de la aplicación
    public class VentanaPrincipal extends JFrame{
    // Constructor de la clase VentanaPrincipal
        public VentanaPrincipal(){
            this.setTitle("Mi Ventana Principal");
                this.setSize(400, 300);
                this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            this.setLocationRelativeTo(null);

        JPanel panel = new JPanel();
        JLabel etiqueta = new JLabel("Hola maracas");
        JButton boton = new JButton("Tocame (son 5000 luka el minuto)");


        panel.add(etiqueta);
        panel.add(boton);
        this.add(panel);

    }
}

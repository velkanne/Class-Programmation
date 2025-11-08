import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JButton;
import javax.swing.JTabbedPane;
import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.FlowLayout;

public class DemoLayouts {

    public DemoLayouts() {
        JFrame frame = new JFrame("Demo 1: Layout Managers");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);

        // JTabbedPane permite mostrar múltiples paneles (demos) en pestañas
        JTabbedPane tabs = new JTabbedPane();

        // 1. BorderLayout
        // Divide el contenedor en 5 regiones: NORTH, SOUTH, EAST, WEST, CENTER.
        // Es útil para la estructura general de la aplicación.
        JPanel borderPanel = new JPanel(new BorderLayout());
        borderPanel.add(new JButton("NORTH"), BorderLayout.NORTH);
        borderPanel.add(new JButton("SOUTH"), BorderLayout.SOUTH);
        borderPanel.add(new JButton("CENTER"), BorderLayout.CENTER);
        tabs.addTab("BorderLayout", borderPanel);

        // 2. GridLayout
        // Organiza componentes en una cuadrícula (matriz) de igual tamaño.
        // Ignora el tamaño preferido de los componentes.
        // Usado para calculadoras, logins, etc.
        JPanel gridPanel = new JPanel(new GridLayout(3, 2, 10, 10)); // 3 filas, 2 cols, 10px espacio
        for (int i = 1; i <= 6; i++) {
            gridPanel.add(new JButton("Botón " + i));
        }
        tabs.addTab("GridLayout", gridPanel);
        
        // 3. FlowLayout
        // Coloca componentes en fila, uno tras otro (flujo).
        // Si no caben en la fila, baja a la siguiente.
        // Es el layout por defecto de JPanel.
        JPanel flowPanel = new JPanel(new FlowLayout(FlowLayout.LEFT)); // Alineado a la izquierda
        flowPanel.add(new JButton("Botón A"));
        flowPanel.add(new JButton("Botón B"));
        flowPanel.add(new JButton("Botón C (Largo)"));
        tabs.addTab("FlowLayout", flowPanel);

        frame.add(tabs);
        frame.setVisible(true);
    }
}
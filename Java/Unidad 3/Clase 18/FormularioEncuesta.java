import java.awt.*;
import javax.swing.*;
// Se eliminan los imports de ActionListener ya que la clase no lo implementa
// import java.awt.event.ActionEvent;
// import java.awt.event.ActionListener;

// Se elimina "implements ActionListener" de la declaración de la clase
public class FormularioEncuesta extends JFrame {

    private final JCheckBox checkTerminos;
    private final JRadioButton radioBasico, radioMedio, radioAvanzado;
    private final ButtonGroup grupoNivel;
    private final JComboBox<String> comboFrecuencia;
    private final JTextArea areaComentarios;
    private final JScrollPane scrollComentarios; 
    private final JButton botonEnviar;

    public FormularioEncuesta() {
        setTitle("Formulario de Encuesta");
        setSize(400, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout(FlowLayout.CENTER, 10, 10));

        checkTerminos = new JCheckBox("Acepto los términos y condiciones");
        add(checkTerminos);

        JPanel panelNivel = new JPanel();
        panelNivel.setBorder(BorderFactory.createTitledBorder("Nivel"));
        radioBasico = new JRadioButton("Básico");
        radioMedio = new JRadioButton("Medio");
        radioAvanzado = new JRadioButton("Avanzado");
        grupoNivel = new ButtonGroup();
        grupoNivel.add(radioBasico);
        grupoNivel.add(radioMedio);
        grupoNivel.add(radioAvanzado);
        panelNivel.add(radioBasico);
        panelNivel.add(radioMedio);
        panelNivel.add(radioAvanzado);
        add(panelNivel);

        String[] frecuencias = {"Diariamente", "Semanalmente", "Mensualmente"};
        comboFrecuencia = new JComboBox<>(frecuencias);
        add(comboFrecuencia);

        areaComentarios = new JTextArea(5, 30);
        scrollComentarios = new JScrollPane(areaComentarios); 
        add(scrollComentarios);

        botonEnviar = new JButton("Enviar");
        
        // SOLUCIÓN: Usar una expresión Lambda en lugar de addActionListener(this)
        // La lógica del antiguo método actionPerformed() se mueve aquí adentro.
        botonEnviar.addActionListener( e -> {
            // 1. Validar términos
            if (!checkTerminos.isSelected()) {
                JOptionPane.showMessageDialog(this, 
                    "Debe aceptar los términos y condiciones.", 
                    "Error de Validación", 
                    JOptionPane.ERROR_MESSAGE);
                return; // Detiene la ejecución del listener
            }

            // 2. Recopilar datos
            StringBuilder resumen = new StringBuilder();
            resumen.append("--- Resumen de la Encuesta ---\n");
            
            String nivel = "No seleccionado";
            if (radioBasico.isSelected()) nivel = "Básico";
            if (radioMedio.isSelected()) nivel = "Medio";
            if (radioAvanzado.isSelected()) nivel = "Avanzado";
            resumen.append("Nivel: ").append(nivel).append("\n");

            resumen.append("Frecuencia: ").append(comboFrecuencia.getSelectedItem()).append("\n");
            resumen.append("Comentarios: ").append(areaComentarios.getText()).append("\n");

            // 3. Mostrar resumen
            JOptionPane.showMessageDialog(this, 
                resumen.toString(), 
                "Encuesta Enviada", 
                JOptionPane.INFORMATION_MESSAGE);
            
            System.out.println(resumen.toString());
        });
        
        add(botonEnviar);
    }
    
    // El método actionPerformed() se elimina de la clase.
}
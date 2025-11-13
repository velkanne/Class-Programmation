import javax.swing.*;
import java.awt.*;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class FormularioEncuesta extends JFrame {

    // Componentes del Formulario
    private final JCheckBox checkTerminos;
    private final JRadioButton radioBasico, radioMedio, radioAvanzado;
    private final ButtonGroup grupoNivel;
    private final JComboBox<String> comboFrecuencia;
    private final JTextArea areaComentarios;

    // Componentes de Visualización y Acción
    private final DefaultListModel<String> listModel;
    private final JList<String> listaEncuestas;
    private final JButton botonGuardar; // Reemplaza a 'botonEnviar'
    private final JButton botonCargar; // Nuevo botón de importación

    private static final String FILENAME = "encuestas.txt";
    private static final String DELIMITER = "|";

    public FormularioEncuesta() {
        setTitle("Formulario y Visor de Encuestas");
        setSize(500, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // 1. Layout Refactorizado
        // Se usa BorderLayout para dividir la app en secciones
        setLayout(new BorderLayout(10, 10));

        // --- Panel del Formulario (NORTH) ---
        // Se usa BoxLayout para apilar los componentes verticalmente
        JPanel formPanel = new JPanel();
        formPanel.setLayout(new BoxLayout(formPanel, BoxLayout.Y_AXIS));
        formPanel.setBorder(BorderFactory.createTitledBorder("Nueva Encuesta"));

        checkTerminos = new JCheckBox("Acepto los términos y condiciones");
        formPanel.add(checkTerminos);

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
        formPanel.add(panelNivel);

        String[] frecuencias = {"Diariamente", "Semanalmente", "Mensualmente"};
        comboFrecuencia = new JComboBox<>(frecuencias);
        comboFrecuencia.setBorder(BorderFactory.createTitledBorder("Frecuencia"));
        formPanel.add(comboFrecuencia);

        areaComentarios = new JTextArea(5, 30);
        JScrollPane scrollComentarios = new JScrollPane(areaComentarios);
        scrollComentarios.setBorder(BorderFactory.createTitledBorder("Comentarios"));
        formPanel.add(scrollComentarios);

        add(formPanel, BorderLayout.NORTH);

        // --- Panel de Visualización (CENTER) ---
        // 2. JList para mostrar los datos importados
        listModel = new DefaultListModel<>();
        listaEncuestas = new JList<>(listModel);
        JScrollPane listScrollPane = new JScrollPane(listaEncuestas);
        listScrollPane.setBorder(BorderFactory.createTitledBorder("Encuestas Guardadas"));

        add(listScrollPane, BorderLayout.CENTER);

        // --- Panel de Botones (SOUTH) ---
        JPanel buttonPanel = new JPanel(new FlowLayout());
        botonGuardar = new JButton("Guardar Encuesta (Exportar)");
        botonCargar = new JButton("Cargar Encuestas (Importar)");
        buttonPanel.add(botonGuardar);
        buttonPanel.add(botonCargar);

        add(buttonPanel, BorderLayout.SOUTH);

        // --- Lógica de Eventos (Lambdas) ---

        // 3. Acción de Guardar (Exportar)
        botonGuardar.addActionListener(e -> guardarEncuesta());

        // 4. Acción de Cargar (Importar)
        botonCargar.addActionListener(e -> cargarEncuestas());
    }

    /**
     * Valida el formulario, recopila los datos, los guarda en "encuestas.txt"
     * y los añade a la lista visual.
     */
    private void guardarEncuesta() {
        // 1. Validar
        if (!checkTerminos.isSelected()) {
            JOptionPane.showMessageDialog(this,
                "Debe aceptar los términos y condiciones.",
                "Error de Validación",
                JOptionPane.ERROR_MESSAGE);
            return;
        }

        // 2. Recopilar datos
        String nivel = "No seleccionado";
        if (radioBasico.isSelected()) nivel = "Básico";
        if (radioMedio.isSelected()) nivel = "Medio";
        if (radioAvanzado.isSelected()) nivel = "Avanzado";

        String frecuencia = (String) comboFrecuencia.getSelectedItem();
        // Reemplazar saltos de línea en comentarios para mantener un registro por línea
        String comentarios = areaComentarios.getText().replace("\n", " ");

        // 3. Formatear para TXT
        String linea = nivel + DELIMITER + frecuencia + DELIMITER + comentarios;

        // 4. Escribir en el archivo (Exportar)
        // Se usa 'true' en FileWriter para añadir (append) al final del archivo.
        try (PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(FILENAME, true)))) {
            
            out.println(linea);
            
            // 5. Añadir a la lista visual
            listModel.addElement(linea);

            // 6. Limpiar formulario
            limpiarFormulario();
            
            JOptionPane.showMessageDialog(this,
                "Encuesta guardada exitosamente.",
                "Exportación Completa",
                JOptionPane.INFORMATION_MESSAGE);

        } catch (IOException ex) {
            JOptionPane.showMessageDialog(this,
                "Error al guardar el archivo: " + ex.getMessage(),
                "Error de E/S",
                JOptionPane.ERROR_MESSAGE);
        }
    }

    /**
     * Limpia la lista visual, lee "encuestas.txt" y carga todas
     * las líneas en la lista visual (JList).
     */
    private void cargarEncuestas() {
        File file = new File(FILENAME);
        if (!file.exists()) {
            listModel.clear();
            listModel.addElement("No se ha guardado ninguna encuesta todavía.");
            return;
        }

        // Limpiar la lista antes de cargar
        listModel.clear();

        // Leer el archivo (Importar)
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String linea;
            while ((linea = br.readLine()) != null) {
                // Añadir cada línea del TXT al modelo de la lista
                listModel.addElement(linea);
            }
        } catch (IOException ex) {
            JOptionPane.showMessageDialog(this,
                "Error al leer el archivo: " + ex.getMessage(),
                "Error de E/S",
                JOptionPane.ERROR_MESSAGE);
        }
    }

    /**
     * Método de utilidad para reiniciar los controles del formulario.
     */
    private void limpiarFormulario() {
        checkTerminos.setSelected(false);
        grupoNivel.clearSelection();
        comboFrecuencia.setSelectedIndex(0);
        areaComentarios.setText("");
    }
}
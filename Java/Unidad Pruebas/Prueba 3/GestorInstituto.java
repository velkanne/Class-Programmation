import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;

public class GestorInstituto {

    private final HashMap<String, Curso> catalogoCursos;
    private ArrayList<Matricula> matriculas;
    private static final String ARCHIVO_SERIALIZACION = "matriculas.ser";

    @SuppressWarnings("OverridableMethodCallInConstructor")
    public GestorInstituto() {
        this.catalogoCursos = new HashMap<>();
        this.matriculas = new ArrayList<>();
        poblarCatalogoCursos();
        cargarDatos();
    }

    private void poblarCatalogoCursos() {
        catalogoCursos.put("PROG1", new Curso("PROG1", "Fundamentos de Programación"));
        catalogoCursos.put("DATOS2", new Curso("DATOS2", "Bases de Datos Avanzadas"));
        catalogoCursos.put("WEB3", new Curso("WEB3", "Desarrollo Web Full Stack"));
        catalogoCursos.put("IA4", new Curso("IA4", "Inteligencia Artificial"));
    }

    public void registrarMatricula(Alumno alumno, ArrayList<Curso> cursosSeleccionados) {
        Matricula nuevaMatricula = new Matricula(alumno, cursosSeleccionados);
        this.matriculas.add(nuevaMatricula);
        System.out.println("Matrícula registrada exitosamente.");
    }

    public ArrayList<Matricula> listarMatriculas() {
        return new ArrayList<>(this.matriculas);
    }

    public Curso buscarCursoPorCodigo(String codigo) {
        return catalogoCursos.get(codigo.toUpperCase());
    }

    public HashMap<String, Curso> getCatalogoCursos() {
        return this.catalogoCursos;
    }

    public void guardarDatos() {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(ARCHIVO_SERIALIZACION))) {
            oos.writeObject(this.matriculas);
            System.out.println("Datos guardados exitosamente en " + ARCHIVO_SERIALIZACION);
        } catch (IOException e) {
            System.err.println("Error al guardar los datos: " + e.getMessage());
        }
    }

    @SuppressWarnings("unchecked")
    public void cargarDatos() {
        File archivo = new File(ARCHIVO_SERIALIZACION);
        if (!archivo.exists()) {
            System.out.println("No se encontró archivo de datos. Iniciando base de datos vacía.");
            return;
        }

        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(ARCHIVO_SERIALIZACION))) {
            this.matriculas = (ArrayList<Matricula>) ois.readObject();
            System.out.println("Datos cargados exitosamente desde " + ARCHIVO_SERIALIZACION);
        } catch (IOException | ClassNotFoundException e) {
            System.err.println("Error al cargar los datos: " + e.getMessage());
            this.matriculas = new ArrayList<>();
        }
    }
}
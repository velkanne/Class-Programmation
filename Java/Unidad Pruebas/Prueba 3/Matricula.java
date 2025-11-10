import java.io.Serializable;
import java.util.ArrayList;

public class Matricula implements Serializable {
    private static final long serialVersionUID = 3L;

    private final Alumno alumno;
    private final ArrayList<Curso> cursosMatriculados;

    public Matricula(Alumno alumno, ArrayList<Curso> cursosMatriculados) {
        this.alumno = alumno;
        this.cursosMatriculados = cursosMatriculados;
    }

    public Alumno getAlumno() {
        return alumno;
    }

    public ArrayList<Curso> getCursosMatriculados() {
        return cursosMatriculados;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("--- MATRÍCULA ---");
        sb.append("\n").append(alumno.toString());
        sb.append("\nCursos Inscritos (" + cursosMatriculados.size() + "):");
        for (Curso c : cursosMatriculados) {
            sb.append("\n  - ").append(c.toString());
        }
        sb.append("\n-----------------\n");
        return sb.toString();
    }
}
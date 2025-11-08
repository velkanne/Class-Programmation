import java.io.Serializable;

public class Curso implements Serializable {
    private static final long serialVersionUID = 1L;

    private final String codigo;
    private final String nombre;

    public Curso(String codigo, String nombre) {
        this.codigo = codigo;
        this.nombre = nombre;
    }

    public String getCodigo() {
        return codigo;
    }

    public String getNombre() {
        return nombre;
    }

    @Override
    public String toString() {
        return "Curso [" + codigo + "] " + nombre;
    }
}
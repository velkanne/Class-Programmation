import java.io.Serializable;

public class Alumno implements Serializable {
    private static final long serialVersionUID = 2L;
    
    private final String rut;
    private final String nombre;

    public Alumno(String rut, String nombre) {
        this.rut = rut;
        this.nombre = nombre;
    }

    public String getRut() {
        return rut;
    }

    public String getNombre() {
        return nombre;
    }

    @Override
    public String toString() {
        return "Alumno [RUT: " + rut + ", Nombre: " + nombre + "]";
    }
}
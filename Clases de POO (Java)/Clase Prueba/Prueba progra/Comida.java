public class Comida {
    private final String nombre;

    public Comida(String nombre) {
        this.nombre = nombre;
    }

    public void preparar() {
        System.out.println("Preparando la comida: " + nombre);
    }
}
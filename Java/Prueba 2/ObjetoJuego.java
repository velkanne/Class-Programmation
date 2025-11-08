/**
 * Clase Padre Abstracta (Requisito de Herencia y Polimorfismo).
 * Define la estructura base para todos los objetos del juego.
 */
public abstract class ObjetoJuego {
    
    // Atributos protegidos para que las clases hijas puedan acceder
    protected String nombre;
    protected String descripcion;

    public ObjetoJuego(String nombre, String descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    /**
     * Polimorfismo: Todas las clases hijas deben implementar su propia versión
     * de este método estándar para mostrar sus detalles.
     */
    @Override
    public abstract String toString(); 
}
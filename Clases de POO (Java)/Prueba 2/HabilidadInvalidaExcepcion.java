/**
 * Excepción Personalizada (Requisito Obligatorio).
 * Se lanza si una habilidad con costo de maná tiene nivel requerido <= 10.
 */
public class HabilidadInvalidaExcepcion extends Exception {
    
    public HabilidadInvalidaExcepcion(String mensaje) {
        // Llama al constructor de la clase padre (Exception)
        super(mensaje);
    }
}
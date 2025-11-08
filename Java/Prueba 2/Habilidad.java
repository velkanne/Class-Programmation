/**
 * Clase Hija 1: Habilidad.
 * Contiene la lógica para lanzar la Excepción Personalizada.
 */
public class Habilidad extends ObjetoJuego {

    private int costoMana;
    private int nivelRequerido;

    public Habilidad(String nombre, String descripcion, int costoMana, int nivelRequerido)
            throws HabilidadInvalidaExcepcion { // Debe declarar que lanza la excepción
        
        super(nombre, descripcion);
        
        // ⚔️ REGLA DE NEGOCIO ÚNICA ⚔️
        // Si el costo de maná es > 0 Y el nivel requerido es <= 10, es INVÁLIDO.
        if (costoMana > 0 && nivelRequerido <= 10) {
            throw new HabilidadInvalidaExcepcion(
                "¡ERROR! Nivel Requerido (" + nivelRequerido + ") es demasiado bajo para un Costo de Maná de " + costoMana + "."
            );
        }

        this.costoMana = costoMana;
        this.nivelRequerido = nivelRequerido;
    }

    // Implementación Polimórfica: Muestra los detalles de Habilidad
    @Override
    public String toString() {
        return "--- Habilidad: " + nombre + 
               " ---\n  Descripción: " + descripcion + 
               "\n  Costo Maná: " + costoMana + 
               "\n  Nivel Req.: " + nivelRequerido;
    }
    
    // Getter usado para la lógica de la regla (aunque no se use en el menú simplificado)
    public int getNivelRequerido() {
        return nivelRequerido;
    }
}
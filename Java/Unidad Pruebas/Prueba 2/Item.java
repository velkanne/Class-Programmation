/**
 * Clase Hija 2: Item.
 * Clase simple para cumplir el requisito de las dos clases hijas.
 */
public class Item extends ObjetoJuego {
    
    private int valor; 
    
    public Item(String nombre, String descripcion, int valor) {
        super(nombre, descripcion);
        this.valor = valor;
    }
    
    // Implementación Polimórfica: Muestra los detalles de Item
    @Override
    public String toString() {
        return "--- Item: " + nombre + 
               " ---\n  Descripción: " + descripcion + 
               "\n  Valor: " + valor + " monedas.";
    }
}
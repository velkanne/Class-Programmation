public class Contacto {
    // Atributos privados (final es correcto para inmutabilidad)
    private final String nombre;
    private final String telefono;
    private final String email; 
    private final String direccion; 
    // Constructor: Asigna todos los parámetros a sus atributos
    public Contacto(String nombre, String telefono, String email, String direccion) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email; 
        this.direccion = direccion; 
    }
    
    // Getters para acceder a todos los datos
    public String getNombre() {
        return nombre;
    }
    public String getTelefono() {
        return telefono;
    }
    public String getEmail() {
        return email;
    }
    public String getDireccion() {
        return direccion;
    }
    // Método toString: Para mostrar en consola (formato legible)
    @Override
    public String toString() {
        return "Nombre: " + nombre + ", Teléfono: " + telefono + ", Email: " + email + ", Dirección: " + direccion;
    }
    
    // Método para persistencia (formato CSV para el GestorContactos)
    public String toCsvString(String delimiter) {
        return nombre + delimiter + telefono + delimiter + email + delimiter + direccion;
    }
}

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public final class GestorContactos {
    
    private final List<Contacto> contactos; 

    private static final String FILE_NAME = "contactos.txt";
    private static final String DELIMITER = ",";
    
    public GestorContactos() {
        contactos = new ArrayList<>();
        try {
            cargarContactos(); 
        } catch (IOException e) {
            System.err.println("Advertencia: No se pudo cargar el archivo de contactos. Iniciando con lista vacía.");
        }
    }
    
    public void añadirContacto(Contacto contacto) {
        contactos.add(contacto);
    }
    
    public boolean eliminarContacto(String nombre) {
        return contactos.removeIf(contacto -> contacto.getNombre().equalsIgnoreCase(nombre));
    }
    
    public Contacto buscarContacto(String nombre) {
        for (Contacto contacto : contactos) {
            if (contacto.getNombre().equalsIgnoreCase(nombre)) {
                return contacto;
            }
        }
        return null;
    }
    
    public List<Contacto> listarContactos() {
        return new ArrayList<>(contactos);
    }

    // ------------------------------------------------------------------
    // Persistencia
    // ------------------------------------------------------------------

    // Método para guardar la lista de contactos en el archivo
    public void guardarContactos() throws IOException {
        try (PrintWriter pw = new PrintWriter(new FileWriter(FILE_NAME))) {
            for (Contacto contacto : contactos) {
                // CORRECCIÓN: Usa el método específico de serialización de Contacto.java
                pw.println(contacto.toCsvString(DELIMITER)); 
            }
        }
    }
    
    // Método para cargar la lista de contactos desde el archivo
    public void cargarContactos() throws IOException {
        File file = new File(FILE_NAME);
        if (!file.exists()) {
            return;
        }
        
        contactos.clear(); 
        
        try (Scanner fileScanner = new Scanner(file)) {
            while (fileScanner.hasNextLine()) {
                String linea = fileScanner.nextLine();
                String[] partes = linea.split(DELIMITER);
                
                if (partes.length >= 4) { 
                    String nombre = partes[0].trim();
                    String telefono = partes[1].trim();
                    String email = partes[2].trim();
                    String direccion = partes[3].trim();
                    
                    contactos.add(new Contacto(nombre, telefono, email, direccion)); 
                }
            }
        }
    }
}
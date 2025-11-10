public class AppPrincipal {
    String nombre;
    int edad;  
    double altura;

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public int getEdad() {
        return this.edad;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    public double getAltura() {
        return this.altura;
    }

    public static void main(String[] args) {
        // Ejemplo de uso
        AppPrincipal persona1 = new AppPrincipal();
        persona1.setNombre("Juan");
        persona1.setEdad(30);
        persona1.setAltura(1.75);
        persona1.saludar();

        System.out.println("Soy " + persona1.getNombre());
        System.out.println("Mi edad es " + persona1.getEdad());
        System.out.println("Mido " + persona1.getAltura() + " metros");
    }

    public void saludar() {
        System.out.println("¡Hola!");
    }
}

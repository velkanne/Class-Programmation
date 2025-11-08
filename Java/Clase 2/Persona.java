public class Persona {
    private String nombre;
    private int edad;
    private double altura;

    public Persona(String nombre, int edad, double altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }

    public void saludar() {
        System.out.println("¡Hola " + this.nombre + "! Tengo " + this.edad + " años y mido " + this.altura + " metros.");
    }

    public void cumplirAños(int cantidad) {
        this.edad += cantidad;
        System.out.println("¡Feliz cumpleaños " + this.nombre + "! Ahora tienes " + this.edad + " años.");
    }

    public String obtenerDescripcion() {
        return "Nombre: " + this.nombre + ", Edad: " + this.edad + ", Altura: " + this.altura + " metros.";
    }
}
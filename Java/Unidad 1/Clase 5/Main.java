public class Main {
    public static void main(String[] args) {
        System.err.println("--- DEMO 1: CLASE ABSTRACCION---");
    
    Circulo miCirculo = new Circulo("Rojo", 5.0);
    Rectangulo miRectangulo = new Rectangulo("Azul", 10.0, 6.5);
    
    System.out.println("Area del circulo: " + miCirculo.calcularArea());
    System.out.println("Area del rectangulo: " + miRectangulo.calcularArea());
    }
}

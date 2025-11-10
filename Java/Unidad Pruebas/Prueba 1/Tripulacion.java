
abstract class Tripulante {
    private String nombre;
    private double recompensa;

    public Tripulante(String nombre, double recompensa) {
        this.nombre = nombre;
        this.recompensa = recompensa;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getRecompensa() {
        return recompensa;
    }

    public void setRecompensa(double recompensa) {
        this.recompensa = recompensa;
    }

    public void mostrarInformacion() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Recompensa: " + recompensa);
    }

    public abstract void accionEspecial();
}

class Capitan extends Tripulante {
    private String frutaDelDiablo;

    public Capitan(String nombre, double recompensa, String frutaDelDiablo) {
        super(nombre, recompensa);
        this.frutaDelDiablo = frutaDelDiablo;
    }

    @Override
    public void mostrarInformacion() {
        super.mostrarInformacion();
        System.out.println("Fruta del Diablo: " + frutaDelDiablo);
    }

    @Override
    public void accionEspecial() {
        System.out.println("Luffy utiliza su poder de la fruta Gomu Gomu no Mi.");
    }
}

class Espadachin extends Tripulante {
    private String estiloDeEspada;

    public Espadachin(String nombre, double recompensa, String estiloDeEspada) {
        super(nombre, recompensa);
        this.estiloDeEspada = estiloDeEspada;
    }

    @Override
    public void mostrarInformacion() {
        super.mostrarInformacion();
        System.out.println("Estilo de Espada: " + estiloDeEspada);
    }

    @Override
    public void accionEspecial() {
        System.out.println("Zoro utiliza su técnica especial de espada: Santoryu.");
    }
}

class Navegante extends Tripulante {
    private boolean mapaDelNuevoMundo;

    public Navegante(String nombre, double recompensa, boolean mapaDelNuevoMundo) {
        super(nombre, recompensa);
        this.mapaDelNuevoMundo = mapaDelNuevoMundo;
    }

    @Override
    public void mostrarInformacion() {
        super.mostrarInformacion();
        System.out.println("Posee mapa del Nuevo Mundo: " + (mapaDelNuevoMundo ? "Sí" : "No"));
    }

    @Override
    public void accionEspecial() {
        System.out.println("Nami está creando un mapa del Nuevo Mundo.");
    }
}

class Cocinero extends Tripulante {
    private String estiloDeCombate;

    public Cocinero(String nombre, double recompensa, String estiloDeCombate) {
        super(nombre, recompensa);
        this.estiloDeCombate = estiloDeCombate;
    }

    @Override
    public void mostrarInformacion() {
        super.mostrarInformacion();
        System.out.println("Estilo de Combate: " + estiloDeCombate);
    }

    @Override
    public void accionEspecial() {
        System.out.println("Sanji utiliza su estilo de combate: Piernas Negras.");
    }
}

public class Tripulacion {
    public static void main(String[] args) {
        Tripulante luffy = new Capitan("Monkey D. Luffy", 3000000000.0, "Gomu Gomu no Mi");
        Tripulante zoro = new Espadachin("Roronoa Zoro", 1111000000.0, "Santoryu");
        Tripulante nami = new Navegante("Nami", 366000000.0, true);
        Tripulante sanji = new Cocinero("Vinsmoke Sanji", 1032000000.0, "Piernas Negras");

        System.out.println("--- Información de Luffy ---");
        luffy.mostrarInformacion();
        luffy.accionEspecial();
        System.out.println();

        System.out.println("--- Información de Zoro ---");
        zoro.mostrarInformacion();
        zoro.accionEspecial();
        System.out.println();

        System.out.println("--- Información de Nami ---");
        nami.mostrarInformacion();
        nami.accionEspecial();
        System.out.println();

        System.out.println("--- Información de Sanji ---");
        sanji.mostrarInformacion();
        sanji.accionEspecial();
    }
}

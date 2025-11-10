public class Avion implements Volador {
    private final String modelo;

    public Avion(String modelo){
        this.modelo = modelo;
    }

    @Override
    public void volar(){
        System.out.println("El avion modelo " + modelo + " prende sus motores para despegar y apagar la calentura de esta hueona");
    }
}

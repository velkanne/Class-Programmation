public class Pajaro implements Volador{
    private String especie;

    public Pajaro(String especie){
        this.especie = especie;
    }

    @Override
    public void volar(){
        System.out.println("El pajaro de la especie " + especie + " aletea a lo maldito");
    }
}

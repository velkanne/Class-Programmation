//la palabra clave implements se usa para adoptar el contrato de una interfaz
public class Perro implements Sonido {
    //implementacion del metodo definido en la interfaz
    @Override
    public void emitirSonido(){
        System.out.println("Guaaa!!");
    }
}

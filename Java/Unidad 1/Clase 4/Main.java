public class Main {
    public static void main(String[] args){
        System.out.println("----Demo 1: Encapsulamiento y Constructores----");

        // instanciamos un objeto usando el constructor de 3 parametros
        Pokemon pokemon1 = new Pokemon("Pikachu", 90, 10);
        System.out.println("Se ha creado a " + pokemon1.getNombre() + " El nivel es " + pokemon1.getNivel() + " La vida total es de " + pokemon1.getVida());
        
        //instanciamos otro objeto usando el constructo sobrecargado
        Pokemon pokemon2 = new Pokemon("Charmander");
        System.out.println("Se ha creado a " + pokemon2.getNombre() + " El nivel es " + pokemon2.getNivel() + " La vida total es de " + pokemon2.getVida());   

    //modificamos la vida de pokemon1 con el setter()
    pokemon1.setVida(50);
    System.out.println(pokemon1.getNombre() + " ahora tiene " + pokemon1.getVida() + " de vida.");

    //Usamos el setter con un valor no valido para mostrar la validacion 
    pokemon2.setVida(-30);
        
        System.out.println("------Demo 2: Sobrecarga de metodos--------");

        Pokemon miPokemon = new Pokemon("Bulbasaur", 5, 90);   
        Pokemon enemigo = new Pokemon("Squirttle");

        //llamada al metodo atacar pero sin parametros

        miPokemon.atacar();
        miPokemon.atacar(enemigo);

        System.out.println("------Demo 3: Herencia y Polimorfismo--------");
}

    Pokemon miPokemon3 = new Pokemon("Charmander", 5, 90);

    public Pokemon getMiPokemon3() {
        miPokemon3.atacar();
        return miPokemon3;
    }

}
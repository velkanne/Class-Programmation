public class PokemonFuego extends Pokemon {
    
    //atributo adicional especifico para un pokemon de fuego.

    private final double temperaturaFuego;
    
    //Vamos a crear un constructor inicializa los atributos heredados y el propio 
    public PokemonFuego(String nombre, int vida, int nivel, double temperaturaFuego){
        super(nombre, vida, nivel);//llama al constructor de la clase padre (Pokemon) con la palabra clave "super"
        this.temperaturaFuego = temperaturaFuego;
    }
    public double getTemperaturaFuego() {
        return temperaturaFuego;
    }

    @Override
    public void atacar(Pokemon enemigo) {
        System.out.println(this.getNombre() + " ataca con una bola de fuego a " + getTemperaturaFuego() + " grados!");
        System.out.println("El ataque de fuego es super efectivo contra " + enemigo.getNombre() + "!" );
        }
    }




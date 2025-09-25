public class Pokemon{
    //aplicacmos encapsulamiento 
    private String nombre;
    private int nivel;
    private int vida;
    

    //Contructor con 3 parametros
    public Pokemon(String nombre, int vida, int nivel){
        this.nombre = nombre;
        this.nivel = nivel;
        this.vida = vida;
    }

    //constructor sobrecargado 
    public Pokemon(String nombre){
        this.nombre = nombre;
        this.nivel = 1;
        this.vida = 100;
    }

    public Pokemon(int nivel) {
        this.nivel = nivel;
    }

    //metodotos getter  para MOSTRAR los atributos.
    public String getNombre(){
        return this.nombre;
    }
    public int getNivel(){
        return this.nivel;
    }
    public int getVida(){
        return this.vida;
    }
    
    //metodo setter para poder MODIFICAR los atributos.
    public void setVida(int vida){
        if (vida >= 0){
            this.vida = vida;
        } else {
            this.vida = 0;
            System.out.println(this.nombre + "ha sido debilitado ahora tiene " + this.vida + " de vida.");
        }   
    }

    //metodo ataque sin parametros

    public void atacar(){
        System.out.println("!" + this.nombre + " Lanza un ataque basico!");
    }

    /*metodo ataque sobrecargado con un parametro de tipo pokemon
     * Sobrecarga #2
     * Java distingue este metodo del anterior por el tipo se su parametro
    */

    public void atacar(Pokemon enemigo){
        System.out.println("!" + this.nombre + " ataca a " + enemigo.getNombre() + "!");
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setNivel(int nivel) {
        this.nivel = nivel;
    }
}
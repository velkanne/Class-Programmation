public class Main {
    public static void main(String[] args){
        System.out.println("------Demo: Interfaz------");

        //creamos una variable de tipo interfaz
        //se puede asignar un objeto a cualquier clase de implemtets
        Sonido miPerro = new Perro();
        Sonido miGato = new Gato();

        
        //Creamos variables de tipo interfaz volador
        //podemos asignarles obejtos de cuaoquier clase
        Volador miPajaro = new Pajaro("Picaflor");
        Volador miAvion = new Avion("Supertankkkkk");
        
        
        //aunque la variable sea de tipo sonido, java sabe qie metodo llamar
        miPerro.emitirSonido();
        miGato.emitirSonido();
        
        System.out.println("Primer Objeto");
        miPajaro.volar();

        System.out.println("Segundo Obejeto");
        miAvion.volar();


    }
    
}

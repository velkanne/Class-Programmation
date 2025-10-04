public class ValidadorDeEdad {
    public static void validar(int edad){

        if (edad < 0) {
            throw new IllegalArgumentException("La edad no puede ser negativa.");
        } 
        if (edad < 12) {
            throw new IllegalArgumentException("Muy pendeja");
        }
        if (edad < 18) {
            throw new IllegalArgumentException("Debes ser mayor de edad para continuar.");
        }
    }
}
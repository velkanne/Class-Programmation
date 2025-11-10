public class Persona {
    public String name;
    public int age;
    public double height;

    public Persona() {
        this.name = "Unknown";
        this.age = 0;
        this.height = 0.0;
        System.out.println("Se ha creado una persona sin datos.");
    }

    public Persona(String name, int age, double height) {
        this.name = name;
        this.age = age;
        this.height = height;
        System.out.println("Se ha creado una persona con datos.");
    }

    public String getName() { return this.name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return this.age; }
    public void setAge(int age) {
        if (age > 0 && age < 120) {
            this.age = age;
        } else {
            System.out.println("Edad no válida.");
        }
    }

    public void saludar() {
        System.out.println("Hola, mi nombre es " + this.name + ", tengo " + this.age + " años y mido " + this.height + " metros.");
    }

    public static void main(String[] args) {
        Persona p1 = new Persona();
        p1.saludar();

        Persona p2 = new Persona("Juan", 25, 1.75);
        p2.saludar();
    }
}
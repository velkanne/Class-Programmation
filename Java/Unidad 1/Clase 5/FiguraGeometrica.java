public abstract class FiguraGeometrica {

    private String color;
    private double base;

    public FiguraGeometrica(String color) {
        this.color = color;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public abstract double calcularArea();

    public double getBase() {
    return this.base;
    }
}

public class CajeroAutomatico {
    private double saldo;

    public CajeroAutomatico(double saldoInicial) {
        this.saldo = saldoInicial;
    }
    public double  getSaldo() {
        return saldo;
    }

    public void retirarDinero(double cantidad) {
        if (cantidad <= 0) {
            throw new IllegalArgumentException("La cantidad a retirar debe ser mayor que cero.");
        }
        if (cantidad > saldo) {
            throw new IllegalStateException("Fondos insuficientes.");
        }
        saldo -= cantidad;
    }
}

import { Pessoa } from "./Pessoa";

export class Conta {
    protected titular: Pessoa;
    protected saldo: number;

    constructor(titular: Pessoa, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    // Método para depósito
    public depositar(valor: number): void {
        if (valor < 0) throw new Error("O valor de depósito deve ser positivo");
        this.saldo += valor;
    }

    // Método de saque
    public sacar(valor: number): void {
        if (valor <= 0) throw new Error("Valor de saque deve ser positivo.");
        if (valor > this.saldo) throw new Error("Saldo insuficiente para realizar o saque");
        this.saldo -= valor;
    }

    // Polimorfismo
    public exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}}`;
    }
}
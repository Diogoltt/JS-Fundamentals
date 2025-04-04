import { Conta } from "./Conta";
import { Pessoa } from "./Pessoa";

export class Corrente extends Conta {
    private limiteChequeEspecial: number;

    constructor(titular: Pessoa, saldo: number, limiteChequeEspecial: number) {
        super(titular, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public override sacar(valor: number): void {
        if (valor > this.saldo + this.limiteChequeEspecial)
            throw new Error("Valor de saque excede o limite de cheque especial");
        this.saldo -= valor;
    }

    public override exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}, Limite Cheque Especial: ${this.limiteChequeEspecial}`;
    }
}
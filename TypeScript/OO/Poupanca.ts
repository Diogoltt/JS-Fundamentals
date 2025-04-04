import { Pessoa } from "./Pessoa";
import { Conta } from "./Conta";

export class Poupanca extends Conta {
    private taxaRendimento: number;

    constructor(titular: Pessoa, saldo: number, taxaRendimento: number) {
        super(titular, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    public aplicarRendimento(): void {
        this.saldo += this.saldo * (this.taxaRendimento / 100);
    }

    public override exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}, Rendimento ${this.taxaRendimento}%`;
    }
}
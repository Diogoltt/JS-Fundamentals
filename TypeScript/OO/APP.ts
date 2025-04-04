import { Pessoa } from "./Pessoa";
import { Conta } from "./Conta";
import { Corrente } from "./Corrente";
import { Poupanca } from "./Poupanca";

function main() {
    try {
        const cliente1 = new Pessoa("Diogo", 30);
        const cliente2 = new Pessoa("Lahra", 25);

        const contaCorrente = new Corrente(cliente1, 1000, 500);
        const contaPoupanca = new Poupanca(cliente2, 2000, 0.5);

        contaCorrente.depositar(500);
        contaCorrente.sacar(1500);
        console.log(contaCorrente.exibirDados());

        contaPoupanca.aplicarRendimento();
        contaPoupanca.sacar(300);
        console.log(contaPoupanca.exibirDados());
    } catch (error: any) {
        console.error("Erro: ", error.message);
    }
}

main();
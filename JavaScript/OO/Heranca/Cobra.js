import { Animal } from "./Animal.js";

export class Cobra extends Animal  {
    static venenosa = true;

    constructor(nome, raca, peso, idade, cor) {
        super(nome, raca, peso, idade);
        this.cor = cor;
    }

    procriar() {
        console.log("Cobra botou ovos");
    }
}
import { Animal } from "./Animal.js";

export class Cachorro extends Animal {
    
    constructor(nome, raca, peso, idade, cor) {
        super(nome, raca, peso, idade, cor)
    }

    procriar() {
        console.log("Cachorrou fez filhotes");
    }
}
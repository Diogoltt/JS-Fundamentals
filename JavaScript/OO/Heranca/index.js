import { Animal } from "./Animal.js";
import { Cobra } from "./Cobra.js";
import { Cachorro } from "./Cachorro.js";

const animal = new Animal("Animal", "Raca", 10, 5);
const cobra = new Cobra("Cobra", "Coral", 10, 5, "Verde");
const cachorro = new Cobra("Cachorro", "Vira-Lata", 10, 5, "Caramelo");

console.log(animal);
console.log(cobra);
console.log(cachorro);
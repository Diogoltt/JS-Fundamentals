// Op Aritméticos
let a: number = 10;
let b: number = 5;

let totalSoma: number = a + b;
let totalSubtr: number = a - b;
let totalMult: number = a * b;
let totalDiv: number = a / b;
let totalResto: number = a % b;

// Op com strings
console.log(`Soma: ${totalSoma} + Subtração: ${totalSubtr} + Multiplicação: ${totalMult} + Divisão: ${totalDiv} + Resto: ${totalResto}`);

let nome: string = "Lucas";
let sobrenome: string = "Silva";
let textoConcatenado: string = nome + sobrenome;
console.log(`Nome completo: ${textoConcatenado}`);
let textoRepetido: string = nome.repeat(3);
console.log(`Nome repetido: ${textoRepetido}`);

// Op de comparação
let comparacao1: boolean = a == b; // Comparação de igualdade
let comparacao2: boolean = a != b; // Comparação de desigualdade
let comparacao3: boolean = a === b; // comparação de igualdade estrita
let comparacao4: boolean = a !== b; // comparação de desigualdade estrita
console.log(`Comparação 1: ${comparacao1} + Comparação 2: ${comparacao2} + Comparação 3: ${comparacao3} + Comparação 4: ${comparacao4}`);

// Op de comparação lógico
let comparacao5: boolean = a > 0 && b > 0;
let comparacao6: boolean = a < 0 || b < 0;
let comparacao7: boolean = !(a > 0);
console.log(`Comparação 5: ${comparacao5} + Comparação 6: ${comparacao6} + Comparação 7: ${comparacao7}`);

// Ternário
let resultado: string = (a > b) ? "A é maior que B" : "B é maior que A";
console.log(`Resultado: ${resultado}`);

// Op de atribuição
let valor: number = 10;
valor += 5;
valor -= 5;
valor *= 5;
valor /= 5;
valor %= 5;

// Op de incremento/decremento
let contador: number = 0;
contador++;
contador--;

// Op de Nullish coalescing
let valorNulo: number | null = null;
let valorDefault: number = valorNulo ?? 13;
console.log(`Valor nulo: ${valorNulo} + Valor Default: ${valorDefault}`);

// Op de spread
let numeros: number[] = [1, 2, 3, 4, 5];
let novosNumeros: number[] = [...numeros, 6, 7, 8];
console.log(`Números: ${numeros} + Novos números: ${novosNumeros}`);

let pessoa: { nome: string; idade: number } = { nome: "Lucas", idade: 25 };
let { nome: nomePessoa, idade: idadePessoa } = pessoa;
console.log(`Nome: ${nomePessoa} + Idade: ${idadePessoa}`);

let objeto: { nome: string, idade: number } = { nome: "Lucas", idade: 25 };
let resultados: { [key: string]: number } = {
    soma: totalSoma,
    subtracao: totalSubtr,
    multiplicacao: totalMult,
    divisao: totalDiv,
    resto: totalResto
}
console.log(resultados["soma"]);

let resultado2: { [key: string]: any } = {
    nome: "Diogo",
    idade: 25,
    ativo: true,
    endereco: {
        rua: "Rua 1",
        numero: 123
    }
};
console.log(resultado2["endereco"]["rua"]);
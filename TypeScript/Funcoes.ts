type Funcao = (a: number, b: number) => number; 

function soma(a: number, b: number): number {
    return a + b;
}

const somaArrow: Funcao = (a, b) => a + b;

const somaAnonima: Funcao = function (a, b) {
    return a + b;
}

const somaRetornoImplicito: Funcao = (a, b) => a + b;

function somaComParametrosOpcionais(a: number, b?: number): number {
    if (b) {
        return a + b;
    }       
    return a;
}

console.log(soma(1, 2));

// Executar usando deno
// irm https://deno.land/install.ps1 | iex
// executar: deno arquivo.ts
// executar com permissoes: deno run --allow-read arquivo.ts
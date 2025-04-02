function Jogador(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.chutar = function () {
        console.log(this.nome + " chutou a bola");
    }
}

function Time(nome, quantidade) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.jogadores = [];
    this.adicionarJogador = function (jogador) {
        this.jogadores.push(jogador);
    }
}

function compare (obj1, obj2) {
    if (obj1 instanceof obj2) {
        console.log("São iguais");
    }
    else {
        console.log("São diferentes");
    }
}

let jogador1 = new Jogador("Caça rato", 30);
let jogador2 = new Jogador("Yuri aberto", 25);

let time1 = new Time("São Paulo", 11);


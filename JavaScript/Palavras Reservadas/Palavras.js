let pessoa = {
    nome: "Diogo"
}

let pessoa2 = {}

console.log(Object.getOwnPropertyDescriptors(pessoa)); // Mostra os atributos
// e Métodos do objeto

Object.assign(pessoa2, pessoa) // copia o objeto de pessoa para pessoa2

let config = {
    ip: '127.0.0.1',
    port: '8080',
    block: true
}

let { ip, port, block } = config;
console.log(ip, port, block);

let lista = ['Diogo', 'Maria', 'Joao'];
let [nome1, nome2, nome3] = lista;

console.log(nome1, nome2, nome3);

let lista2 = ['Diogo', 'Maria', 'Joao', 'José'];
let [nome4, ...resto] = lista2;

console.log(nome4);
console.log(resto);
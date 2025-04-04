import { writeFile } from 'fs/promises';

const produto = {
    nome: 'Produto',
    preco: 1.99,
    desconto: 0.2
}

writeFile('arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo com sucesso');
})
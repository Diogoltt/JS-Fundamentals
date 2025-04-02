let carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2010,
    PaisDeOrigem: {
        pais: "Brasil",
        cidade: "São Paulo"
    },

    ligar: function () {
        console.log("Ligando o carro");
    }
}

/* console.log(carro);
carro.ligar();

// Modificar valores dentro do objeto
carro.marca = "Ford";
carro.modelo = "Ka"; 
console.log(carro);

// Deletar proprieade do objeto
delete carro.ano;
console.log(carro);
 */

// Operadores do objeto
console.log('marca' && 'modelo' in carro);

console.log(carro.keys());
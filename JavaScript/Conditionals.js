let idade = 18;
if (idade >= 18) {
    console.log("Maior de idade");
} else if (idade >= 12) {
    console.log("Adolescente");
} else {
    console.log("Criança");
}

let podeVotar = (idade >= 18) ? "Pode votar" : "Não pode votar";
console.log(podeVotar);

let podeVotar2 = (idade >= 18) ? "Pode votar" : (idade >= 12) ? "Adolescente" : "Criança";
console.log(podeVotar2);

let podeVotar3 = (idade >= 18 && idade <= 70) ? "Pode votar" : "Não pode votar";
console.log(podeVotar3);

let podeVotar4 = (idade >= 18 || idade <= 70) ? "Pode votar" : "Não pode votar";
console.log(podeVotar4);

let podeVotar5 = (idade != 18) ? "Não pode votar" : "Pode votar";
console.log(podeVotar5);

let dia = 5;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-Feira");
        break;
    case 3:
        console.log("Terça-Feira");
        break;
    case 4:
        console.log("Quarta-Feira");
        break;
    case 5:
        console.log("Quinta-Feira");
        break;
    case 6:
        console.log("Sexta-Feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
        break;
}
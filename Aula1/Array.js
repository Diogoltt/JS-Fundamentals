const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const array2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(array[6]); // 7

console.log(array[0]); // 1
array[0] = 10;

array.push(11); // Adiciona um elemento no final do array
array.pop(); // Remove o último elemento do array
array.shift(); // Remove o primeiro elemento do array
array.unshift(0); // Adiciona um elemento no início do array
array.splice(2, 0, 3); // Adiciona um elemento na posição 2 do array

/* for (let i = 0; i <= 10; i++) {
    if ( i === 5) {
        continue
    }
    console.log(i);
} */

/* let i = 0;
while (i < 10) {
    console.log(i);
    i++;
} */

/* let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10); */

let array = [1, 2, 3, 4, 5];
array.forEach(function (item, index) {
    console.log(item, index);
})
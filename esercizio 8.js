let a = 0;
let b = 1;

function fibonaccinator(numero) {

    let final = [0,1]
for (let i = 2; i < numero; i++) {

final.push(final[i-2] + final[i-1])
}
    return console.log(final)}


fibonaccinator(1);
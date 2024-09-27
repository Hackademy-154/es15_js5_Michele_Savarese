function colcatz(numero) {

let arr = [numero];


while (numero > 1) {
    if (numero % 2 == 0) {
     numero = numero / 2
//   console.log(numero);

 } else {
     numero = numero * 3 +1;
    //  console.log(numero)
 }
 arr.push(numero)
}
return console.log(arr);

}
colcatz(100);

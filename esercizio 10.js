//! Scrivere una funzione che assegnata una stringa ritorni la somma delle cifre presenti nella stringa

function stringhisomminator(stringa){
let arr = stringa.split('').filter(value => /^-?\d+\.?\d*$/.test(value));
let arr2 = arr.reduce((accumulator,currentValue)=> accumulator +Number(currentValue) , 0);

console.log(arr2);
}
stringhisomminator(`Ciao 61 oppure 7 1 zero?`)

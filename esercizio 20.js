
/* 20. scrivere una funzione che, dato un array, ritorni "pari" o "dispari" a
seconda che la somma dei suoi elementi sia, rispettivamente, pari o dispari. */


function oddinator(stringa){
    let arr = stringa.split('').filter(value => /^-?\d+\.?\d*$/.test(value));
    let arr2 = arr.reduce((accumulator,currentValue)=> accumulator +Number(currentValue) , 0);
if (arr2 % 2 == 0) {
    console.log(`La somma è pari`);
} else {
    console.log(`La somma è dispari`);

}

;
    }
    oddinator(`a 5 a 6?`)
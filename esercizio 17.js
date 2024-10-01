/* 17. scrivere una funzione che, assegnata una stringa, ritorni il numero di
vocali presenti (gestire le maiuscole). */


function vocalintor(stringa) {
    let arr = stringa.toLowerCase();
    let arr2= arr.split('');
let vocalinumber = 0;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] == `a` || arr2[i] == `e` || arr2[i] == `i` || arr2[i] == `o` || arr2[i] == `u` ) {
vocalinumber = vocalinumber +1;
    } else {
vocalinumber = vocalinumber;
    }
}


console.log(vocalinumber);
}

vocalintor(`Aiuole`);
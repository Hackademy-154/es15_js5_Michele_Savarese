/* 23. Scrivere una funzione che, assegnata una stringa ed una vocale, ritorni la stringa
originaria con tutte le vocali cambiate in quella fornita.
Ad esempio: "Ciao a tutti", "o" => "Cooo a totto". */


function vocalinazi(stringa, vocale){
// let vocali =['a', 'e', 'i', 'o', 'u']
// let arr =stringa.split('');
let arr2= stringa.replaceAll("a", vocale);
let arr3= arr2.replaceAll("e", vocale);
let arr4= arr3.replaceAll("i",vocale);
let arr5= arr4.replaceAll("o",vocale);
let arr6=arr5.replaceAll("u",vocale);
console.log(arr6);

}

vocalinazi("Ciao a tutti","o");
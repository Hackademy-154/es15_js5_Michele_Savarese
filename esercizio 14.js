//!14. Scrivere una funzione che trasforma un array di array (ogni elemento è una coppia [primo, secondo]) in un oggeto ({primo: secondo}). Ad esempio: [["nome", "mario"], ["cognome", "rossi"], ["anni", 32]] => {nome: "mario",    cognome: "rossi", anni: 32} */


function objectinator(array) {

let object = {};

array.forEach(element =>
object[element[0]] = element[1]
);
return object}

console.log(objectinator([["nome", "mario"], ["cognome", "rossi"], ["anni", 32]]));
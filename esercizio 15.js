/* 15. Scrivere una funzione che, assegnata una stringa, ritorni un oggetto con
chiavi le parole (distinte) e valori la loro frequenza.
Ad esempio: "Quella cosa affianco alla cosa sulla cosa" => {Quella: 1, cosa: 3, affianco: 1,
alla: 1, sulla: 1} */


function stringaoggetti(string) {

let array = string.split(" ");

let unici = Array.from(new Set(array));

let arrayDiArray = unici.map( (el) => [el, array.filter((e) => e === el).length])
console.log(arrayDiArray);

return Object.fromEntries(arrayDiArray);

}
// stringaoggetti("Quella cosa affianco alla cosa sulla cosa")


console.log(stringaoggetti("Quella cosa affianco alla cosa sulla cosa"))

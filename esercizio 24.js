/* 24. Scrivere una funzione che, assegnato un array contenente numeri e stringhe,
ritorni un nuovo array formato dai soli numeri.
Ad esempio: [1, 2, "a", 4] => [1, 2, 4] */

function deletterator(stringhe) {
return console.log(stringhe.filter(el => typeof el == "number"));
}
deletterator([1, 2, "a", 4])
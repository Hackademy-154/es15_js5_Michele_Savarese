//! scrivi una funzione di un array che restiuisca i numeri più grandi di una data soglia

function superanumerot(array, soglia) {
let final = [];
for (let i = 0; i < array.length; i++) {
if (array[i] > soglia) {
    final.push(array[i])
}
}
return console.log(final)
}

superanumerot([1,2,3,4,5], 3);
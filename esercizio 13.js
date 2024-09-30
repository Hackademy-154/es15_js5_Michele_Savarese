//! scrivi una funzione  che generi un array formato da N numeri interi random, fra un minimo ed un massimo assegnati
let arr = [];
function dicerandominator(numeri, min, max) {

for (let i = 0; i < numeri; i++) {
    arr.push(Math.floor(Math.random() * max +min)
)
}
console.log(arr);
}


dicerandominator(10,1,10)
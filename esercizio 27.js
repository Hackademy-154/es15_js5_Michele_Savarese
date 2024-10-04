/* 27. Scrivere una funzione che accetta in ingresso un array di numeri.
Ritornare la somma se questa è pari, altrimenti la media */

function oddsmedia(array) {


    let media= array.reduce((acc,n) => acc+n);
    if (media %2 ==0) {
    console.log( array.reduce((acc,n) => acc+n));
    } else {
    console.log( array.reduce((acc,n) => acc+n) / array.length);
    }

    }


    oddsmedia([1,2,3,4])
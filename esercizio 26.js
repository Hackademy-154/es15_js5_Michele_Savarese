/* 26. Scrivere una funzione che accetta un array di numeri e ne ritori la
media e la deviazione standard. */

function statistica(array){
    let media= array.reduce((acc,n) => acc+n) / array.length;
    array2= array.map(el=> (el - media)**2)
    array3= array2.reduce((acc,n) => acc+n);
    array4=array3/array.length;
    array5=Math.sqrt(array4);
return `La media è ${ media} e la deviazione standard è ${array5}`
}

statistica([1,2,3])
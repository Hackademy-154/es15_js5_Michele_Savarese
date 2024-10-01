// 19. scrivere una funzione che accetta una stringa, e restituisce la parola più lunga.
function Supercalifragilistichespiralidoso(stringa) {
let arr1 = stringa.split(' ').sort((a,b) => a.length - b.length).pop();

console.log(arr1);
}

Supercalifragilistichespiralidoso(`signa logma sugma catafratto stella maggiore`)

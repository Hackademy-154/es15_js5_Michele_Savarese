/* 18. scrivere una funzione che, assegnata una stringa, ne faccia lo slug.
Ad esempio: "Sono una stringa" => "/sono-una-stringa" */

function slugginatore(stringa) {
let arr1 = stringa.toLowerCase().split(' ').join('-');

console.log(`/` + arr1);

}

slugginatore(`Dammi dimmi tempi timpi`);
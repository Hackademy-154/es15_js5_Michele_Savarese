/* 16. scrivere una funzione che, data una stringa, trasformi la prima lettera
di ogni parola in maiuscolo. */


function capitalizer(string) {
    let array = string.split(" ")
for (let i = 0; i < array.length; i++) {
array[i] = array[i][0].toUpperCase() + array[i].substr(1)
}
return array.join(" ");
}

console.log(capitalizer(`ciao caRo`));
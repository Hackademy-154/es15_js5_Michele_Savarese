/* 25. Scrivere una funzione che, assegnata una stringa, ne restituisca il reverse.
Ad esempio: "prova" => "avopr".
Extra: sfruttare questa funzione per individuare palindromi. */

function reversinator(stringa) {
arr1= stringa.split("");
arr2=arr1.reverse();
final=arr2.join("");
console.log(final);
}

reversinator(`prova`)
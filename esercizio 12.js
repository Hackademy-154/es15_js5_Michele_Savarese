//! scrivere una funzione che dato un numero mi ritorni ore e minuti es 3014 = 50:14

function orologinator(numero) {
   let ore = Math.floor(numero / 60);
   let minuti =(numero % 60);

   for (let i = 0; i < 1; i++) {

if(ore < 10 && minuti < 10)
{    console.log(`0${ore} : 0${minuti} `)
}
   else if (ore > 10 && minuti < 10)
  {  console.log(`${ore} : 0${minuti} `);}

    else{
        console.log(`${ore} : ${minuti}`);
    }}

//    console.log(ore);
//    console.log(minuti);
}

orologinator(128);
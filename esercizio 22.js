/* 22. Viene assegnata una stringa contenente solo caratteri "x" e "y".
Scrivere una funzione che ritorni se il numero di "x" e di "y" è uguale.
Ad esempio: "xxyxxyyy" => true. */

let x= 0;
let y=0;

function xynator(xy) {
        for (let i = 0; i < xy.length; i++) {
                if (xy[i] == 'x') {
            x= x+1;
            console.log(x);
        }else if(xy[i] == 'y')
            {
            y= y+1;
            console.log(y);
        }
    }
    if (x === y) {
        console.log(`true`);
        // return `true`
    }
    else {
        console.log(`false`);
        // return `false`
    }
}

xynator('xxyxxyyyxy');
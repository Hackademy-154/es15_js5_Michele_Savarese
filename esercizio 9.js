//! scrivi una funzione che assegnato numero n ritorni se è primo


function priminetor(numero) {

    let arr = [numero];
    for (let i = 1; i < numero +1; i++) {

if(numero == 1){
return false;
}


        else if  (numero % i == 0) {
            arr.push(i)
            // console.log(arr);
        }
            }
                if (arr.length > 3)
            {
            return false
        } else
        {
                return true        }
        }
console.log(priminetor())
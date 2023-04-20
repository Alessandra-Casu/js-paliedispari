/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

let numUser = parseInt(prompt('Inserisci un numero: '));
let int;
let numComp = numRandom();
let sum = 0 ;
function numRandom (int)
{
    let num = Math.floor(Math.random() *  (5), 1);
    console.log(num);
    return num;

}


console.log(numUser);


sum = (numUser + numComp);
console.log(sum);

/*

 let wordReverse = reverseWord(word);         
        
        function reverseWord(str){
            let wordReverse = '';
            let i = str.length - 1;
                while (i >= 0) {
                    wordReverse += str[i];
                    i--;
                }
            return wordReverse;
        }
 */


/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */
let scelta = prompt('Scommetti scrivendo pari o dispari: ');
let numUser = parseInt(prompt('Inserisci un numero: '));
let int;
let numComp = numRandom();
let sum = sumParDisp();

function numRandom (int)
{
    let num = Math.floor(Math.random() *  (5), 1);
    console.log(num);
    return num;

}

function sumParDisp(str){
    
    let somma = (numUser + numComp);
    
    if (somma %2 == 0 && scelta == 'pari'){
        const pari = `La somma è ${ somma}, quindi: PARI e hai vinto`;
        return pari;
        
    }
    else if(somma %2 !== 0 && scelta == 'pari'){
        const dispari = `La somma è ${ somma}, quindi: DISPARI hai perso`;
        return dispari;
    }
    
}


console.log(numUser);
console.log(sum);



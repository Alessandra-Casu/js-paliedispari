/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */
    
   
        let word = prompt('Inserisci la parola da controllare: ');  

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

        if (word == wordReverse ){
            console.log('la parola è palindroma');
          } else {
            console.log('la parola non è palindroma');
        }




       

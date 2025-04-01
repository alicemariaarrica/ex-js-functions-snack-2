//Crea una funzione eseguiOperazione
//Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

//Esempio d’uso:
//const somma = (a, b) => a + b;
//const moltiplica = (a, b) => a * b;

//const eseguiOperazione = (a, b, operazione) => operazione(a, b);

//console.log(eseguiOperazione(3, 4, somma)); // 7
//console.log(eseguiOperazione(3, 4, moltiplica)); // 12


const somma = (a, b) => (a + b)

function eseguiOperazione(a, b, callback) {

    console.log(callback(a, b))
}
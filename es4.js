//Crea un generatore di funzioni creaTimer
//Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".


function creaTimer(tempo) {
    return function () {
        setTimeout(() => {
            console.log("Tempo scaduto!");
        }, tempo);
    };
}

// Esempio d'uso
const timer = creaTimer(5000); // Crea un timer da 5 secondi
timer(); // Dopo 5 secondi stampa "Tempo scaduto!"

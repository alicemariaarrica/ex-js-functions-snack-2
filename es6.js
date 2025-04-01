
//Crea un contatore automatico con setInterval
//Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.


function creaContatoreAutomatico(tempo) {
    let contatore = 0;

    return function () {
        setInterval(() => {
            contatore++;
            console.log(contatore);
        }, tempo);
    }
}

// Esempio di utilizzo:
const avviaContatore = creaContatoreAutomatico(1000); // Avvia il contatore ogni 1000 ms (1 secondo)
avviaContatore(); // Inizia a contare

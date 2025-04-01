//Crea una funzione che ferma un timer dopo un certo tempo
//Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.


function eseguiFerma(messaggio, inizioTimer, fineTimer) {
    const intervallo = setInterval(() => {
        console.log(messaggio);
    }, inizioTimer);

    setTimeout(() => {
        clearInterval(intervallo);  // Ferma il timer dopo fineTimer millisecondi
        console.log("Timer fermato!");
    }, fineTimer);
}

// Esempio di utilizzo:
eseguiFerma("Ciao!", 1000, 5000);  // Stampa "Ciao!" ogni 1 secondo, e ferma il timer dopo 5 secondi

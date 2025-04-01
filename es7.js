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

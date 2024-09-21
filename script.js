document.addEventListener("DOMContentLoaded", function() {
    // La frase da scrivere
    const message = "Benvenuti nella mia pagina web!";
    const messageElement = document.getElementById("welcome-message");
    const cursorElement = document.getElementById("cursor");
    let index = 0;

    // Funzione per scrivere un carattere alla volta
    function typeWriter() {
        if (index < message.length) {
            messageElement.textContent = message.slice(0, index + 1); // Aggiungi un carattere per volta
            messageElement.appendChild(cursorElement); // Aggiungi il cursore alla fine
            index++;
            setTimeout(typeWriter, 60); // Tempo di attesa tra i caratteri in millisecondi (60ms)
        } else {
            cursorElement.style.display = 'none'; // Nascondi il cursore alla fine
        }
    }

    // Aggiungi il cursore al messaggio
    setInterval(() => {
        cursorElement.style.visibility = cursorElement.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500);

    // Avvio della funzione di scrittura
    typeWriter();
});

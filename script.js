// Función para obtener el siguiente sábado a las 6 PM (hora España)
function getNextSaturdayAt6PM() {
    const now = new Date();
    const nextSaturday = new Date(now);
    nextSaturday.setDate(now.getDate() + ((6 - now.getDay() + 7) % 7)); // Próximo sábado
    nextSaturday.setHours(18, 0, 0, 0); // Establecer la hora a las 18:00 (6 PM)

    // Si ya pasó la hora del próximo sábado, programamos para el siguiente sábado
    if (now >= nextSaturday) {
        nextSaturday.setDate(nextSaturday.getDate() + 7);
    }

    return nextSaturday;
}

// Función para actualizar el contador
function updateCountdown() {
    const nextChapterDate = getNextSaturdayAt6PM();
    const now = new Date();
    const timeDiff = nextChapterDate - now;

    if (timeDiff <= 0) {
        document.getElementById("countdown").textContent = "¡El nuevo capítulo de Solo Leveling ya está disponible!";
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("countdown").textContent =
        `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
}

// Actualizamos el contador cada segundo
setInterval(updateCountdown, 1000);

// Llamamos a la función para que el contador se inicie
updateCountdown();


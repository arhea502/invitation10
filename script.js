// Countdown Timer
const eventDate = new Date("December 1, 2024 19:00:00 GMT").getTime();

const timerElement = document.getElementById("timer");

const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(interval);
        timerElement.innerHTML = "The event is now live!";
    }
}, 1000);

// Background animation color transition
const body = document.querySelector("body");
setInterval(() => {
    body.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 30%)`;
}, 5000);

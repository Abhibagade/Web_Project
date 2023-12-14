const countdown = document.querySelector(".countdown");
const resetButton = document.querySelector(".reset"); // Assuming you have a reset button with class "reset"

let interval;

function updateCountdown() {
    const deadLine = new Date(2023, 11, 25, 12, 0, 0);
    const current = new Date();
    const diff = deadLine - current;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
    const minutes = Math.floor((diff / (1000 * 60)) % 60) + "";
    const seconds = Math.floor((diff / 1000) % 60) + "";

    countdown.innerHTML = `<div data-content="Days">${days.length === 1 ? `0${days}` : days}</div>
                         <div data-content="Hours">${hours.length === 1 ? `0${hours}` : hours}</div>
                         <div data-content="Minutes">${minutes.length === 1 ? `0${minutes}` : minutes}</div>
                         <div data-content="Seconds">${seconds.length === 1 ? `0${seconds}` : seconds}</div>`;

    if (diff < 0) {
        clearInterval(interval);
        countdown.innerHTML = "<h1>Here We Go!!!</h1>";
    }
}

function resetCountdown() {
    clearInterval(interval);
    countdown.innerHTML = `<div data-content="Days">00</div>
                         <div data-content="Hours">00</div>
                         <div data-content="Minutes">00</div>
                         <div data-content="Seconds">00</div>`;
}

interval = setInterval(updateCountdown, 1000);

resetButton.addEventListener("click", resetCountdown);

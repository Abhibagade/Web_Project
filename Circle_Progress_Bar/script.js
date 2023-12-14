const halfCircles = document.querySelectorAll('.half-circle');
const halfCirclesTop = document.querySelector('.half-circle-top');
const progressBarCircle = document.querySelector('.progressbar-circle');

document.addEventListener("scroll", () => {
    const pageViewportHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const scrolledPosition = window.pageYOffset;

    const scrolledPositionPercent = (scrolledPosition / (pageHeight - pageViewportHeight)) * 100;
    progressBarCircle.textContent = `${Math.floor(scrolledPositionPercent)}%`;

    const maxRotation = 180;  // Maximum rotation for the half-circles
    const rotation = (scrolledPositionPercent * 3.6);  // 360 degrees divided by 100

    halfCircles[0].style.transform = `rotate(${Math.min(rotation, maxRotation)}deg)`;
    halfCircles[1].style.transform = `rotate(${Math.max(rotation - 180, 0)}deg)`;

    if (scrolledPositionPercent >= 50) {
        halfCirclesTop.style.opacity = '0';
    } else {
        halfCirclesTop.style.opacity = '1';
    }
});

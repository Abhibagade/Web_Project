const date = new Date();

const renderCalender = () => {
    date.setDate(1);

    const monthDays = document.querySelector('.days');

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]

    const Year = date.getFullYear();

    document.querySelector('.date h1').innerHTML = month[date.getMonth()];

    document.querySelector('.date h2').innerHTML = Year;

    document.querySelector('.date p').innerHTML = "Today : "+new Date().toDateString();

    let days = "";

    //loop for previous month days
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    //loop for current month days
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
            //monthDays.innerHTML=days;
        }
        else {
            days += `<div>${i}</div>`;
            //monthDays.innerHTML=days;
        }
    }

    //loop for next months days
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }

}

document.addEventListener('DOMContentLoaded', function () {
    // Add event listener code here
    //for responsive arrows prev and next
    document.querySelector('.prev').addEventListener('click', () => {
        date.setMonth(date.getMonth() - 1);
        renderCalender();

    });

    document.querySelector('.next').addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        renderCalender();
    });
});




renderCalender();
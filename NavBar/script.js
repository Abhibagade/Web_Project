const links=document.querySelectorAll('.navbar-link');

links.forEach(link=>{
    link.addEventListener('click', ()=>{
        links.forEach(link=>{
            link.className="navbar-link";
        });
        link.classList.add('change');

        link.previousElementSibling.classList.add("prevElChange");
        link.nextElementSibling.classList.add("nextElChange");
    });
});

//javascript code for open calender
// function getMessage(){
//     alert("called");
//     const today=new Date();
//     renderCalendar(today.getFullYear(), today.getMonth());
// }

// function renderCalendar(year, month) {
//     const monthYearElement = document.getElementById("month-year");
//     monthYearElement.textContent = new Date(year, month, 1).toLocaleString('default', { month: 'long', year: 'numeric' });
  
//     const container = document.getElementById("calendar");
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const firstDayOfWeek = new Date(year, month, 1).getDay();
  
//     const calendar = document.createElement("div");
//     calendar.className = "calendar";
  
//     // Create empty cells for days before the first day of the month
//     for (let i = 0; i < firstDayOfWeek; i++) {
//       const emptyCell = document.createElement("div");
//       emptyCell.className = "day";
//       calendar.appendChild(emptyCell);
//     }

//       // Create cells for each day in the month
//   for (let day = 1; day <= daysInMonth; day++) {
//     const dayCell = document.createElement("div");
//     dayCell.className = "day";
//     dayCell.textContent = day;
//     calendar.appendChild(dayCell);
//   }

//   container.innerHTML = ""; // Clear previous calendar
//   container.appendChild(calendar);
// }
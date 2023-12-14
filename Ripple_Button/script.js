const btn=document.querySelector('.btn');
let ripple;

btn.addEventListener('mouseover',(e)=>{
    //alert("Enter");
    //console.log(e.target.getBoundingClientRect());
    const left = e.clientX - btn.getBoundingClientRect().left;
    const top = e.clientY - btn.getBoundingClientRect().top;
    ripple=document.createElement('div');
   // ripple.classList.add("ripple");
   ripple.addClass('ripple');
    ripple.style.left=`${left}px`;
    ripple.style.top=`${top}px`;
    btn.prepend(ripple);
});

// document.addEventListener('DOMContentLoaded', () => {
//     const btn = document.querySelector('.btn');
    
//     btn.addEventListener('mouseover', (e) => {
//       const rect = btn.getBoundingClientRect();
//       const left = e.clientX - rect.left;
//       const top = e.clientY - rect.top;
  
//       const ripple = document.createElement('div');
//       ripple.classList.add('ripple');
//       ripple.style.left = `${left}px`;
//       ripple.style.top = `${top}px`;
//       btn.appendChild(ripple);
  
//       ripple.addEventListener('animationend', () => {
//         ripple.remove();
//       });
//     });
//   });
  

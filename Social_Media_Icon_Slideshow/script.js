const slideshow=document.querySelector('.slideshow');
const startButton=document.getElementById('startSlideshow');
let intervalId;

startButton.addEventListener('click', () => {
startButton.disabled = true;
setInterval(()=>{
    const firstIcon=slideshow.firstElementChild; 
    firstIcon.classList.add('faded-out');

    const thirdIcon=slideshow.children[3];
    thirdIcon.classList.add('light');
    thirdIcon.previousElementSibling.classList.remove('light');

    setTimeout(()=>{
        slideshow.removeChild(firstIcon);
        slideshow.appendChild(firstIcon);
        setTimeout(()=>{
            firstIcon.classList.remove('faded-out');
        }, 500)
    }, 500);

}, 3000);

});

const wt=document.getElementById('wtp');
wt.addEventListener('click', ()=>{
    const wpURL="https://www.whatsapp.com/";
    window.open(wpURL, '_blank');
});

const yt=document.getElementById('yt');
yt.addEventListener('click', ()=>{
    const ytURL="https://www.youtube.com/";
    window.open(ytURL, '_blank');
})

const twt=document.getElementById('twt');
twt.addEventListener('click', ()=>{
    const twtURL="https://twitter.com/";
    window.open(twtURL, "_blank");
})

const insta=document.getElementById('insta');
insta.addEventListener('click', ()=>{
    const instaURL="https://www.instagram.com/";
    window.open(instaURL, "_blank");
})

const fb=document.getElementById('fb');
fb.addEventListener('click', ()=>{
    const fbURL="https://www.facebook.com/";
    window.open(fbURL, "_blank");
})

const yahoo=document.getElementById('yh');
yh.addEventListener('click', ()=>{
    const yahURL="https://in.mail.yahoo.com/";
    window.open(yahURL, "_blank");
})
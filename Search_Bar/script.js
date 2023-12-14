const searchInputWrapper = document.querySelector(".search-input-wrapper");
const searchInput=document.querySelector('.search-input input')
const searchIcon=document.querySelector('.search-icon i');
const closeIcon=document.querySelector('.search-input i');

// searchIcon.addEventListener('click', ()=>{
//     searchIcon.parentElement.classList.add('change');
//     searchInputWrapper.classList.add("change");

//     setTimeout(()=>{
//         searchInput.focus();
//     }, 1000);
// });

//click event
searchIcon.addEventListener('click', handleClickEvent);
let clickCount=0;
function handleClickEvent(){
    //alert(clickCount)
    clickCount++;

    if(clickCount>=2){
        performGoogleSearch();
    }
    else{
        searchIcon.parentElement.classList.add('change');
        searchInputWrapper.classList.add("change");
        setTimeout(()=>{
            searchInput.focus();
        }, 1000);
    }
}

//close search bar event
closeIcon.addEventListener('click', ()=>{
    searchIcon.parentElement.classList.remove("change");
    searchInputWrapper.classList.remove("change");
});

//performing google search operation
const searchInputData=document.getElementById('inputDataValue');
function performGoogleSearch() {
    const searchTerm = searchInputData.value;
    //alert(searchTerm);
    if (searchTerm) {  // Check if searchTerm has a value (not falsy)
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
        window.location.href = googleSearchUrl;
    }
}
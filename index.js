//dark mode
function changeMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");}


// Initial state

const cardEl = document.querySelector(".card")
const initialState = document.querySelector(".card__initial")
const searchEl = document.querySelector(".search")
searchEl.addEventListener('submit', function(event){
    event.preventDefault();
    cardEl.style.display = "grid";
    initialState.style.display = "none";  
})

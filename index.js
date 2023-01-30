//dark mode
function changeMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");}


// Initial state

const cardEl = document.querySelector(".card")
const initialState = document.querySelector(".card__initial")
const octocatProfile = document.getElementById ("card-profile")
octocatProfile.addEventListener("click", function(event){
    cardEl.style.display = "grid";
    initialState.style.display = "none";
})
